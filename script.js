function togglePopup(openPopupId, closePopupId) {
  var openPopup = document.getElementById(openPopupId);
  var closePopup = document.getElementById(closePopupId);
  if (closePopup.classList.contains("show")) {
    closePopup.classList.remove("show");
  }
  openPopup.classList.toggle("show");
}

function closePopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.classList.remove("show");
}

fetch("https://us-central1-payday-8ab25.cloudfunctions.net/getMatchesWeb")
  .then(response => response.json())
  .then(data => {
    console.log("Received data:", data);

    const ufcEvents = data.documents.filter(document => document.SPORTS_NAME === "UFC");
    let ufcRows = '';
    ufcEvents.forEach((document, index) => {
      if(index !== 0) { 
        ufcRows += `<hr style="opacity:50%;">`;
      }
      ufcRows += `<div class="card1">`;
      ufcRows += `<h5>${document.CARD_NAME || document.MATCH_NAME}</h5>`;
      ufcRows += `<h6>${document.CARD_DESCRIPTION || ""}</h6>`;
      ufcRows += `<p>${convertToLocalTime(document.CARD_DATE_TIME)}</p></div>`;
    });
    console.log("UFC Rows:", ufcRows);
    document.getElementById('ufcTableRows').innerHTML = ufcRows;

    const nbaEvents = data.documents.filter(document => document.SPORTS_NAME === "NBA");
    let nbaRows = '';
    nbaEvents.forEach((document, index) => {
      if(index !== 0) { 
        nbaRows += `<hr style="opacity:50%;">`;
      }
      nbaRows += `<div class="card1">`;
      nbaRows += `<h5>${document.CARD_NAME || document.MATCH_NAME}</h5>`;
      nbaRows += `<h6>${document.CARD_DESCRIPTION || ""}</h6>`;
      nbaRows += `<p>${convertToLocalTime(document.MATCH_DATE_TIME)}</p></div>`;
    });
    console.log("NBA Rows:", nbaRows);
    document.getElementById('nbaTableRows').innerHTML = nbaRows;

    const nflEvents = data.documents.filter(document => document.SPORTS_NAME === "NFL");
    let nflRows = '';
    nflEvents.forEach((document, index) => {
      if(index !== 0) { 
        nflRows += `<hr style="opacity:50%;">`;
      }
      nflRows += `<div class="card1">`;
      nflRows += `<h5>${document.CARD_NAME || document.MATCH_NAME}</h5>`;
      nflRows += `<h6>${document.CARD_DESCRIPTION || ""}</h6>`;
      nflRows += `<p>${convertToLocalTime(document.MATCH_DATE_TIME)}</p></div>`;
    });
    console.log("NFL Rows:", nflRows);
    document.getElementById('nflTableRows').innerHTML = nflRows;
  })
  .catch(error => console.error('Error fetching match data:', error));

// Function to convert GMT time to local time
function convertToLocalTime(gmtTimeString) {
  const localTime = new Date(gmtTimeString);
  return localTime.toLocaleString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true // For 12-hour format, remove if 24-hour format is preferred
  });
}

  document.addEventListener('DOMContentLoaded', async function() {
    const legalStates = [
        "Alaska", "California", "Florida", "Georgia", "Illinois", "Kansas", "Kentucky", 
        "Minnesota", "Nebraska", "New Mexico", "North Carolina", "North Dakota", 
        "Oklahoma", "Oregon", "Rhode Island", "South Carolina", "South Dakota", 
        "Texas", "Utah", "West Virginia", "Wisconsin", "Wyoming", "Tamil Nadu"
    ];
    const button = document.getElementById('fetch-button');

    function disableButton() {
        button.removeAttribute('href');
        button.style.pointerEvents = 'none';
        button.style.opacity = '0.5';
        button.addEventListener('click', function(event) {
            event.preventDefault();
            showPopup();
        });
    }

    function showPopup() {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = `
            <div class="popup-content">
                <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
                <p>This app is not available in your location.</p>
            </div>
        `;
        document.body.appendChild(popup);
    }
    try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const userState = data.region ? data.region.trim() : '';
        if (legalStates.includes(userState)) {
            try {
                const linkResponse = await fetch('https://us-central1-payday-8ab25.cloudfunctions.net/appLinkCaller');
                if (!linkResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const linkData = await linkResponse.json();
                const appUrl = linkData.APP_URL;

                if (appUrl) {
                    button.addEventListener('click', function(event) {
                        event.preventDefault(); 

                        const downloadLink = document.createElement('a');
                        downloadLink.href = appUrl;
                        downloadLink.setAttribute('download', ''); 
                        downloadLink.style.display = 'none';
                        document.body.appendChild(downloadLink);
                        downloadLink.click();
                        document.body.removeChild(downloadLink); 

                        setTimeout(() => {
                            window.location.href = 'thank_you.html';
                        }, 1000);
                    });
                } else {
                    console.error('No valid URL received.');
                    disableButton();
                }
            } catch (error) {
                console.error('Error fetching the download link:', error);
                disableButton();
            }
        } else {
            disableButton();
        }
    } catch (error) {
        console.error('Error fetching location data:', error);
        disableButton();
    }
});


let countdown = 10;
const countdownElement = document.getElementById('countdown');
const downloadMessage = document.getElementById('download-message');

const timer = setInterval(function() {
    countdown--;
    countdownElement.textContent = countdown;

    if (countdown <= 0) {
        clearInterval(timer);
        downloadMessage.classList.remove('hidden');
        document.getElementById('timer-message').classList.add('hidden');
    }
}, 1000);
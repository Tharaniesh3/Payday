function togglePopup(openPopupId, closePopupId) {
  var openPopup = document.getElementById(openPopupId);
  var closePopup = document.getElementById(closePopupId);
  if (openPopup.classList.contains("show")) {
      closePopup(closePopupId);
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
  ufcEvents.forEach(document => {
    ufcRows +=`<hr>`;
    ufcRows += `<div>${document.MATCH_NUMBER}</div>`;
    ufcRows += `<h5>${document.CARD_NAME || document.MATCH_NAME}</h5>`;
    ufcRows += `<h6>${document.CARD_DESCRIPTION || "N/A"}</h6>`;
    ufcRows += `<p>${document.CARD_DATE_TIME || document.MATCH_DATE_TIME}</p>`;
  });
  console.log("UFC Rows:", ufcRows);
  document.getElementById('ufcTableRows').innerHTML = ufcRows;
  
  const nbaEvents = data.documents.filter(document => document.SPORTS_NAME === "NBA");
  let nbaRows = '';
  nbaEvents.forEach(document => {
    nbaRows +=`<hr>`;
    nbaRows += `<div class="nba-event">${document.MATCH_NUMBER}</div>`; // Separate column for Match Number
    nbaRows += `<h5>${document.CARD_NAME || document.MATCH_NAME}</h5>`;
    nbaRows += `<h6>${document.CARD_DESCRIPTION || "N/A"}</h6>`;
    nbaRows += `<p>${document.CARD_DATE_TIME || document.MATCH_DATE_TIME}</p>`;
  });
  console.log("NBA Rows:", nbaRows);
  document.getElementById('nbaTableRows').innerHTML = nbaRows;
})
.catch(error => console.error("Fetch error:", error));

var linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.type = 'text/css';
linkElement.href = 'assets\css\style.css'; 
document.head.appendChild(linkElement);
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
    ufcRows += `<div class="fancy">`;
    ufcRows += `<div>${document.MATCH_NUMBER}</div>`;
    ufcRows += `<div>${document.CARD_NAME || document.MATCH_NAME}</div>`;
    ufcRows += `<div>${document.CARD_DESCRIPTION || "N/A"}</div>`;
    ufcRows += `<div>${document.CARD_DATE_TIME || document.MATCH_DATE_TIME}</div>`;
    ufcRows += `</div>`;
  });
  console.log("UFC Rows:", ufcRows);
  document.getElementById('ufcTableRows').innerHTML = ufcRows;
  
  const nbaEvents = data.documents.filter(document => document.SPORTS_NAME === "NBA");
  let nbaRows = '';
  nbaEvents.forEach(document => {
    nbaRows += `<div class="fancy">`;
    nbaRows += `<div>${document.MATCH_NUMBER}</div>`;
    nbaRows += `<div>${document.CARD_NAME || document.MATCH_NAME}</div>`;
    nbaRows += `<div>${document.CARD_DESCRIPTION || "N/A"}</div>`;
    nbaRows += `<div>${document.CARD_DATE_TIME || document.MATCH_DATE_TIME}</div>`;
    nbaRows += `</div>`;
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
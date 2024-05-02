function togglePopup(openPopupId, closePopupId) {
  var openPopup = document.getElementById(openPopupId);
  var closePopup = document.getElementById(closePopupId);
          var openPopups = document.querySelectorAll('.popup.show');
  openPopups.forEach(function(popup) {
      popup.classList.remove('show');
  });
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
      ufcRows += `<tr><td>${document.CARD_NAME || document.MATCH_NAME}</td><td>${document.CARD_DATE_TIME || document.MATCH_DATE_TIME}</td><td>${document.CARD_DESCRIPTION || "N/A"}</td>  </tr>`;
  });
  console.log("UFC Rows:", ufcRows);
  document.getElementById('ufcTableRows').innerHTML = ufcRows;

  const nbaEvents = data.documents.filter(document => document.SPORTS_NAME === "NBA");
  let nbaRows = '';
  nbaEvents.forEach(document => {
      nbaRows += `<tr><td>${document.CARD_NAME || document.MATCH_NAME}</td><td>${document.CARD_DATE_TIME || document.MATCH_DATE_TIME}</td><td>${document.CARD_DESCRIPTION || "N/A"}</td>  </tr>`;
  });
  console.log("NBA Rows:", nbaRows);
  document.getElementById('nbaTableRows').innerHTML = nbaRows;
})

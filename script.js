function togglePopup(openPopupId, closePopupId) {
  var openPopup = document.getElementById(openPopupId);
  var closePopup = document.getElementById(closePopupId);
  // Close the currently open popup
  if (closePopup.classList.contains("show")) {
    closePopup.classList.remove("show");
  }
  // Toggle the display of the target popup
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
    if(index !== 0) { // Ignore <hr> for the first iteration
      ufcRows +=`<hr style="opacity:50%;">`;
    }
    ufcRows += `<div class="card1">`;
    ufcRows += `<h5>${document.CARD_NAME || document.MATCH_NAME}</h5>`;
    ufcRows += `<h6>${document.CARD_DESCRIPTION || ""}</h6>`;
    ufcRows += `<p>${document.CARD_DATE_TIME || document.MATCH_DATE_TIME}</p></div>`;
  });
  console.log("UFC Rows:", ufcRows);
  document.getElementById('ufcTableRows').innerHTML = ufcRows;
  const nbaEvents = data.documents.filter(document => document.SPORTS_NAME === "NBA");
  let nbaRows = '';
  nbaEvents.forEach((document, index) => {
    if(index !== 0) { 
      nbaRows +=`<hr style="opacity:50%;">`;
    }
    nbaRows +=`<div class="card1">`;
    nbaRows += `<h5>${document.CARD_NAME || document.MATCH_NAME}</h5>`;
    nbaRows += `<h6>${document.CARD_DESCRIPTION || ""}</h6>`;
    nbaRows += `<p>${document.CARD_DATE_TIME || document.MATCH_DATE_TIME}</p></div>`;
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
// Check for mobile and tablet devices
const isMobileOrTablet = window.matchMedia("(max-width: 991px)").matches;
// Attach appropriate event listener based on device type
if (isMobileOrTablet) {
    window.addEventListener("scroll", parallaxMobile);
} else {
    window.addEventListener("mousemove", parallaxDesktop);
}
// Parallax function for desktop devices
function parallaxDesktop(event) {
    const layers = document.querySelectorAll(".parallax-layer img");
    layers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute("value"));
        const x = (window.innerWidth - event.pageX * speed) / 100;
        const y = (window.innerHeight - event.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}
// Parallax function for mobile and tablet devices
function parallaxMobile() {
    const layers = document.querySelectorAll(".parallax-layer img");
    layers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute("value"));
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        const x = (window.innerWidth - scrollX * speed) / 100;
        const y = (window.innerHeight - scrollY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}
document.addEventListener('DOMContentLoaded', function() {
  fetch('https://us-central1-payday-8ab25.cloudfunctions.net/appLinkCaller')
    .then(response => response.json())
    .then(data => {
      const appUrl = data.APP_URL;  // Directly access the APP_URL
      document.getElementById('fetch-button').href = appUrl;
    })
    .catch(error => console.error('Error fetching the download link:', error));
});

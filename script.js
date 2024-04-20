import('node-fetch').then(({ default: fetch }) => {
  fetch('https://us-central1-payday-8ab25.cloudfunctions.net/getMatchesWeb')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));
}).catch(error => console.error('Error importing fetch:', error));



// async function renderData() {
//   const container = document.querySelector('.container'); // Changed selector to use class
//   const data = await fetchData(); // Assuming fetchData() is defined elsewhere
//   if (!data) {
//     return;
//   }
//   data.documents.forEach(item => {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     const matchNumber = document.createElement('p');
//     matchNumber.textContent = `Match Number: ${item.MATCH_NUMBER}`;
//     const sportsName = document.createElement('p');
//     sportsName.textContent = `Sports Name: ${item.SPORTS_NAME}`;
//     const cardName = document.createElement('p');
//     cardName.textContent = `Card Name: ${item.CARD_NAME}`;
//     const cardDateTime = document.createElement('p');
//     cardDateTime.textContent = `Card Date Time: ${item.CARD_DATE_TIME}`;
//     const contestPrice = document.createElement('p');
//     contestPrice.textContent = `Contest Price: ${item.CONTEST_PRICE}`;
//     const contestName = document.createElement('p');
//     contestName.textContent = `Contest Name: ${item.CONTEST_NAME}`;
//     card.appendChild(matchNumber);
//     card.appendChild(sportsName);
//     card.appendChild(cardName);
//     card.appendChild(cardDateTime);
//     card.appendChild(contestPrice);
//     card.appendChild(contestName);
//     container.appendChild(card);
//   });
// }

// renderData();



// <div class="col-md-6 col-sm-12 col-xs-12 portfolio_single_item portfolio_cus wow fadeInUp">
//                     <div class="portfolio_item">
//                         <div class="port_img tilt">
//                             <a  ><img src="assets/basketball.png" alt="img" class="img-fluid"></a>
//                         </div>
//                         <a class="exp"  ><span class="exp_inner"><span class="exp_hover">Explore</span></span></a>
//                         <div class="port_text">
//                             <a  >
//                                 <h3 class="port_title">BASKETBALL</h3>
//                             </a>
//                             <p class="catagory">- <a href="#">NEXT UP - NY.KNICKS VS GS.WARRIORS</a></p>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-md-6 col-sm-12 col-xs-12 portfolio_single_item portfolio_cus wow fadeInUp">
//                     <div class="portfolio_item">
//                         <div class="port_img tilt">
//                             <a  ><img src="assets/soccer.png" alt="img" class="img-fluid"></a>
//                         </div>
//                         <a class="exp"  ><span class="exp_inner"><span class="exp_hover">Explore</span></span></a>
//                         <div class="port_text">
//                             <a  >
//                                 <h3 class="port_title">SOCCER</h3>
//                             </a>
//                             <p class="catagory">- <a href="#"> COMING SOON!</a></p>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-md-6 col-sm-12 col-xs-12 portfolio_single_item wow fadeInUp">
//                     <div class="portfolio_item">
//                         <div class="port_img tilt">
//                             <a  ><img src="assets/rugby.png" alt="img" class="img-fluid"></a>
//                         </div>
//                         <a class="exp"  ><span class="exp_inner"><span class="exp_hover">Explore</span></span></a>
//                         <div class="port_text">
//                             <a  >
//                                 <h3 class="port_title">AMERICAN<br>FOOTBALL</h3>
//                             </a>
//                             <p class="catagory">- <a href="#">COMING SOON!</a></p>
//                         </div>
//                     </div>
//                 </div>
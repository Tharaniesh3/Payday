// import('node-fetch').then(({ default: fetch }) => {
//   fetch('https://us-central1-payday-8ab25.cloudfunctions.net/getMatchesWeb')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error fetching data:', error));
// }).catch(error => console.error('Error importing fetch:', error));
// Function to fetch data from the API


async function renderData() {
  const container = document.querySelector('.container'); // Changed selector to use class
  const data = await fetchData(); // Assuming fetchData() is defined elsewhere
  if (!data) {
    return;
  }
  data.documents.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    const matchNumber = document.createElement('p');
    matchNumber.textContent = `Match Number: ${item.MATCH_NUMBER}`;
    const sportsName = document.createElement('p');
    sportsName.textContent = `Sports Name: ${item.SPORTS_NAME}`;
    const cardName = document.createElement('p');
    cardName.textContent = `Card Name: ${item.CARD_NAME}`;
    const cardDateTime = document.createElement('p');
    cardDateTime.textContent = `Card Date Time: ${item.CARD_DATE_TIME}`;
    const contestPrice = document.createElement('p');
    contestPrice.textContent = `Contest Price: ${item.CONTEST_PRICE}`;
    const contestName = document.createElement('p');
    contestName.textContent = `Contest Name: ${item.CONTEST_NAME}`;
    card.appendChild(matchNumber);
    card.appendChild(sportsName);
    card.appendChild(cardName);
    card.appendChild(cardDateTime);
    card.appendChild(contestPrice);
    card.appendChild(contestName);
    container.appendChild(card);
  });
}

renderData();

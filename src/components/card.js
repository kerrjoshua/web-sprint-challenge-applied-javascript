import axios from 'axios';

const Card = ({ headline, authorPhoto, authorName }) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div');
  const divHeadline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const imgAuthPhoto = document.createElement('img');
  const byLine = document.createElement('span');

  card.className = 'card';
  divHeadline.className = 'headline';
  author.className = 'author';
  imgContainer.className = 'img-container';

  divHeadline.textContent = headline;
  imgAuthPhoto.src = authorPhoto;
  byLine.textContent = `By ${authorName}`;

  card.appendChild(divHeadline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(imgAuthPhoto);
  author.appendChild(byLine);

  card.addEventListener('click', () => console.log(headline));

  
  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
const container = document.querySelector(selector);
  axios.get('http://localhost:5001/api/articles')
  .then(res => {

    const sections = Object.values(res.data.articles);

   sections.forEach(section => {
    section.forEach(article => {
      const newCard = Card(article);
      container.appendChild(newCard);
    })
   })
  })
  .catch(err => console.error(err))

 
}

export { Card, cardAppender }

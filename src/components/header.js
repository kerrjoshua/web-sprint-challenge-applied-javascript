const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
const header = document.createElement('div');
const dateSp = document.createElement('span');
const h1 = document.createElement('h1');
const tempSp = document.createElement('span');

header.className = 'header';
dateSp.className = 'date';
dateSp.textContent = date;
h1.textContent = title;
tempSp.className = 'temp';
tempSp.textContent = temp;

header.appendChild(dateSp);
header.appendChild(h1);
header.appendChild(tempSp);

return header

}


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const container = document.querySelector(selector);
  container.appendChild(Header('Hello World!', 'Today!', 'Perfect!'));

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
}

export { Header, headerAppender }

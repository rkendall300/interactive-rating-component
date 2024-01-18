import './App.css';
import { useState } from 'react';
import starIcon from './images/icon-star.svg';
import thankYouImage from './images/illustration-thank-you.svg';

function App() {
  const [ratingValue, setRatingValue] = useState(0);
  const [selected, setSelected] = useState(false);

  const userSelect = (e) => {
    /* Remove any other active ratings */
    let removeFrom = document.getElementsByClassName("active");
    if (removeFrom.length !== 0) {
      removeFrom[0].classList.remove("active");
    } 
    e.target.classList.add("active");
    setRatingValue(e.target.id);
  };

  const submitOn = () => {
    if ((ratingValue !== 0) && (!selected)) {
      setSelected(true);
    }
  };

  return (
    <main>
      { (selected && <Thank ratingValue={ratingValue} />) || (<Home ratingValue={ratingValue} userSelect={userSelect} submitOn={submitOn} />) }
    </main>
  );

}

function Home({ ratingValue, userSelect, submitOn }) {
  return (
    <div className="backdrop">
      <div id="home-card">
        <div id="star-container">
          <img src={starIcon} id="star-image" alt="star-icon"></img>
        </div>
        <h1 id="title">How did we do?</h1>
        <p id="description">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div id="rating-container">
          <div className="rating" id="1" onClick={userSelect}>1</div>
          <div className="rating" id="2" onClick={userSelect}>2</div>
          <div className="rating" id="3" onClick={userSelect}>3</div>
          <div className="rating" id="4" onClick={userSelect}>4</div>
          <div className="rating" id="5" onClick={userSelect}>5</div>
        </div>
        <button id="submit" disabled={ratingValue === 0} onClick={submitOn}>SUBMIT</button>
      </div>
    </div>
  );
}

function Thank({ ratingValue }) {
  return (
    <div className="backdrop">
      <div id="ty-card">
        <div id="ty-img-container">
          <img src={thankYouImage} id="thank-you-image" alt="thank-you"></img>
        </div>
        <div id="selection-message">
          <p id="selection-text">You selected {ratingValue} out of 5</p>
        </div>
        <h2>Thank you!</h2>
        <p id="ty-description">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </div>
  );
}

export default App;

/*
<input type="radio" name="rating" value="1" id="1"></input>
            <label for="1">1</label>
          </div>
          <div className="rating" id="2-rating" onClick={userSelect}>
            <input type="radio" name="rating" value="2" id="2"></input>
            <label for="2">2</label>
          </div>
          <div className="rating" id="3-rating" onClick={userSelect}>
            <input type="radio" name="rating" value="3" id="3"></input>
            <label for="3">3</label>
          </div>
          <div className="rating" id="4-rating" onClick={userSelect}>
            <input type="radio" name="rating" value="4" id="4"></input>
            <label for="4">4</label>
          </div>
          <div className="rating" id="5-rating" onClick={userSelect}>
            <input type="radio" name="rating" value="5" id="5"></input>
            <label for="5">5</label>
          </div>
*/
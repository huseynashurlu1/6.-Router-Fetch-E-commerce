import logo from './logo.svg';
import classes from './App.module.css';
import ProductData from './ProductData';

function App() {

  const hour = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours() 
  const minute = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes() 
  const second = new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds() 
  return (
    <div className="App">
      <header className={classes.Navbar}>
        {/* <img src="https://upload.wikimedia.org/wikipedia/donate/thumb/f/fd/Amazon-logo-white.svg/2560px-Amazon-logo-white.svg.png" alt="" /> */}
      </header>

      <div className={classes.MainContainer}>
        <div className={classes.ProductImage}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Black Strap" />
            <div className={classes.HeartRate}>
              <i class="fa-solid fa-heart-pulse"></i>
              <p>77</p>
            </div>
          {/* <p className={classes.Time}>{`${hour}:${minute}:${second}`}</p> */}
        </div>
        <div className={classes.ProductDetails}>
            <h1>{ProductData.title}</h1>
            <p>{ProductData.description}</p>

          <h3>Select Color</h3>
          <div className={classes.Color}>
            <div className={[classes.ImageBox, classes.SelectedImageBox].join(" ")}>
              <img src="https://imgur.com/iOeUBV7.png" alt="" />
            </div>
            <div className={classes.ImageBox}>
                <img src="https://imgur.com/PTgQlim.png" alt="" />
            </div>
            <div className={classes.ImageBox}>
              <img src="https://imgur.com/Mplj1YR.png" alt="" />
            </div>
            <div className={classes.ImageBox}>
                <img src="https://imgur.com/xSIK4M8.png" alt="" />
            </div>
        </div>

        <h3>Features</h3>
        <div className={classes.ButtonGroup}>
          <button className={[classes.Button,classes.ActiveButton].join(" ")}>{ProductData.featureList[0]}</button>
          <button className={classes.Button}>{ProductData.featureList[1]}</button>
        </div>

        <button className={[classes.Button,classes.CardBtn].join(' ')}>
        <i style={{marginRight: "10px"}} class="fa-solid fa-cart-shopping"></i> Add to Card</button>
        </div>
      </div>

     
    </div>
  );
}

export default App;

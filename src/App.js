import './App.css';
import Paypal from './components/Paypal';
import logo from './images/logo.png';
import product from './images/product-transparent.png';

function App() {
  return (
    <div className="App">
      <div class="menu-toggle">
        <i class="fas fa-bars"></i>
      </div>
      <div class="overlay"></div>

      <nav>
        <i class="fas fa-times"></i>
        <div class="logo">
          <img src={logo} alt="jumpman logo"></img>
        </div>

        <div class="nav-middle">
          <ul>
            <li><a href="#">Collection</a></li>
            <li><a href="#">Catalog</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        <div class="nav-right">
          <ul>
            <li>
              <a href="#">
                <i class="fas fa-search"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-user"></i> Account
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-cart"></i>Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="main">
        <div className="tone-1">
          <div className="product-info">
            <h1>Jordan 1 Retro High Off-White University Blue</h1>
            <p>Time for some Tobacco Road vibes with these Jordan 1 Retro Off-Whites.</p>
            <h2>$1,625</h2>
            {/* <div className="info-btns">
              <a href="#" className="btn discover-btn">DISCOVER</a>
              <a href="#" className="btn cart-btn">ADD TO CART</a>
            </div> */}
            <Paypal></Paypal>
          </div>
        </div>

        <div className="tone-2">
          <img src={product} alt="product"></img>
        </div>
      </div>
    </div>
  );
}

export default App;

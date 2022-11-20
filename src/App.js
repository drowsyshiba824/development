import logo from './shiba-inu.png';
import cart from './shopping-cart.png';
import './App.css';
import Filters from './components/Filters';
import Items from './components/Items';

const itemsData = [
  { name: "Bread", type: "bread", price: 12},
  { name: "Croissant", type: "bread", price: 7},
  { name: "Cake", type: "cake", price: 20},
]
 

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="container flex">
          <img className="logo" src={logo}/>
          <h1 className="title">Shiba's Bakery</h1>
          <div className="cart-container">
            <img className="cart" src={cart}/>
            <p className="cart-count">1</p>
          </div>
        </div>       
      </div>
      <div className="flex">
        <div className="container">
          <Filters />
          <Items itemsData={itemsData} />
        </div>
      </div>
    </div>
  );
}

export default App;

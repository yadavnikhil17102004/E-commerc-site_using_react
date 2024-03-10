
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory ShopCategory="mens" />} />
        <Route path='/womens' element={<ShopCategory ShopCategory="womens" />} />
        <Route path='/kids' element={<ShopCategory ShopCategory="kids" />} />
        <Route path='/product' element={<Product/>} >
          <Route path=':productId' element={<product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import dogs_banner from './Components/Assets/banner_dogs.png'
import cats_banner from './Components/Assets/banner_cats.png'
import babies_banner from './Components/Assets/banner_babies.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/dogs' element={<ShopCategory banner={dogs_banner} category="dogs" />} />
        <Route path='/cats' element={<ShopCategory banner={cats_banner} category="cats" />} />
        <Route path='/babies' element={<ShopCategory banner={babies_banner} category="babies" />} />
        <Route path='/product' element={<Product/>} >
          <Route path=':productId' element={<product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

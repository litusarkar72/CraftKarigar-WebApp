import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Search from "./pages/Search";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import OrderSuccess from "./pages/OrderSuccess";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Profile from "./pages/profile/Profile";
import Orders from "./pages/orders/Orders";

function App() {
  return (
    <>
     <Navbar/>
    <Routes>
     
      <Route path="/" element={<Home />} />
       <Route path="/herobanner" element={<HeroBanner />} />
       <Route path="shop" element={<Shop/>}/>
       <Route path="/product/:id" element={<ProductDetails />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/about" element={<About />} />
       <Route path="/search" element={< Search/>}/>
       <Route path="/signup" element={<Signup/>} />
       <Route path="/login" element={<Login />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/orders" element={<Orders/>}/>
       
      {/* <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<OrderSuccess />} /> */}
      <Route path="/contact" element = {<Contact/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

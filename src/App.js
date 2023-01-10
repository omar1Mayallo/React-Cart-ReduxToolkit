import {Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import Header from "./layout/Header";
import SideBar from "./layout/Sidebar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import SearchOverlay from "./components/SearchOverlay";
import CartSidebar from "./components/CartSidebar";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <CartSidebar />
      <SearchOverlay />
      <main>
        <Routes>
          {/* APP_ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/categories/:id" element={<Category />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          {/* NOT_FOUND_ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;

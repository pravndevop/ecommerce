
import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/category' element={<CategoryPage/>}/>
          <Route path='/product' element={<ProductPage/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element = {<h1>404 page not found!!</h1>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

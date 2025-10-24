// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import FoodDetails from "./pages/FoodDetails";
// import LoginForm from "./pages/LoginForm";
// import Register from "./pages/Register";
// import Toastify from "./Components/Toastify";
// import FoodList from "./pages/FoodList"
// import Cart from "./pages/Cart";
// import Drawer from "@mui/material/Drawer";

// // const apiKey = import.meta.env.VITE_API_KEY
// // const apiUrl = import.meta.env.VITE_API_URL
// // const apiUrls = process.env.REACT_APP_API_URL;
// // const apiKeys = process.env.REACT_APP_API_KEY;

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/login" element={<LoginForm />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/home" element={<FoodList />} />
//         <Route path="/food/:id" element={<FoodDetails />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//       <Toastify />
//     </>
//   );
// }

// export default App;


































import React from "react";
import UseReducer from "./Practice/UseReducer";
import UseReducerForm from "./Practice/UseReducerForm";
import { Routes, Route } from "react-router-dom";
import Home from "./Practice/Home";
import About from "./Practice/About";
import Profile from "./Practice/Profile";
import NavBar from "./Practice/NavBar";
import Contact from "./Practice/Contact";
import ProductList from "./Practice/ProductList";
import Logout from "./Practice/Logout";
import UseContext1 from "./Practice/UseContext1";
import Context1 from "./Practice/context1";
import Context2 from "./Practice/Context2";
function App() {
  return (
    <>
      <UseReducer />
      <UseReducerForm />
      <UseContext1 />
      <Context1>
        <Context2 />
      </Context1>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products/:ids" element={<ProductList />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>



    </>
  );
}

export default App;














// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import FoodDetails from "./pages/FoodDetails";
// import LoginForm from "./pages/LoginForm";
// import Register from "./pages/Register";
// import Toastify from "./Components/Toastify";
// import FoodList from "./pages/FoodList"
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
//       </Routes>
//       <Toastify />
//       <Drawer />
//     </>
//   );
// }

// export default App;


































import React from "react";
import Counter from "./HooksMethods/useState/Counter";
import ObjectData from "./HooksMethods/useState/ObjectData";
import UseEffect from "./HooksMethods/useState/UseEffect";
import UseRef1 from "./HooksMethods/useState/UseRef1";
import UseRef2 from "./HooksMethods/useState/UseRef2";
import UseMemo from "./HooksMethods/useState/UseMemo";
import UseCallback2 from "./HooksMethods/useState/UseCallback2";
import UseContext1 from "./HooksMethods/useState/UseContext1";
import Context1 from "./HooksMethods/useState/Context1";
import UseReducer from "./HooksMethods/useState/UseReducer";
import UseLayoutEffect from "./HooksMethods/useState/UseLayoutEffect";

// import UseReducer from "./Practice/UseReducer";
// import UseReducerForm from "./Practice/UseReducerForm";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Practice/Home";
// import About from "./Practice/About";
// import Profile from "./Practice/Profile";
// import NavBar from "./Practice/NavBar";
// import Contact from "./Practice/Contact";
// import ProductList from "./Practice/ProductList";
// import Logout from "./Practice/Logout";
// import UseContext1 from "./Practice/UseContext1";
// import Context1 from "./Practice/context1";
// import Context2 from "./Practice/Context2";
function App() {
  return (
    <>
      {/* <UseReducer />
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
      </Routes> */}
      <Counter />
      <ObjectData />
      <UseEffect />
      <UseRef1 />
      <UseRef2 />
      <UseMemo />
      <UseCallback2 />
      <UseContext1 />
      <Context1 />
      <UseReducer />
      <UseLayoutEffect />



    </>
  );
}

export default App;














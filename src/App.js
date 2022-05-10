import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import NotFouond from "./pages/NotFound/NotFouond";
import Header from "./pages/Shared/Header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import IteamByParam from "./pages/ItemByParam/IteamByParam";
import RequireAuth from "./RequireAuth/RequireAuth";
import Inventory from "./pages/Invenory/Inventory";
import AddItem from "./pages/AddItem/AddItem";
import MyItem from "./pages/MyItem/MyItem";
import Footer from "./pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route
          path="/add"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="/myitem" element={<MyItem></MyItem>}></Route>
        <Route
          path="/item/:id"
          element={
            <RequireAuth>
              <IteamByParam></IteamByParam>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFouond></NotFouond>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

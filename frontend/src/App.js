import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/home/Home";
import { Header } from "./components/header/Header";
import { Details } from "./pages/details/Details";
import { Account } from "./pages/account/Account";
import { Login } from "./pages/login/Login";
import { Create } from "./components/create/Create";
import { Footer } from "./components/footer/Footer";
import { Register } from "./pages/login/Register"

const App = () => {
  return <>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/details/:id' Component={Details} />
        <Route exact path='/account' Component={Account} />
        <Route exact path='/login' Component={Login} />
        <Route exact path="/register" Component={Register} />
        <Route exact path="/create" Component={Create} />
      </Routes>
      <Footer />
    </Router>
  </>
}

export default App;
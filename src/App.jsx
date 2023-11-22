import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import DetailView from "./Pages/DetailView"
import Login from "./auth/Login"


function App() {
  

  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/detail/:id" element={<DetailView/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App

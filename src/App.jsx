import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import DetailView from "./Pages/DetailView"


function App() {
  

  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/detail/:id" element={<DetailView/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App

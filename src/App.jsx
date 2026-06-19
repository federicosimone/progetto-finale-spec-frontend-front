import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SmartphoneDetail from "./pages/SmartphoneDetail"
import Compare from "./pages/Compare"
import Favorites from "./pages/Favorites"
import DefaultLayout from "./layout/DefaultLayout"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/smartphones/:id" element={<SmartphoneDetail />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}
export default App

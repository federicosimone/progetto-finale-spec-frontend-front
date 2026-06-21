import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SmartphoneDetail from "./pages/SmartphoneDetail"
import Compare from "./pages/Compare"
import Favorites from "./pages/Favorites"
import DefaultLayout from "./layout/DefaultLayout"
import { CompareProvider } from "./context/CompareContext"

function App() {

  return (
    <>
      <CompareProvider>
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
      </CompareProvider>
    </>
  )
}
export default App

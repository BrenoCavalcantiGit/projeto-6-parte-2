import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './components/Footer'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import { GlobalStyle } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil/:id" element={<Perfil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

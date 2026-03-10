import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useHeader } from './hooks/useHeader'
import { useFooter } from './hooks/useFooter'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Products from './pages/Products'
import ReturnsRefunds from './pages/ReturnsRefunds'
import Services from './pages/Services'
import TermsConditions from './pages/TermsConditions'


function App() {
  return (
    <Router>
      <div className="min-h-screen text-slate-100 flex flex-col">
        {useHeader()}
        <main className="flex-1">
          <div className="w-full px-6 py-10 md:px-10 lg:px-16 xl:px-24 2xl:px-28">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="/returns" element={<ReturnsRefunds />} />
            </Routes>
          </div>
        </main>
        {useFooter()}
      </div>
    </Router>
  )
}


export default App

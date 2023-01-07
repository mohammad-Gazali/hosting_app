import { Route, Routes } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { CloudPlan, Contact, FAQ, Home, VPSPlan, WordpressPlan } from './pages';

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<FAQ />} path="/faq" />
        <Route element={<CloudPlan />} path="/cloud" />
        <Route element={<VPSPlan />} path="/vps" />
        <Route element={<WordpressPlan />} path="/wordpress" />
      </Routes>
      <Footer />
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { CloudPlan, Contact, Home, News, VPSPlan, WordpressPlan } from './pages';

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<News />} path="/news" />
        <Route element={<CloudPlan />} path="/cloud" />
        <Route element={<VPSPlan />} path="/vps" />
        <Route element={<WordpressPlan />} path="/wordpress" />
      </Routes>
      <Footer />
    </>
  )
}

export default App

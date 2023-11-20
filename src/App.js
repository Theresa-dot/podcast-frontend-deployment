import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import CreateRegistrant from './components/CreateRegistrant';
import LoginRegistrant from './components/LoginRegistrant';
import Nav from './components/Nav';
import NavLog from './components/NavLog';
import { useState, useEffect } from 'react';
import Main from './components/Main';
import About from './components/about';
import Index from './components/index';
import Contact from './components/contact';
import RegistrantList from './components/registrantList';
import EditRegistrant from './components/editRegistrant';
import Podcast from './components/podcast';

function App() {
  const storedLoggedInStatus = localStorage.getItem('loggedIn');
  const [notLoggedIn, setNotLoggedIn] = useState(storedLoggedInStatus === null ? true : JSON.parse(storedLoggedInStatus));
  const [authors, setAuthors] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSetAuthors = (newAuthors) => {
    setAuthors(newAuthors);
  };

  useEffect(() => {
    localStorage.setItem('loggedIn', JSON.stringify(notLoggedIn));
  }, [notLoggedIn]);

  return (
    <div className="container mt-3">
      <HashRouter>
        {notLoggedIn ? <Nav /> : <NavLog setNotLoggedIn={setNotLoggedIn} setAuthors={handleSetAuthors} />}
        <Routes>
          {notLoggedIn && (
            <>
              <Route path="/" element={<Index />} />
              <Route
                path="/create-registrant"
                element={<CreateRegistrant />}
              />
              <Route
                path="/login-registrant"
                element={<LoginRegistrant setNotLoggedIn={setNotLoggedIn} setLoggedInUser={setLoggedInUser} />}
              />
            </>
          )}
          {!notLoggedIn && (
            <>
              <Route
                path="/main"
                element={<Main authors={authors} />}
              />
              

               
              <Route path="/registrantList" element = {<RegistrantList loggedInUser={loggedInUser} setNotLoggedIn={setNotLoggedIn}/>} />
              <Route path="/podcast" element= {<Podcast/>}/>
              <Route path ="/edit-registrant/:id" element={<EditRegistrant setNotLoggedIn={setNotLoggedIn}/>} />
            </>
          )}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
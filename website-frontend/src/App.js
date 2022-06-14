// import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import './App.css';
import Article from "./routes/js/Article";
import Event_App from './routes/js/Event_app';
import Registration from "./routes/js/Registration";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Newevent1 from './routes/js/Newevent1';
import Home from './routes/js/Home';
import Login from './routes/js/Login';
import Achievements from "./routes/js/Achievements";
import About_us from "./routes/js/About_us";
import Navigation from './routes/js/Navigation';

function App() {
  return (
    <>
    {/* <Achievements></Achievements> */}
    {/* <Home /> */}
    {/* <Newevent1/> */}
    {/* <Registration/> */}
    {/* <Navigation /> */}
    

      <Navigation />
      <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={ <Login />} />
          <Route path="achievements" element={ <Achievements />} />
          <Route path="articles/*" element={ <Article />} />
          <Route path="event_app" element={ <Event_App />} />
          <Route path="registration" element={ <Registration />} />
          <Route path="about_us" element={ <About_us />} />
          <Route path="main_event" element={ <Newevent1 />} />
        </Routes> 
    </>
  );
}

export default App;
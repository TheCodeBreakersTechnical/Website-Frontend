// import './App.css';
// import Newevent1 from './routes/js/Newevent1';
// import Article from "./routes/js/Article";
// import Newevent1 from './routes/js/Newevent1';
// import Event_App from './routes/js/Event_app';
// import Registration from "./routes/js/Registration";
// import { BrowserRouter, Route, Routes} from 'react-router-dom';
<<<<<<< HEAD
 import Home from './routes/js/Home';
=======
import Home from './routes/js/Home';
>>>>>>> 0334f5564b0c47f9d9060617d746a2bbabadb331
// import Register from './routes/js/Register';
// import Login from './routes/js/Login';
// import Achievement from './routes/js/Achievement';
import Navigation from './routes/js/Navigation';
// import Event from './routes/Event';
import Achievements from "./routes/js/Achievements";
import About_us from "./routes/js/About_us";

function App() {
  return (
    <>
<<<<<<< HEAD
    {/* <Achievements></Achievements> */}
    <Home />
    {/* <Newevent1/> */}
    {/* <Registration/> */}
    {/* <Navigation />
=======
>>>>>>> 0334f5564b0c47f9d9060617d746a2bbabadb331
    
      <Routes>
          <Route index element={<Home />} />
          <Route path="register" element={ <Register />} /> 
          <Route path="login" element={ <Login />} />
          <Route path="achievements" element={ <Achievement />} />
          <Route path="/events/*" element={ <Event />} /> 
          <Route path="events" element={ <EventStarting />} />
      </Routes>
    </>
  );
}

export default App;
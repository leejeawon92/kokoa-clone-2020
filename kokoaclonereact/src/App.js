import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Usercomponet from './components/User';
import Channelcomponet from './components/Channel';
import Nav from './components/Navbar';
import Status from './components/Statusbar';
import Screenheader from './components/ScreenHeader';
import Friend from './routes/Friend';

function App() {
  return (
    <div className="App">
      <Status/>
      <Screenheader/> 
      <Usercomponet />
      <Channelcomponet />    
      <BrowserRouter>
        <Routes>
          <Route path='/' component={Friend} ></Route>
        </Routes>
      </BrowserRouter>
      <Nav />
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Navbar';
import Status from './components/Statusbar';
import Screenheader from './components/ScreenHeader';
import Friend from './routes/Friend';
import Chats from './routes/Chats';
import Search from './routes/Search';
import More from './routes/More';
import Settings from './routes/Settings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Status/>
        <Screenheader/> 
        <Routes>
          <Route path='/'  element={<Friend/>} ></Route>
          <Route path='chats' element={<Chats/>} ></Route>
          <Route path='search'  element={<Search/>} ></Route>
          <Route path='more'  element={<More/>} >
            <Route path='settings'  element={<Settings/>} ></Route>
          </Route>
        </Routes>
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;

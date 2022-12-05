import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Navbar';
import Status from './components/Statusbar';
import Friend from './routes/Friend';
import Chats from './routes/Chats';
import Search from './routes/Search';
import More from './routes/More';
import Settings from './routes/Settings';
import Chat from './routes/Chat';

function App() {
  return (
    <>
      <BrowserRouter>
        <Status/>
        <Routes>
          <Route path='/'  element={<Friend/>} ></Route>          
          <Route path='settings'  element={<Settings/>} ></Route>
          <Route path='/chats' element={<Chats/>} ></Route>
          <Route path='/chats/chat' element={<Chat/>} ></Route>
          <Route path='/chats/settings'  element={<Settings/>} ></Route>
          <Route path='/search'  element={<Search/>} ></Route>
          <Route path='/search/settings'  element={<Settings/>} ></Route>
          <Route path='/more'  element={<More/>} ></Route>
          <Route path='/more/settings'  element={<Settings/>} ></Route>
        </Routes>
        <Nav/>
      </BrowserRouter>
    </>
  );
}

export default App;

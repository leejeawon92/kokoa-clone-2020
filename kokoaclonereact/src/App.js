import { BrowserRouter, Route, Routes,   } from 'react-router-dom';
import Status from './components/Statusbar';
import Friend from './routes/Friend';
import Chats from './routes/Chats';
import Search from './routes/Search';
import More from './routes/More';
import Settings from './routes/Settings';
import Chat from './routes/Chat';
import io from 'socket.io-client';

const socket = io('localhost:5000', {reconnection: false});

function App() {
  return (
    <>
      <Status/>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Friend/>} ></Route>          
          <Route path='settings'  element={<Settings/>} ></Route>
          <Route path='/chats' element={<Chats/>} ></Route>
          <Route path='/chats/chat' element={<Chat socket={socket}/>} ></Route>
          <Route path='/chats/settings'  element={<Settings/>} ></Route>
          <Route path='/search'  element={<Search/>} ></Route>
          <Route path='/search/settings'  element={<Settings/>} ></Route>
          <Route path='/more'  element={<More/>} ></Route>
          <Route path='/more/settings'  element={<Settings/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

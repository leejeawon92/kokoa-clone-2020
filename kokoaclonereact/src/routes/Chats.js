import Screenheader from '../components/ScreenHeader';
import Usercomponet from '../components/User';
import jeawon from '../image/jeawon.jpg'
import alexandra from '../image/alexandra.jpg'
import { Link   } from 'react-router-dom';
import Nav from '../components/Navbar';
import { message, messageCount } from '../atoms';
import {   useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useCallback } from 'react';
import { useEffect } from 'react';

let navCount;

function Chats () {
  const [msgCount, setMsgCount] = useRecoilState(messageCount);  
  useEffect(()=> {
    setMsgCount((arr) => {
      console.log(arr);
      if(arr.length > 2){
        return arr.slice(0,2)
      }
      return [...arr , Math.floor(Math.random()*(30-1)+1), Math.floor(Math.random()*(30-1)+1) ]
    });
  },[])


  return (
    
    <>
      <Screenheader title='Chats'/> 
      <Link to='chat' style={{ textDecoration: "none" }}>
        <Usercomponet 
          avatar={jeawon} 
          name='JW' 
          subtitle='개명고민' 
          time='21:20' 
          count={msgCount.length === 0 ? 0 : msgCount[0]   }
        />
      </Link>
      <Usercomponet 
        avatar={alexandra} 
        name='daddario' 
        subtitle='제일좋아하는배우' 
        time='22:20' 
        count={msgCount.length === 0 ? 0 : msgCount[1] } />

      <Nav total={msgCount.length === 0 ? 0 : msgCount[0]+msgCount[1]  }  />
    </>
  )
} 
export default Chats;

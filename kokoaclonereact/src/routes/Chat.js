import styled from 'styled-components';
import Moment from 'react-moment';
import AltHeader from '../components/AltHeader';
import {AiOutlinePlusSquare} from 'react-icons/ai'
import {FaSmileWink} from 'react-icons/fa'
import {BsArrowUpCircle} from 'react-icons/bs'
import { useState } from 'react';
import 'react-simple-keyboard/build/css/index.css'
import '../css/index.css'
import OtherMessageComponent from '../components/OtherMessage';
import MyMessageComponent from '../components/MyMessage';
import { useEffect } from 'react';
import { useRef } from 'react';

const ChatMessage = styled.main`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TimeStamp = styled.div`
  color: white;
  background-color: black;
  padding: 15px;
  font-size: 20px;
  border-radius: 25px;
  margin-bottom: 25px;
`
const MessageInput  = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
`
const Reply = styled.form`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 5px 25px;
  box-sizing: border-box;
  align-items: center;  
  border: 1px solid rgba(0, 0, 0, 0.3);  
`
const Attachment = styled.button`
  width: 10%;
  background-color: transparent; 
  border: 0;
`
const InputTools = styled.div`
  width: 90%;
  position: relative;
  input {
    padding: 15px;
    width: 100%;
    border-radius: 20px;
    box-sizing: border-box;
    opacity: 0.8;
  }
`
const ToolsIcons = styled.div`
  position: absolute;
  right: 10px;
  top: 7px;
`


function Chat ({socket}){
  const [inputValue, setInputValue] = useState('');
  const [myValue, setMyValue] = useState([]);
  const [otherValue, setOtherValue] = useState([]);
  let myValueIndex = 0 ;
  let otherValueIndex = 0 ;
  
  // const [myValue, setMyValue] = useState('');
  // const [otherValue, setOtherValue] = useState('');
  
  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    if(event.target.messageInput.value !== ''){
      setMyValue( [ ...myValue, event.target.messageInput.value]);
      // setMyValue(event.target.messageInput.value);
    }    
    setInputValue('')
    event.preventDefault();
  }

  socket.on("connect", () => {
    console.log(socket.id); 
  });
  
  useEffect(()=> {
    socket.emit('send-message', myValue)
    socket.on('chat-message', (data) => {
      setOtherValue(data.message);
    });
  }, [myValue])

  // const MyorOther = () => {
  //   if(myValueIndex < myValue.length ) {
  //     console.log(myValue);
  //     return       myValue
  //     .slice(myValueIndex)
  //     .map((text) =>  <MyMessageComponent key={Math.random()} text={text} />)
  //     myValueIndex = myValue.length-1;
  //   } else if(otherValueIndex < otherValue.length) {
  //     otherValue
  //       .slice(otherValueIndex)
  //       .map((text) =>  <OtherMessageComponent key={Math.random()} text={text} />)
  //     otherValueIndex = otherValue.length-1;
  //   }
  // }

  return (
    <>
      <AltHeader title='JW'/>
      <ChatMessage>
        <TimeStamp><Moment format='YYYY년 MM월 DD일' interval={1000}></Moment></TimeStamp>
        {/* {MyorOther()} */}
        {otherValue.map((text) => (<OtherMessageComponent key={Math.random()} text={text} />))}
        {myValue.map((text) => (<MyMessageComponent key={Math.random()} text={text} />))}
      </ChatMessage>

      <MessageInput>
        <Reply onSubmit={onSubmit} >
          <Attachment>
            <AiOutlinePlusSquare size={30} />
          </Attachment>
          <InputTools>
            <input 
              name="messageInput"
              type='text' 
              placeholder="Write a message..."               
              value={inputValue}
              onChange={onChangeInput}
              
            ></input>
            <ToolsIcons>
              <FaSmileWink size={30} />
              <BsArrowUpCircle size={30} />
            </ToolsIcons>
          </InputTools>
        </Reply>   
      </MessageInput>
    </>
  )
}
export default Chat;
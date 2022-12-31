import styled from 'styled-components';
import 라이언 from '../image/라이언.jpg'
import AltHeader from '../components/AltHeader';
import {AiOutlinePlusSquare} from 'react-icons/ai'
import {FaSmileWink} from 'react-icons/fa'
import {BsArrowUpCircle} from 'react-icons/bs'
import Keyboard from 'react-simple-keyboard'
import { useState, useRef } from 'react';
import 'react-simple-keyboard/build/css/index.css'
import '../css/index.css'
import { useSubmit } from 'react-router-dom';
import { useEffect } from 'react';
import io from 'socket.io-client';

const ChatBody = styled.div`
`
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
const OpponentMessage = styled.div`
  width: 100%;
  display: flex;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }
`
const MessageContent = styled.div`
`
const MessageAuthor = styled.span`
  opacity: 0.8;
  font-size: 15px;
  display: block;
  margin-bottom: 5px;
`
const MessageInfo = styled.div`
  display: flex;
  align-items: flex-end;
  .content {
    color: black;
    background-color: #a9ded6;
    padding: 13px;
    font-size: 18px;
    border-radius: 15px;
    border-top-left-radius: 0px;
  }
  .time {
    margin-left: 5px;
    opacity: 0.8;
    font-size: 13px;
  }
`
const MyMessage = styled(OpponentMessage)`
  justify-content: flex-end;
  .me {
    flex-direction: row-reverse;
    margin-right: 15px;
  }
  .content {
    background-color: #11eded;
    border-top-right-radius: 0px;
    border-top-left-radius: 15px;
    margin-right: 0px;
    margin-left: 5px;
  }
  margin-bottom: 20px;
`
const Reply = styled.form`
  onsubmit: "return false";
  position: relative;
  top: ${(props) => props.focusInput ? '280px'  : '520px'};
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



function Chat (){
  const [input, setInput] = useState('');
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();
  const [inputcheck ,setinputCheck] = useState(false);
  const [keyboardcheck ,setKeyboardcheck] = useState(true);

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
  };

  const socket = io('localhost:5000');
  console.log(socket);
  socket.emit('메시지 보내기', 'ㅁㄴㅇㅁㄴㅇ')

  // const submit = useSubmit();
  // const onChangeKeyboard = (input) => {
  //   setInput(input);
  //   setinputCheck(true);
  //   console.log("Input 변경:", input);
  // };

  // const handleShift = () => {
  //   const newLayoutName = layout === "default" ? "shift" : "default";
  //   console.log("newLayoutName =>", newLayoutName);
  //   setLayout(newLayoutName);
  // };

  // const onKeyPress = (button) => {
  //   console.log("버튼 클릭: ", button);

  //   // Shift및 Caps Lock 버튼을 처리하려는 경우
  //   if (button === "{shift}" || button === "{lock}") handleShift();
  // };

  // const onChangeInput = (event) => {
  //   const input = event.target.value;
  //   setInput(input);
  //   setKeyboardcheck(false);
  //   keyboard.current.setInput(input);
  // };

  // const onSubmit = () => {
  //   console.log('호출');
  //   return true;
  // }
  // console.log(input);


  return (
    <>
      <AltHeader title='JW'/>
      <ChatMessage>
        <TimeStamp>2022년 12월 1일</TimeStamp>
        <OpponentMessage>
          <img src={라이언}></img>
          <MessageContent >
            <MessageAuthor>jw</MessageAuthor>
            <MessageInfo className='opponent'>
              <span className='content'>얄리얄리얄랑셩</span>
              <span className='time'>21:21</span>
            </MessageInfo>
          </MessageContent>
        </OpponentMessage>

        <MyMessage>
          <MessageContent >
            <MessageInfo className='me'>
              <span className='content'>얄라리얄라</span>
              <span className='time'>21:21</span>
            </MessageInfo>
          </MessageContent>
        </MyMessage>

        <MyMessage>
          <MessageContent >
            <MessageInfo className='me'>
              <span className='content'>얄라리얄라</span>
              <span className='time'>21:21</span>
            </MessageInfo>
          </MessageContent>
        </MyMessage>

        <MyMessage>
          <MessageContent >
            <MessageInfo className='me'>
              <span className='content'>얄라리얄라</span>
              <span className='time'>21:21</span>
            </MessageInfo>
          </MessageContent>
        </MyMessage>
      </ChatMessage>

      <Reply >
        <Attachment>
          <AiOutlinePlusSquare size={30} />
        </Attachment>
        <InputTools>
          <input 
            className="keyboardInput"
            type='text' 
            placeholder="Write a message..."               
            value={input }
            disabled={inputcheck ? true : false}              
            onChange={onChangeInput}
          ></input>
          <ToolsIcons>
            <FaSmileWink size={30} />
            <BsArrowUpCircle size={30} />
          </ToolsIcons>
        </InputTools>
      </Reply>
      
{/* 
      <Reply focusInput={keyboardcheck} >
        <Attachment>
          <AiOutlinePlusSquare size={30} />
        </Attachment>
        <InputTools>
          <input 
            className="keyboardInput"
            type='text' 
            placeholder="Write a message..."               
            value={input }
            disabled={inputcheck ? true : false}              
            onChange={onChangeInput}
          ></input>
          <ToolsIcons>
            <FaSmileWink size={30} />
            <BsArrowUpCircle size={30} />
          </ToolsIcons>
        </InputTools>
      </Reply> */}

      {/* { keyboardcheck || input==='' ?        
          <Keyboard
            keyboardRef={(r) => (keyboard.current = r)} 
            layoutName={layout} 
            onChange={onChangeKeyboard}
            onKeyPress={onKeyPress}
          />
        : 
          <></>
        } */}
      
    </>
  )
}
export default Chat;
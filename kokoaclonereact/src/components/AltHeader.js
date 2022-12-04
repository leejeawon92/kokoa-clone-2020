import styled from 'styled-components';
import { FaBars, FaAngleLeft, FaSearch} from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';

const ChatHeader = styled.div`
  padding-top: 50px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
`

const ChatLeft = styled.button`
  width: 33%;
  background-color: transparent; 
  border: 0;
  width: 50px;
  cursor: pointer;
`

const ChatTitle = styled.span`
  font-size: 35px;
  width: 33%;
  text-align: center;
`

const ChatIcons = styled.div`

`

function AltHeader({title}){
  const history = useNavigate();
  const onClick = (e) => {
    e.preventDefault();
    history(-1);
  };
  return(
    <>
      <ChatHeader>
        <ChatLeft onClick={onClick}>
          <FaAngleLeft className='left' size={40} color='black' />
        </ChatLeft>
        <ChatTitle>{title}</ChatTitle>
        <ChatIcons>
          <FaSearch  size={30} />
          <FaBars className='bars' size={30}  />
        </ChatIcons>
      </ChatHeader>
    </>
  )
}
export default AltHeader;
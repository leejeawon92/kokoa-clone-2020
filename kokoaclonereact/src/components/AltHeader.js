import styled from 'styled-components';
import { FaBars, FaAngleLeft, FaSearch} from 'react-icons/fa';

const ChatHeader = styled.div`
  padding-top: 50px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
`

const ChatLeft = styled.div`
  width: 33%;
`

const ChatTitle = styled.span`
  font-size: 35px;
  width: 33%;
`

const ChatIcons = styled.div`

`

function AltHeader({title}){
  return(
    <>
      <ChatHeader>
        <ChatLeft>
          <FaAngleLeft className='left' size={40}/>
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
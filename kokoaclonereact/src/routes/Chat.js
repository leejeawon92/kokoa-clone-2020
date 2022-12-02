import styled from 'styled-components';
import Screenheader from '../components/ScreenHeader';
import 라이언 from '../image/라이언.jpg'
import AltHeader from '../components/AltHeader';

const ChatBody = styled.div`
  height: 11000vh;
`


const ChatMessage = styled.main`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TimeStamp = styled.div`
  color: white;
  background-color: #92a4b2;
  padding: 15px;
  font-size: 14px;
  border-radius: 25px;
  margin-bottom: 25px;
`
const MessageRow = styled.div`
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
const Author = styled.span``

function Chat (){
  return (
    <>
      <ChatBody>
        <AltHeader/>
        <ChatMessage>
          <TimeStamp>2022년 12월 1일</TimeStamp>
          <MessageRow>
            <img src={라이언}></img>
            <MessageContent>
              <Author>jw</Author>
            </MessageContent>
          </MessageRow>

        </ChatMessage>
      </ChatBody>
    </>
  )
}
export default Chat;
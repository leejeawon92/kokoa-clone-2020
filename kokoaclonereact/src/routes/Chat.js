import styled from 'styled-components';
import 라이언 from '../image/라이언.jpg'
import AltHeader from '../components/AltHeader';

const ChatBody = styled.div`
  height: 11000vh;
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
`

function Chat (){
  return (
    <>
      <ChatBody>
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
        </ChatMessage>
      </ChatBody>
    </>
  )
}
export default Chat;
import Moment from 'react-moment';
import styled from 'styled-components';
import 라이언 from '../image/라이언.jpg'

const OtherMessage = styled.div`
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
function OtherMessageComponent({text}) {

  return (
    <>
      { text !==0  ?
        <OtherMessage>
          <img src={라이언}></img>
          <MessageContent >
            <MessageAuthor>상대방</MessageAuthor>
            <MessageInfo className='opponent'>
              <span className='content'>얄리얄리얄랑셩</span>
              <span className='time'><Moment format='HH:mm'></Moment></span>
            </MessageInfo>
          </MessageContent>
        </OtherMessage>
        : 
        <></>
      }
    </>
  )
}

export default OtherMessageComponent;
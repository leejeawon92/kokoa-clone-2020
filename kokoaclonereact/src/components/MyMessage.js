import styled from 'styled-components';


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
const MyMessage = styled(OtherMessage)`
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

const MessageContent = styled.div`
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

function MyMessageComponent () {
  return (
    <>
      <MyMessage>
        <MessageContent >
          <MessageInfo className='me'>
            <span className='content'>얄라리얄라</span>
            <span className='time'>21:21</span>
          </MessageInfo>
        </MessageContent>
      </MyMessage>
    </>
  )
}
export default MyMessageComponent;
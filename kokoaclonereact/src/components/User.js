import styled from "styled-components";


const UserComponent = styled.div`
  justify-content: space-between; 
  display: flex;
  align-items: center;
`

const UserDesc = styled.div`
  display: flex;
  align-items: center;
`

const UserAvater = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 30px;
  margin-right: 20px;
`

const UserTitle = styled.h4`
  font-weight: 600;
  font-size: 22px;
`

const UserSubtitle = styled.span`
  display: flex;
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.5);
`
const UserState = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Time = styled.span`
  margin-bottom: 8px;
  display: block;
`
const MessageCount = styled.div`
  background-color: tomato;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
`

function Usercomponet({avatar, name, subtitle, time, count  }){
  return (
    <UserComponent>
      <UserDesc>
        <UserAvater src={avatar}></UserAvater>
        <UserTitle>
          {name}
          <UserSubtitle>{subtitle}</UserSubtitle>
        </UserTitle>
      </UserDesc>
      <UserState>
        <Time>{time}</Time>
        <MessageCount>{count}</MessageCount>
      </UserState>
    </UserComponent>
  )
}

export default Usercomponet;
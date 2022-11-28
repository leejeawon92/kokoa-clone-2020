import styled from "styled-components";
import jeawon from '../image/jeawon.jpg'

const UserComponent = styled.div`
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

const UserSubtitle = styled.h6`
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.5);
`
const UserState = styled.div``

function Usercomponet(){
  return (
    <UserComponent>
      <UserDesc>
        <UserAvater src={jeawon}></UserAvater>
        <UserTitle>
          JW
          <UserSubtitle>dngpgpgppgpgp</UserSubtitle>
        </UserTitle>
      </UserDesc>
      <UserState></UserState>
    </UserComponent>
  )
}

export default Usercomponet;
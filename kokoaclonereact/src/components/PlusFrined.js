import styled from "styled-components";

const ChannelComponent = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChannelDesc = styled.div`
  display: flex;
  align-items: center;
`

const ChannelAvater = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 25px;
  margin-right: 20px;
`
const ChannelTitle = styled.h4`
  font-weight: 600;
  font-size: 22px;
`
const ChannelSubtitle = styled.span`
  display: flex;
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.5);
`

const ChannelState = styled.div`
`

function PlusFriend({user}){
  // console.log(user.map((item)=>console.log(item)));
  console.log(user);
  return (
    <>
      {/* {user.map((new)=>{

      })} */}
      <ChannelComponent>
        <ChannelDesc>
          <ChannelAvater src={user.avatar}></ChannelAvater>
          <ChannelTitle>
            {user.name}
            <ChannelSubtitle></ChannelSubtitle>
          </ChannelTitle>
        </ChannelDesc>
        <ChannelState></ChannelState>
      </ChannelComponent>
    </>
  )
}

export default PlusFriend;
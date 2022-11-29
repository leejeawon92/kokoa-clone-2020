import styled from "styled-components";
import {MdArrowUpward} from 'react-icons/md'
import 열렙전사 from '../image/열렙전사.jpg'

const Channel = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.8);
`

const ChannelHeader = styled.div`
  margin-top: 10px;  
`

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

function Channelcomponet(){
  return (
    <Channel>
      <ChannelHeader>
        <span>플러스친구</span>
        <MdArrowUpward></MdArrowUpward>
      </ChannelHeader>      

      <ChannelComponent>
        <ChannelDesc>
          <ChannelAvater src={열렙전사}></ChannelAvater>
          <ChannelTitle>
            열렙전사
            <ChannelSubtitle></ChannelSubtitle>
          </ChannelTitle>
        </ChannelDesc>
        <ChannelState></ChannelState>
      </ChannelComponent>
    </Channel>
  )
}

export default Channelcomponet;
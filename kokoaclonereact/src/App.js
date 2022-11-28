import styled from "styled-components";
import { AiOutlineWifi, AiFillThunderbolt,  } from 'react-icons/ai';
import {CiBatteryFull} from 'react-icons/ci'
import {ImSearch} from 'react-icons/im'
import {FaMusic, FaCog, FaInfoCircle} from 'react-icons/fa'
import {AiOutlineRightCircle} from 'react-icons/ai'
import {MdArrowUpward} from 'react-icons/md'
import jeawon from './image/jeawon.jpg'
import 열렙전사 from './image/열렙전사.jpg'

const StatusBar = styled.div`
  width: 33%;
  top: 0px;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5px 3px;
  background-color: white;
`

const LeftColumn = styled.div`
  width: 33%;
  span {
    margin-right: 5px;
  }
`

const CenterColumn = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
`

const RightColumn = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 15px;
`

const ScreenHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--horizontal-space);
  margin-bottom: 15px;

`

const HeaderTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
`

const Icons = styled.div`
  .icon {
    margin-left: 25px;
  }
`

const InfoDisplay = styled.a`
  text-align: center;
  display: block; 
  background-color: #fafafa;
  padding: 15px 10px;
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: -15px;
  .info {
    margin-right: 5px;
  }
`

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
const ChannelSubtitle = styled.h6`
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.5);
`







function App() {
  return (
    <div className="App">
      <StatusBar>
        <LeftColumn>
          <span>No Service</span>
          <AiOutlineWifi size={20}/>
        </LeftColumn>

        <CenterColumn>
          <span>17:00</span>
        </CenterColumn>

        <RightColumn>
          <span>110%</span>
          <AiFillThunderbolt/>
          <CiBatteryFull/>
        </RightColumn>
      </StatusBar>

      <ScreenHeader>
        <HeaderTitle>Friend</HeaderTitle>
        <Icons>
          <ImSearch className='icon' />
          <FaMusic className='icon'/>
          <FaCog className='icon'/>
        </Icons>
      </ScreenHeader>

      <InfoDisplay>
        <FaInfoCircle className='info' />
        Friends Names Display 
        <AiOutlineRightCircle/>
      </InfoDisplay>

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
          <UserState></UserState>
        </ChannelComponent>
      </Channel>





      <></>












      
    </div>
  );
}

export default App;

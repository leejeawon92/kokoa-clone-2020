import styled from 'styled-components'
import { AiOutlineWifi, AiFillThunderbolt,  } from 'react-icons/ai';
import {CiBatteryFull} from 'react-icons/ci'
import Moment from 'react-moment';

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

function Status(){
  return(
    <StatusBar>
      <LeftColumn>
        <span>No Service</span>
        <AiOutlineWifi size={20}/>
      </LeftColumn>

      <CenterColumn>
        <Moment format='HH:mm:ss' interval={1000}></Moment>
      </CenterColumn>

      <RightColumn>
        <span>110%</span>
        <AiFillThunderbolt/>
        <CiBatteryFull/>
      </RightColumn>
    </StatusBar>
  )
}
export default Status;

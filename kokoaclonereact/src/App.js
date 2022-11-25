import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faWifi ,faBolt, faBattery } from '@fortawesome/free-solid-svg-icons'

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


function App() {
  return (
    <div className="App">
      <StatusBar>
        <LeftColumn>
          <span>No Service</span>
          <FontAwesomeIcon icon={faWifi} />
        </LeftColumn>

        <CenterColumn>
          <span>17:00</span>
        </CenterColumn>

        <RightColumn>
          <span>110%</span>
          <FontAwesomeIcon icon={faBolt} />
          <FontAwesomeIcon icon={faBattery} />
        </RightColumn>
      </StatusBar>
      
    </div>
  );
}

export default App;

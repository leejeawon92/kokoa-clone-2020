import styled from 'styled-components';
import AltHeader from '../components/AltHeader';
import {FaBullhorn, FaInfoCircle, FaFlask} from 'react-icons/fa'

const SettingList = styled.ul`
  padding-top: 30px;
`
const Setting = styled.li`
  padding: 20px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 20px;
  display: flex;
  align-items: center;
  span {
    padding-left: 15px;
  }
`

function Settings(){
  return (
    <>
      <AltHeader title='Settings'/>
      <SettingList>
        <Setting>
          <FaBullhorn size={35} />
          <span>Notices</span>
        </Setting>
        <Setting>
          <FaFlask size={35} />
          <span>Lab</span>
        </Setting>
        <Setting>
          <FaInfoCircle size={35} />
          <span>Version</span>
        </Setting>
        
      </SettingList>
    </>
  )
}
export default Settings;
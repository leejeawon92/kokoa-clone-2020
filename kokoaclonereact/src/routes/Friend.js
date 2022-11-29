import styled from 'styled-components'
import {AiOutlineRightCircle} from 'react-icons/ai'
import { FaInfoCircle} from 'react-icons/fa'
import Usercomponet from '../components/User'
import Channelcomponet from '../components/Channel'

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

function Friend(){
  return(
    <>
      <Usercomponet />
      <InfoDisplay>
        <FaInfoCircle className='info' />
        Friends Names Display 
        <AiOutlineRightCircle/>
      </InfoDisplay>
      <Channelcomponet />  
    </>
  )
}
export default Friend;
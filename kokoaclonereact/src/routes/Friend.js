import styled from 'styled-components'
import {AiOutlineRightCircle} from 'react-icons/ai'
import { FaInfoCircle} from 'react-icons/fa'
import Usercomponet from '../components/User'
import Channelcomponet from '../components/Channel'
import Screenheader from '../components/ScreenHeader'
import jeawon from '../image/jeawon.jpg'
import Nav from '../components/Navbar'
import { useRecoilValue } from 'recoil'
import { messageCount, sumCount } from '../atoms'
import { memo } from 'react'

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
  const msgArr = useRecoilValue(messageCount);
  const msgtatal = msgArr[0]+msgArr[1];
  return(
    <>
      <Screenheader title='Friend'/> 
      <InfoDisplay>
        <FaInfoCircle className='info' />
        Friends Names Display 
        <AiOutlineRightCircle/>
      </InfoDisplay>
      <Usercomponet avatar={jeawon} name='jeawon' subtitle='열공모드' />
      <Channelcomponet />  
      <Nav total={msgtatal ? msgtatal : 0} />
    </>
  )
}
export default Friend ;
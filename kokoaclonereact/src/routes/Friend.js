import styled from 'styled-components'
import {AiOutlineRightCircle, AiOutlinePlusSquare} from 'react-icons/ai'
import { FaInfoCircle} from 'react-icons/fa'
import Usercomponet from '../components/User'
import Channelcomponet from '../components/PlusFrined'
import Screenheader from '../components/ScreenHeader'
import jeawon from '../image/jeawon.jpg'
import Nav from '../components/Navbar'
import { useRecoilValue } from 'recoil'
import { messageCount } from '../atoms'
import {MdArrowUpward} from 'react-icons/md'
import { useState } from 'react'
import PlusFriend from '../components/PlusFrined'
import { AnimatePresence, motion } from 'framer-motion'

const FriendComponent = styled.div`
  position: relative;
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
const Channel = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.8);

`
const ChannelHeader = styled.div`
  margin-top: 10px;  
  span {
    font-size : 18px;
  }
`
const AddFriend = styled(motion.div)`
  position: absolute;
  background-color : rgba(0, 0, 0, 0.5);
  width: 500px;
  height: 250px;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  // z-index: 99;
`
const NewName = styled.div`
`
const NewAvatar = styled.div`
`
const NewButton = styled.button``

function Friend(){
  const msgArr = useRecoilValue(messageCount);
  const msgtatal = msgArr[0]+msgArr[1];

  const [clicked, setClick] = useState(false);
  const toggle = () => setClick((prev) => !prev);

  let top = (window.innerHeight /2) - (250/2);
  let left  = (window.innerWidth /2) - (500/2);

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInfo, setUserInfo] = useState({name: '', avatar: ''});
  const [sub, setSub] = useState(false);
  const onNameChange = (event) => {
    setName(event.target.value);
    setUserInfo({...userInfo, name: event.target.value});
  }
  const onAvatarChange = (event) => {
    setAvatar(event.target.value);
    setUserInfo({...userInfo, avatar: event.target.value});
  }
  
  const onClick = (event) => {
    event.preventDefault();
    setSub((pre) => !pre);
    
  }

  return(
    <>
      <FriendComponent>
        <Screenheader title='Friend'/> 

        <InfoDisplay>
          <FaInfoCircle className='info' />
          Friends Names Display 
          <AiOutlineRightCircle/>
        </InfoDisplay>

        <Usercomponet avatar={jeawon} name='jeawon' subtitle='열공모드' />

        <Channel>
          <ChannelHeader>
            <span>플러스친구</span>
            <MdArrowUpward size={25} />
            <AiOutlinePlusSquare size={25} onClick={toggle} style={{cursor: 'pointer'}} />
          </ChannelHeader>      
        </Channel>

        { sub ? <PlusFriend user={userInfo} />  : null  }
        <AnimatePresence>
          {clicked ? (
            <AddFriend
              top = {top}  
              left = {left}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
            >
              <NewName>
                <span>이름: </span>
                <input onChange={onNameChange} type='text' placeholder='이름을 입력하세요'></input>
              </NewName>
              <NewAvatar>
                <span>사진: </span>
                <input onChange={onAvatarChange} type='file' accept='image/jpg,impge/png,image/jpeg' ></input>
              </NewAvatar>
              <NewButton onClick={onClick}>추가</NewButton>
            </AddFriend>
          ) : null}
        </AnimatePresence>
        <Nav total={msgtatal ? msgtatal : 0} />

      </FriendComponent>
    </>
  )
}
export default Friend ;
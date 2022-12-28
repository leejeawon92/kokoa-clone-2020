import styled from 'styled-components';
import Screenheader from '../components/ScreenHeader';
import {FaQrcode,FaFingerprint, FaEnvelopeOpenText,FaHeart } from 'react-icons/fa'
import {ImAddressBook, } from 'react-icons/im'
import {AiOutlineRightCircle, } from 'react-icons/ai'
import developer from '../image/developer.PNG'
import 그라버트 from '../image/그라버트.PNG'
import Nav from '../components/Navbar';
import { useState } from 'react';
import { useRecoilValue } from 'recoil'
import { messageCount, sumCount } from '../atoms'

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  span {
    margin-top: 15px;
  }
`
const IConRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const OpenChat = styled.div`
`
const OpenChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 0.8;
  margin-top: 15px;
  .title {
    font-size:18px;
  }
`

const Recommendedfriend = styled.div`
  margin: 5px 0px;
  padding-bottom: 5px 0px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  h6 {
    margin:5px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
  span {
    display: block;
    margin: 100px 0px;
    text-align: center;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.5);
  }
`


const OpenChatPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const PostInfo = styled.div`
  margin-top :28px;
`
const PostTitle = styled.h5`
  margin: 5px;
  font-size: 18px;
  margin-bottom: 7px;
`
const PostHashtags = styled.h6`
  font-size: 15px;
  margin: 5px;
  text-transform: uppercase; 
  opacity: 0.6;
`
const PostMember = styled.div`
  margin-top: 7px;
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 5px;
  }
  div {
    width: 2px;
    height: 15px;
    margin: 0px 5px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  span:focus {
    color: red;
  }
`
const PostPhoto = styled.div`
  position: relative;
  margin-top: 20px;
  img {
    width: 120px;
    height: 120px;
    border-radius: 10px;
  }
`
const PhotoHeart = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 10px;
  font-size: 17px;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 5px; 
  border-radius: 20px;
  display: flex;
  align-items: center;
  bottom: 10px;

  span {
    margin-left: 5px;
  }
`


function Search(){
  const [heartcount, setHeartcount] = useState(0);
  const [heartclick, setHeartclick] = useState(true);
  const msgArr = useRecoilValue(messageCount);
  const msgtatal = msgArr[0]+msgArr[1];
  const onClick = () => {
    setHeartcount(heartcount+1);
    setHeartclick((prev => !prev))
  }
  return (
    <>
      <Screenheader title='Search'/> 
      <Icons>
        <IConRow>
          <FaQrcode size={50} className='qrcode'></FaQrcode>
          <span>Qr Code</span>
        </IConRow>
        <IConRow>
          <ImAddressBook size={50}  className='addressbook' >ff</ImAddressBook>
          <span>Add by Contatcs</span>
        </IConRow>
        <IConRow>
          <FaFingerprint size={50}  className='fingerprint'></FaFingerprint>
          <span>Add by ID</span>
        </IConRow>
        <IConRow>
          <FaEnvelopeOpenText size={50}  className='envelope'></FaEnvelopeOpenText>
          <span>Invite</span>
        </IConRow>
      </Icons>

      <Recommendedfriend>
        <h6>Recommended Friends</h6>
        <span>You haver no recommended friends.</span>
      </Recommendedfriend>

      <OpenChat>
        <OpenChatHeader>
          <span className='title'>Open Chat</span>
          <span> Go to Openchat Home <AiOutlineRightCircle/></span>
        </OpenChatHeader>

        <OpenChatPost>
          <PostInfo>
            <PostTitle>#FrontEnd</PostTitle>
            <PostHashtags>#개발자 #develop</PostHashtags>
            <PostMember>
              <img src={developer}></img>
              <span>800명</span>
              <div></div>
              <span>Active</span>
            </PostMember>
          </PostInfo>
          <PostPhoto>
            <img src={그라버트} />
            <PhotoHeart>
              <FaHeart color={heartclick ? 'white' : 'red'} onClick={onClick} ></FaHeart>
              <span>{heartcount}</span>
            </PhotoHeart>
          </PostPhoto>
        </OpenChatPost>
      </OpenChat>
      <Nav total={msgtatal ? msgtatal : 0} />
    </>

    )
}
export default Search;
import { FaCalendarCheck, FaSmileBeam, FaPaintRoller, FaFileInvoiceDollar} from 'react-icons/fa'
import Screenheader from '../components/ScreenHeader';
import Usercomponet from '../components/User';
import jeawon from '../image/jeawon.jpg'
import kakaogame from '../image/kakaogame.JPG'
import kakaochannel from '../image/kakaochannel.JPG'
import kakaopay from '../image/kakaopay.JPG'
import styled from 'styled-components';
import Nav from '../components/Navbar';

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  span {
    margin-top: 15px;
  }
`
const IconRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin: 5px;
  }
  margin: 10px;
`

const Suggestions = styled.div` 
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  h4 {
    font-size:19px;
    margin: 10px 0px;
    color: rgba(0, 0, 0, 0.5);
  }
`

const SuggestIcons = styled.div`
  display: flex;
  img {
    width: 80px;
    height: 60px;
    border-radius: 10px;
    align-items: center;
    margin-bottom: 10px;
  }
  span {
    color: rgba(0, 0, 0, 0.8);
  }
`

function More(){
  return (
    <>
      <Screenheader title='More'></Screenheader>
      <Usercomponet avatar={jeawon} name='JW' subtitle='010-5775-3037' ></Usercomponet>
      <Icons>
        <IconRow>
          <FaCalendarCheck size={50} />
          <span>Calender</span>
        </IconRow>
        <IconRow>
          <FaSmileBeam size={50} />
          <span>Emoticons</span>
        </IconRow>
        <IconRow>
          <FaPaintRoller size={50}/>
          <span>Themes</span>
        </IconRow>
        <IconRow>
          <FaFileInvoiceDollar size={50}/>
          <span>Account</span>
        </IconRow>
      </Icons>

      <Suggestions>
        <h4>Suggestions</h4>
        <SuggestIcons>
          <IconRow>
            <img src={kakaogame}></img>
            <span>KaKao Game</span>
          </IconRow>
          <IconRow>
            <img src={kakaochannel}></img>
            <span>KaKao Channel</span>
          </IconRow>
          <IconRow>
            <img src={kakaopay}></img>
            <span>KaKao Pay</span>
          </IconRow>
        </SuggestIcons>
      </Suggestions>
      <Nav/>
    </>
  )
}
export default More;
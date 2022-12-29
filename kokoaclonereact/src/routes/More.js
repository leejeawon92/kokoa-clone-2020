import { FaCalendarCheck, FaSmileBeam, FaPaintRoller, FaFileInvoiceDollar} from 'react-icons/fa'
import Screenheader from '../components/ScreenHeader';
import Usercomponet from '../components/User';
import jeawon from '../image/jeawon.jpg'
import kakaogame from '../image/kakaogame.JPG'
import kakaochannel from '../image/kakaochannel.JPG'
import kakaopay from '../image/kakaopay.JPG'
import styled from 'styled-components';
import Nav from '../components/Navbar';
import { useRecoilValue } from 'recoil'
import { messageCount, sumCount } from '../atoms'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

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

const Advertisement = styled.div` 
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  h4 {
    font-size:19px;
    margin: 10px 0px;
    color: rgba(0, 0, 0, 0.5);
  }
`
const Slider = styled.div`
  // position: relative;
  top: -100px;
`;
const Row = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns:repeat(5, 1fr);
  position: absolute;
  width: 100%;
`;
const Box = styled(motion.div)`
  background-color: white;
  background-image: url(${(props) => props.bgBanner});
  background-size: cover;
  background-position: center center;
  height: 200px;
`;
const rowVariants = {
  hidden: { 
    x: window.outerWidth + 10,
  },
  visible: { 
    x: 0,
  },
  exit: { 
    x: -window.outerWidth - 10,
  },
};

// const AdIcons = styled.div`
//   display: flex;
//   img {
//     width: 80px;
//     height: 60px;
//     border-radius: 10px;
//     align-items: center;
//     margin-bottom: 10px;
//   }
//   span {
//     color: rgba(0, 0, 0, 0.8);
//   }
// `

const bannerImg = [
  process.env.PUBLIC_URL+ '/banner/1.jpg',
  process.env.PUBLIC_URL+ '/banner/2.jpg',
  process.env.PUBLIC_URL+ '/banner/3.jpg',
  process.env.PUBLIC_URL+ '/banner/4.jpg',
  process.env.PUBLIC_URL+ '/banner/5.jpg',
  process.env.PUBLIC_URL+ '/banner/6.jpg',
  process.env.PUBLIC_URL+ '/banner/7.jpg',
  process.env.PUBLIC_URL+ '/banner/8.jpg',
  process.env.PUBLIC_URL+ '/banner/9.jpg',
]

const offset = 5; 


function More(){
  const msgArr = useRecoilValue(messageCount);
  const msgtatal = msgArr[0]+msgArr[1];
  const [index,SetIndex] = useState(0);  
  const [leaving,setLeaving] = useState(false);

  const incraseIndex =() => {
    if (leaving) return;
    toggleLeaving();
    // SetIndex((prev) => prev +1);
    // const totalBanner = bannerImg.length;
    // const maxIndex = Math.floor(totalBanner / offset) - 1; 
    console.log(index);
    SetIndex((prev) => (prev === 1 ? 0 : prev + 1)); 
  };
  const toggleLeaving= () => setLeaving((prev) => !prev);

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

      <Advertisement>
        <h4>Advertisement</h4>
        {/* <AdIcons>
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
        </AdIcons> */}
        <Slider onClick={incraseIndex}>
          <AnimatePresence onExitComplete={toggleLeaving}>
            <Row
              variants={rowVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 1 }} // 튕기지 않게 tween타입으로 변경
              key={index}
              >
                {bannerImg.slice(offset * index, offset * index + offset).map((i)=>(
                  <Box bgBanner={i} key={i}>{}</Box>
                ))}
            </Row>
          </AnimatePresence>
        </Slider>

      </Advertisement>
      <Nav total={msgtatal ? msgtatal : 0}/>
    </>
  )
}
export default More;


// {bannerImg
//   .slice(offset * index, offset * index + offset)
//   .map((i) => (
//     <Box bgBanner={i} key={i}></Box>
//   ))
// }

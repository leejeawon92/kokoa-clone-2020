import Screenheader from '../components/ScreenHeader';
import Usercomponet from '../components/User';
import jeawon from '../image/jeawon.jpg'
import alexandra from '../image/alexandra.jpg'
import { Link , useNavigate  } from 'react-router-dom';

function Chats(){
  return (
    <>
      <Screenheader title='Chats'/> 
      <Link to='chat' style={{ textDecoration: "none" }}>
        <Usercomponet avatar={jeawon} name='JW' subtitle='개명고민' time='21:20' count='3' />
      </Link>
      <Usercomponet avatar={alexandra} name='daddario' subtitle='제일좋아하는배우' time='22:20' count='5' />

    </>
  )
} 
export default Chats;
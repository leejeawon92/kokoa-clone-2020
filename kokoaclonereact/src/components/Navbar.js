import styled from "styled-components";
import { FaUserAlt, FaComment, FaSearch,FaEllipsisH, FaRegComment, FaRegUser} from 'react-icons/fa'
import { Link, Outlet,useMatch, } from 'react-router-dom';
import { motion } from "framer-motion"
import { memo } from 'react';

const NavComponent = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: hsl(240, 9%, 98%);
  padding: 20px 50px;
  box-sizing: border-box;
  border-top: 1px solid rgba(121, 121, 121, 0.3);
  border-radius: 30px;
`

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
`

const MessageTotalCount = styled(motion.div)`
  position:  absolute;
  top: -16px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  width: 30px;
  height: 30px;
  border-radius:15px;
  font-size: 18px;
  color: black;
`

const Animate = {
  start : {scale: 0},
  end : {scale:1, rotateZ:360, transition: {type:"spring", stiffness:100, delay:0.5}}
}

function Nav({total}){
  const chatsMatch = useMatch('/chats');
  const rootMatch = useMatch('/');

  return(
    <>
      <NavComponent>
        <NavList>
          <Link to='/'>
            {
              (rootMatch ===null)
                ? (<FaUserAlt size={30} color='black'/>)
                : (<FaRegUser size={30} color='black'/>)
            }
          </Link>
          <Link to='/chats' style={{ textDecoration: "none",  position: 'relative' }}>
            {
              (chatsMatch === null) 
                ? 
                (<>
                  <FaComment size={30} color='black'/>
                  <MessageTotalCount  variants={Animate} initial='start' animate='end' >
                    {total}
                  </MessageTotalCount>
                </>)                  
                :
                (<>
                  <FaRegComment size={30} color='black' />
                  <MessageTotalCount variants={Animate} initial='start' animate='end' >
                    {total}
                  </MessageTotalCount>
                </>)    
            }
          </Link>
          <Link to='/search'><FaSearch size={30} color='black'/></Link>
          <Link to='/more'><FaEllipsisH size={30} color='black'/></Link>
        </NavList>
        <Outlet/>
      </NavComponent>
    </>
  )
}
export default memo(Nav) ;

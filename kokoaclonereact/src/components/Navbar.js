import styled from "styled-components";
import { FaUserAlt, FaComment, FaSearch,FaEllipsisH} from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom';

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

function Nav(){
  return(
    <>
      <NavComponent>
        <NavList>
          <Link to='/'><FaUserAlt size={30} color='black'/></Link>
          <Link to='/chats'><FaComment size={30} color='black'/></Link>
          <Link to='/search'><FaSearch size={30} color='black'/></Link>
          <Link to='/more'><FaEllipsisH size={30} color='black'/></Link>
        </NavList>
        <Outlet/>
      </NavComponent>
    </>
  )
}
export default Nav;

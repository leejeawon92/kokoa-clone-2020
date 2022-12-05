import styled from "styled-components";
import { FaUserAlt, FaComment, FaSearch,FaEllipsisH, FaRegComment, FaRegUser} from 'react-icons/fa'
import { Link, Outlet,useMatch, } from 'react-router-dom';

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
          <Link to='/chats'>
            {
              (chatsMatch === null) 
                ? (<FaComment size={30} color='black'/>)
                : (<FaRegComment size={30} color='black' />)
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
export default Nav;

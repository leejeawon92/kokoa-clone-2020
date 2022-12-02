import styled from 'styled-components'
import {ImSearch} from 'react-icons/im'
import {FaMusic, FaCog} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const ScreenHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--horizontal-space);
  margin-top: 15px;
`

const HeaderTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
`

const Icons = styled.div`
  .icon {
    margin-left: 25px;
  }
`

function Screenheader({title}){
  const history = useNavigate();
  const onclick = () => {
    history.push('settings');
  };
  return (
    <ScreenHeader>
      <HeaderTitle>{title}</HeaderTitle>
      <Icons>
        <ImSearch className='icon' size={20} />
        <FaMusic className='icon' size={20} />
        <Link onClick={()=> onclick} to='settings' >
          <FaCog className='icon' size={20} color='black' />
        </Link>
      </Icons>
    </ScreenHeader>
  )
}
export default Screenheader;
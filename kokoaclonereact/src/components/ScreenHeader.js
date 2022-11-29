import styled from 'styled-components'
import {ImSearch} from 'react-icons/im'
import {FaMusic, FaCog} from 'react-icons/fa'

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
  return (
    <ScreenHeader>
      <HeaderTitle>{title}</HeaderTitle>
      <Icons>
        <ImSearch className='icon' />
        <FaMusic className='icon'/>
        <FaCog className='icon'/>
      </Icons>
    </ScreenHeader>
  )
}
export default Screenheader;
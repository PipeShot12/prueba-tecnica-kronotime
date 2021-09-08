import styled from 'styled-components'
import MenuIcon from '../../assets/IconsSvg/Menu'
import CloseIcon from '../../assets/IconsSvg/Close'
const Button = styled.div`
  cursor: pointer;
  margin: 0;
  padding: 0;
  width: 1.5em;
  height: 1.5em;
`
export default function MenuToggle ({ isOpen, setIsOpen }) {
  return (
    <Button onClick={() => setIsOpen(prev => !prev)}>
      {isOpen ? <CloseIcon fill='var(--text-color)' /> : <MenuIcon fill='var(--text-color)' />}
    </Button>
  )
}

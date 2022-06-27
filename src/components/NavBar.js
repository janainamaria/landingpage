import { Container } from './Style';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';


 const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) =>{
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)}/>
      <nav>
        <a href="/products">Cursos</a>
        <a href="/about">Sobre</a>
        <a href="/">Contato</a>
      </nav>
    </Container>
  )
} 
export default MenuMobile

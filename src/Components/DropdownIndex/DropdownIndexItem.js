
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './DropdownIndexItem.css';

const DropdownIndexItem = (props) => {

    const itemImage = props.itemImage
    const itemName = props.itemName
   return(
    <Container id='index-container'>
        <img id='index-image' src={itemImage}></img>
        <Nav href='home'>{itemName}</Nav>            
    </Container>
   )
}

export default DropdownIndexItem;
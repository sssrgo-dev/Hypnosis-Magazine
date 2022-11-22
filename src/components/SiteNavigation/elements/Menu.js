// import { Element, Block } from '../../BEMComponents';
import { Row, Col } from '../../FlexboxGrid';
import { menuContent } from '../../../content/content';

const Menu = () => (
  <Row blockClasses={['grid', 'menu']}>
    {menuContent.map((menuItem) => (
      <Col
        key={menuItem.id.toString()}
        classNames={['grid__col-desk-2', 'menu__item']}
      >
        {menuItem.name}
      </Col>
    ))}
  </Row>
);

export default Menu;

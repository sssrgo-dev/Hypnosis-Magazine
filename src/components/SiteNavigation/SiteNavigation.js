import { Row, Col } from '../FlexboxGrid';
import Logo from './elements/Logo';
import Menu from './elements/Menu';
import SiteSearch from './elements/SiteSearch';

const SiteNavigation = (props) => (
  <nav className={props.classes.join(' ')}>
    <Logo classes={['grid__col-desk-3']}>
      Hypnosis<sup>TM</sup>
    </Logo>

    <Col classNames={['grid__col-desk-6']}>
      <Menu />
    </Col>
    <Col classNames={['grid__col-desk-3']}>
      <SiteSearch />
    </Col>
  </nav>
);

export default SiteNavigation;

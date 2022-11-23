import { formContextedComponentsList } from '../utlis';
import { Logo, Menu } from './elements/HeaderComponents';
import SiteSearch from './elements/SiteSearch';
// import LayoutComponent from '../LayoutComponent';
// import { StyleContext } from '../contexts';

const componentsWithContext = [
  {
    comp: <Logo />,
    styleContext: { gridEl: 'grid__col-desk-3', gridBlock: '', block: 'logo' },
  },
  {
    comp: <Menu />,
    styleContext: {
      gridEl: 'grid__col-desk-6',
      gridBlock: 'grid',
      block: 'menu',
    },
  },
  {
    comp: <SiteSearch />,
    styleContext: {
      gridEl: '',
      gridBlock: '',
      block: '',
    },
  },
];

const headeContextedComponentsList = formContextedComponentsList(
  componentsWithContext
);

const Header = () => {
  return headeContextedComponentsList;
};

export default Header;

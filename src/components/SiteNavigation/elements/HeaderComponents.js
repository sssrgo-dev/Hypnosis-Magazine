import { formContextedComponentsList } from '../../utlis';

import { menuContent } from '../../../content/content';

const Logo = () => (
  <>
    Hypnosis<sup>TM</sup>
  </>
);

const menuElementsWithContext = menuContent.map((element) => ({
  comp: element,
  styleContext: {
    gridEl: 'grid__col-desk-2',
    gridBlock: '',
    block: 'menu__item',
  },
}));

const menuComponentsList = formContextedComponentsList(menuElementsWithContext);

const Menu = () => menuComponentsList;

export { Logo, Menu };

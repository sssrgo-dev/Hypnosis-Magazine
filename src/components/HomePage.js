import { StyleContext } from './contexts';

import LayoutComponent from './LayoutComponent';
import MainContent from './MainContent';
import MainHeading from './PageMeta/MainHeading';
import PageMeta from './PageMeta/PageMeta';
import Header from './SiteNavigation/Header';
import { formContextedComponentsList } from './utlis';

const homePageElementsAndContexts = [
  {
    comp: <Header />,
    styleContext: {
      gridEl: 'grid__col-desk-12',
      gridBlock: 'grid grid--align-items_center',
      block: 'header',
      pageSection: true,
    },
  },
  {
    comp: <MainHeading />,
    styleContext: {
      gridEl: 'grid__col-desk-12',
      gridBlock: 'grid grid--padded grid--align-items_center',
      block: 'h1',
      pageSection: true,
    },
  },
  {
    comp: <PageMeta />,
    styleContext: {
      gridEl: 'grid__col-desk-12',
      gridBlock:
        'grid grid--padded grid--justify-content_space-between grid--align-items_center',
      block: 'page-meta',
      pageSection: true,
    },
  },
  {
    comp: <MainContent />,
    styleContext: {
      gridEl: 'grid__col-desk-12',
      gridBlock: 'grid',
      block: 'main-content',
    },
  },
  {
    comp: 'RelativeToMainIdeaContent',
    styleContext: {
      gridEl: 'grid__col-desk-12',
      gridBlock: 'grid grid--padded grid--align-items_center',
      block: 'relative-content',
    },
  },
  {
    comp: 'SubscriptionForm',
    styleContext: {
      gridEl: 'grid__col-desk-12',
      gridBlock: 'grid grid--padded grid--align-items_center',
      block: 'subscribe',
    },
  },
  {
    comp: 'Footer',
    styleContext: {
      gridEl: 'grid__col-desk-12',
      gridBlock: 'grid grid--padded ',
      block: 'footer',
    },
  },
];

const homePageComponents = formContextedComponentsList(
  homePageElementsAndContexts
);

const HomePage = () => (
  <StyleContext.Provider
    value={{ gridEl: '', gridBlock: '', block: 'home-page-container' }}
  >
    <LayoutComponent>{homePageComponents}</LayoutComponent>
  </StyleContext.Provider>
);

export default HomePage;

import { formContextedComponentsList } from './utlis';
import {
  mainBanner,
  secondaryBanner1,
  secondaryBanner2,
  videoBanner,
} from '../content/content';
import Banner from './Banner/Banner';

const mainBannersSchema = [
  {
    content: mainBanner,
    styleContext: {
      gridEl: 'grid__col-desk-12',
      gridBlock: 'grid',
      block: 'banner',
      type: 'main',
    },
  },
  {
    content: secondaryBanner1,
    styleContext: {
      gridEl: 'grid__col-desk-12',
      gridBlock: 'grid grid--padded',
      block: 'banner',
      type: 'secondary--1',
    },
  },
  {
    content: secondaryBanner2,
    styleContext: {
      gridEl: 'grid__col-desk-12',
      gridBlock: 'grid grid--padded',
      block: 'banner',
      type: 'secondary--2',
    },
  },
  {
    content: videoBanner,
    styleContext: {
      gridEl: 'grid__col-desk-12',
      gridBlock: 'grid grid--padded',
      block: 'banner',
      type: 'video',
    },
  },
];

const formBannerComponentsWithContext = (elem) => ({
  comp: <Banner content={elem.content} />,
  styleContext: elem.styleContext,
});

const bannerComponentsWithContext = mainBannersSchema.map(
  formBannerComponentsWithContext
);

const mainContextedComponentsList = formContextedComponentsList(
  bannerComponentsWithContext
);

const MainContent = () => mainContextedComponentsList;

export default MainContent;

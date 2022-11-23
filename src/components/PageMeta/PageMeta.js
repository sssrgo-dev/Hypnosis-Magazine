import MainHeading from './MainHeading';
import Author from './Author';
import SocialShareBlock from './SocialShareBlock';
import { formContextedComponentsList } from '../utlis';

const pageMetaElementsAndContext = [
  {
    comp: <Author />,
    styleContext: {
      gridEl: 'grid__col-desk-3',
      gridBlock: 'grid grid--align-items_center',
      block: 'author',
    },
  },
  {
    comp: <SocialShareBlock />,
    styleContext: {
      gridEl: 'grid__col-desk-5',
      gridBlock: 'grid grid--align-items_center grid--justify-content_flex-end',
      block: 'buttons-share',
    },
  },
];

const PageMeta = () => formContextedComponentsList(pageMetaElementsAndContext);

export default PageMeta;

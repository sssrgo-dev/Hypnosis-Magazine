// import playIcon from '../media/svg/Group 10.svg';

import BannerGraphics from './elements/BannerGraphics';
import BannerInfo from './elements/BannerInfo';

const unary = (fn) => (arg1) => (arg2) => fn(arg1, arg2);

const formBEMClasses = (modifier, bem) =>
  bem + modifier ? bem + modifier : '';

const formBEMClassesStep1 = unary(formBEMClasses);

const Banner = (props) => {
  const modifier = props.blockModifier ? '--' + props.blockModifier : '';
  const modifyBEMClass = formBEMClassesStep1(modifier);
  const BEMClasses = modifyBEMClass('banner');
  // console.log('props.content.bannerGraphics', props.content.bannerGraphics);

  return (
    <div className={BEMClasses}>
      <BannerGraphics
        modifyBEMClass={modifyBEMClass}
        content={props.content.bannerGraphics}
      />
      <BannerInfo
        modifyBEMClass={modifyBEMClass}
        content={props.content.bannerInfo}
      />
    </div>
  );
};

// const VideoIconImage = (props) => {
//   if (props.banner.type === 'video')
//     return (
//       <img src={playIcon} alt="click to play" class="banner__icon--video" />
//     );
//   return '';
// };
// const formBannerBlockList = (banner) => (
//   <Banner
//     key={banner.id}
//     imagePath={banner.imagePath}
//     type={banner.type}
//     classes={[
//       'grid',
//       'banner',
//       banner.type === 'secondary' ? 'grid--padded banner--secondary' : '',
//       banner.type === 'video'
//         ? 'grid--padded grid--direction_column banner--video'
//         : '',
//     ]}
//   >
//     <div
//       className={`banner__graphics ${
//         banner.type === 'main' ? 'grid__col-desk-12' : ''
//       }${banner.type === 'secondary' ? ' grid__col-desk-6' : ''} ${
//         banner.id > 1 && banner.id % 2 === 1 ? 'grid__col-desk-6--order2' : ''
//       }${banner.type === 'video' ? ' grid__col-desk-12' : ''}`}
//     >
//       <VideoIconImage banner={banner} />
//       <img
//         src={banner.imagePath}
//         alt={banner.content.header}
//         className={`banner__image banner__image--${banner.type}${
//           banner.id > 1 && banner.id % 2 === 1 ? `-reversed` : ''
//         }`}
//       />
//     </div>

//     <div
//       className={[
//         banner.type === 'main' ? 'grid__col-desk-12' : '',
//         banner.type === 'secondary'
//           ? 'grid__col-desk-6 grid--direction_column grid--justify-content_center'
//           : '',
//         banner.type === 'video'
//           ? 'grid__col-desk-12 grid--justify-content_center'
//           : '',

//         'grid',
//         'banner__info',
//         `banner__info--${banner.type}`,
//       ].join(' ')}
//     >
//       <div
//         className={[
//           banner.type === 'main' ? 'grid__col-desk-6' : '',
//           'banner__heading',
//         ].join(' ')}
//       >
//         {banner.content.header}
//       </div>
//       <div
//         className={[
//           banner.type === 'main' ? 'grid__col-desk-6' : '',
//           'banner__text',
//         ].join(' ')}
//       >
//         {banner.content.texts.map((text) => (
//           <p key={text.id}>{text.p}</p>
//         ))}
//       </div>
//     </div>
//   </Banner>
// );

export default Banner;

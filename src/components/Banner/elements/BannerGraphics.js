import { formComponentsListIfGiven } from '../../utlis';

// const BannerIcon = (props) => {
//   console.log('BannerIcon', props);
//   if (props.content !== undefined) {
//     const modifyBEMClass = props.modifyBEMClass;
//     return (
//       <img
//         className={modifyBEMClass('banner__button')}
//         src={props.content.icon.src}
//         alt={props.content.icon.alt}
//       />
//     );
//   }
//   return '';
// };

// const BannerImage = (props) => {
//   if (props.content !== undefined) {
//     return (
//       <img
//         className={props.modifyBEMClass('banner__image')}
//         src={props.content.src}
//         alt={props.content.alt}
//       />
//     );
//   }
//   return '';
// };

const BannerGraphics = (props) => {
  const modifyBEMClass = props.modifyBEMClass;
  const BEMClasses = modifyBEMClass('banner__graphics');
  console.log('BannerGraphics', props.content.bannerImage);

  const bannerGraphicsChildren = [
    <img
      className={props.modifyBEMClass('banner__icon')}
      src={props.content.bannerIcon?.src}
      alt={props.content.bannerIcon?.alt}
    />,
    <img
      className={props.modifyBEMClass('banner__image')}
      src={props.content.bannerImage.src}
      alt={props.content.bannerImage.alt}
    />,
  ];

  //   console.log('bannerGraphicsChildren', bannerGraphicsChildren);

  return (
    <div className={BEMClasses}>
      {formComponentsListIfGiven(bannerGraphicsChildren)}
    </div>
  );
};

export default BannerGraphics;

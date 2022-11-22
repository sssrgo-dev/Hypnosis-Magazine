const BannerIcon = (props) => {
  console.log('BannerIcon', props);
  if (props.content !== undefined) {
    const modifyBEMClass = props.modifyBEMClass;
    return (
      <img
        className={modifyBEMClass('banner__button')}
        src={props.content.icon.src}
        alt={props.content.icon.alt}
      />
    );
  }
  return '';
};
export default BannerIcon;

const BannerImage = (props) => {
  if (props.content !== undefined) {
    return (
      <img
        className={props.modifyBEMClass('banner__image')}
        src={props.content.src}
        alt={props.content.alt}
      />
    );
  }
  return '';
};
export default BannerImage;

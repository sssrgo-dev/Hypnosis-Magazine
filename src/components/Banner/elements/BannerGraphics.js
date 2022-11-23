const BannerGraphics = ({ content }) => {
  const bannerGraphicsChildren = [
    <img className={''} src={content.src} alt={content.alt} />,
  ];

  return <div className="banner__graphics">{bannerGraphicsChildren}</div>;
};

export default BannerGraphics;

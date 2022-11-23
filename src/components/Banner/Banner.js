import { useContext } from 'react';
import { StyleContext } from '../contexts';

const layoutSchema = {
  main: {
    graphics: 12,
    info: 12,
  },
  'secondary--1': {
    graphics: 6,
    info: 6,
  },
  'secondary--2': {
    graphics: 6,
    info: 6,
  },
  video: {
    graphics: 12,
    info: 12,
  },
};

const formTextFromPList = (texts) =>
  texts?.map((text, index) => (
    <p key={new Date().getTime() + index}>{text.p}</p>
  )) || '';

export const Banner = ({ content }) => {
  const { block, type } = useContext(StyleContext);
  const BannerInfoText = formTextFromPList(content.bannerInfo.texts);

  return (
    <>
      <div
        className={`${block}__graphics ${block}__graphics--${type} grid__col-desk-${layoutSchema[type].graphics}`}
      >
        <img
          className={`${block}__image ${block}__image--${type}`}
          src={content.bannerImage.src}
          alt={content.bannerImage.alt}
        />
      </div>
      <div className={`${block}__info ${block}__info--${type}`}>
        <>
          {/* bunner category */}
          <div
            className={`${block}__heading ${block}__heading--${type} grid__col-desk-${layoutSchema[type]}`}
          >
            {content.bannerInfo.heading}
          </div>
          <div className={`${block}__text ${block}__text--type`}>
            {BannerInfoText}
          </div>
          {/* bunner button */}
        </>
      </div>
    </>
  );
};

export default Banner;

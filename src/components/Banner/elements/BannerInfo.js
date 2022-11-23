import { formComponentsListIfGiven } from '../../utlis';

const DivBEMComponent = (props) => {
  const className = props.modifyBEMClass(props.BEMClass);
  return <div className={className}>{props.children}</div>;
};

const BannerInfo = (props) => {
  const modifyBEMClass = props.modifyBEMClass;
  const modifiedBEMClass = modifyBEMClass('banner__info');
  const BannerInfoText = () =>
    props.content.texts.map((text, index) => (
      <p
        key={new Date().getTime() + index * index}
        className={modifyBEMClass('banner__text-paragraph')}
      >
        {text}
      </p>
    ));

  const bunnerInfoButtonContent = formComponentsListIfGiven([
    <img
      className={modifyBEMClass('button__icon')}
      src={props.content.button?.img?.src}
      alt={props.content.button?.img?.alt}
    />,
    <span className={modifyBEMClass('button__text')}>
      {props.content.button?.text}
    </span>,
  ]);

  const BannerInfoElementsList = [
    <DivBEMComponent
      modifyBEMClass={modifyBEMClass}
      BEMClass="banner__category"
    >
      {props.content.category}
    </DivBEMComponent>,

    <DivBEMComponent modifyBEMClass={modifyBEMClass} BEMClass="banner__heading">
      {props.content.heading}
    </DivBEMComponent>,

    <DivBEMComponent modifyBEMClass={modifyBEMClass} BEMClass="banner__text">
      <BannerInfoText />
    </DivBEMComponent>,

    <button className={modifyBEMClass('button')}>
      {bunnerInfoButtonContent}
    </button>,
  ];

  console.log(
    'BannerInfo',
    props.content.texts.map((text, index) => (
      <p
        key={new Date().getTime() + index * index}
        className={modifyBEMClass('banner__text-paragraph')}
      >
        {text}
      </p>
    )),
    modifiedBEMClass
  );

  return (
    <div className={modifiedBEMClass}>
      {formComponentsListIfGiven(BannerInfoElementsList)}
    </div>
  );
};

export default BannerInfo;

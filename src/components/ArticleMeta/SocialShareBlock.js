import { socialButtons } from '../../content/content';

const formSocialShareButton = (socialItem) => (
  <button key={socialItem.id} className="buttons-share__item ">
    <img
      src={socialItem.iconLink}
      alt={socialItem.name}
      className="buttons-share__icon"
    />
    <div className="buttons-share__name">{socialItem.name}</div>
  </button>
);

const SocialShareBlock = (props) => (
  <div className={props.classes.join(' ')}>
    {socialButtons.map(formSocialShareButton)}
  </div>
);

export default SocialShareBlock;

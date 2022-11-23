import { socialButtons } from '../../content/content';
import { formContextedComponentsList } from '../utlis';

const formSocialShareButton = (socialItem, index) => (
  <button key={new Date().getTime() * index} className="buttons-share__item">
    <img
      src={socialItem.iconLink}
      alt={socialItem.name}
      className="buttons-share__icon"
    />
    <div className="buttons-share__name">{socialItem.name}</div>
  </button>
);

const SocialShareBlock = () => socialButtons.map(formSocialShareButton);

export default SocialShareBlock;

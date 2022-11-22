import avatar from '../../media/jpg/IMG_20181015_120642.jpg';

const Author = (props) => (
  <div className={props.classes.join(' ')}>
    <img src={avatar} alt="sssrgo" className="author__image" />
    <div className="author__info">
      <div className="author__name">Sergey Shikhabudinov</div>
      <div className="author__prof">
        <span className="author__department">Hypnosis</span> -
        <span className="author__position">Senior Editor</span>
      </div>
    </div>
  </div>
);

export default Author;

import icon from '../../../media/svg/magnifier.svg';

const SiteSearch = () => (
  <form className="search-form" action="">
    <div>
      <input
        className="search-form__input"
        placeholder="Search..."
        type="text"
      />
      <button className="button_nostyle">
        <img
          src={icon}
          alt="click to start search"
          className="button_nostyle__icon"
        />
      </button>
    </div>
  </form>
);

export default SiteSearch;

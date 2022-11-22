const Logo = (props) => (
  <div className={`logo ${props.classes?.join('')}`}>{props.children}</div>
);

export default Logo;

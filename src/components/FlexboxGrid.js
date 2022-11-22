const Row = (props) => (
  <div className={props.blockClasses.join(' ')}>{props.children}</div>
);
const Col = (props) => {
  return <div className={props.classNames.join(' ')}>{props.children}</div>;
};

export { Row, Col };

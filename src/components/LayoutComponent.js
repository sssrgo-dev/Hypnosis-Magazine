import { useContext } from 'react';
import { StyleContext } from './contexts';

const LayoutComponent = ({ children }) => {
  const { gridEl, gridBlock, block, pageSection, type } =
    useContext(StyleContext);

  const styles = [
    gridEl,
    gridBlock,
    block,
    type ? `${block}--${type}` : '',
  ].join(' ');

  return (
    <>
      <div className={styles}>{children}</div>
      {!!pageSection ? <hr /> : ''}
    </>
  );
};

export default LayoutComponent;

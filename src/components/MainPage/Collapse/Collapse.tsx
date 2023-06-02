import { useState, useCallback } from 'react';
import './Collapse.scss';
const mainClass = 'collapse';

type TCollapse = {
  titleText: string;
  titleLink?: string;
  children?: JSX.Element;
  mod?: string;
};

function Collapse({ titleText, titleLink, children, mod }: TCollapse) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const className = mod ? `${mainClass} ${mainClass}_${mod}` : mainClass;

  const onToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className={className}>
      <div className={`${mainClass}__title`} onClick={onToggle}>
        {titleText}: <span className={`${mainClass}__mark`}>{titleLink}</span>
      </div>
      {isOpen && <div className={`${mainClass}__wrap`}>{children}</div>}
    </div>
  );
}

export default Collapse;

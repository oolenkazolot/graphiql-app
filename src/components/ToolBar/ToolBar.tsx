import './ToolBar.scss';
const mainClass = 'tool-bar';

function ToolBar() {
  return (
    <div className={mainClass}>
      <span className={`${mainClass}__title`}>Endpoint:</span>
      <input className={`${mainClass}__content`} type="text" />
    </div>
  );
}

export default ToolBar;

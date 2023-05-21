import './TopBar.scss';
import ToolBar from '../ToolBar/ToolBar';
const mainClass = 'top-bar';
const linkToGithub = 'https://github.com/oolenkazolot/graphiql-app/tree/develop';
import github from '../../assets/svg/github.svg';

type TTopBar = {
  onSubmitHandler: () => void;
};

function TopBar({ onSubmitHandler }: TTopBar) {
  return (
    <div className={mainClass}>
      <a
        className={`${mainClass}__link`}
        href={linkToGithub}
        title="See GraphiQL Online on GitHub"
        target="_blank"
      >
        <img className={`${mainClass}__link-img`} src={github} alt="github" />
      </a>

      <button className={`${mainClass}__btn-play`} onClick={onSubmitHandler}>
        <i className={`icon-play ${mainClass}__btn-play-icon`}></i>
      </button>
      <ToolBar />
      {/* {isShowBtnDoc && (
        <button className={`${mainClass}__btn-doc-explorer`} onClick={onClickHandler}>
          Docs
        </button>
      )} */}
    </div>
  );
}

export default TopBar;

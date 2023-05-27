import { useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { createNewTheme } from '../../../utils/createNewTheme';
import './HeadersEditor.scss';
const mainClass = 'headers-editor';
import { useTranslation } from 'react-i18next';

type TRequest = {
  onChangeHandler: (value: string) => void;
  onToggleHeaders: () => void;
  isOpen: boolean;
};

const extensions = [javascript({ jsx: true })];

const theme = createNewTheme({
  theme: 'dark',
  settings: { foreground: '#48D1CC', background: '#172b3a', gutterBackground: '#172b3a' },
});

function HeadersEditor({ onChangeHandler, onToggleHeaders, isOpen }: TRequest) {
  const onChange = useCallback(
    (value: string) => {
      onChangeHandler(value);
    },
    [onChangeHandler]
  );
  const { t } = useTranslation();

  return (
    <section className={mainClass}>
      {
        <button className={`${mainClass}__btn`} onClick={onToggleHeaders}>
          {t('main.headers')}
        </button>
      }
      <div className={isOpen ? `${mainClass}__wrap ${mainClass}__wrap_open` : `${mainClass}__wrap`}>
        <CodeMirror height="220px" theme={theme} extensions={extensions} onChange={onChange} />
      </div>
    </section>
  );
}

export default HeadersEditor;

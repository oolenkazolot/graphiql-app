import { useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import './VariableEditor.scss';
import { createNewTheme } from '../../utils/createNewTheme';
const mainClass = 'variable-editor';
import { useTranslation } from 'react-i18next';

type TRequest = {
  onChangeHandler: (value: string) => void;
  onToggleVariables: () => void;
  isOpen: boolean;
};

const theme = createNewTheme({ theme: 'dark', settings: { foreground: '#DC143C' } });

const extensions = [javascript({ jsx: true })];

function VariableEditor({ onChangeHandler, onToggleVariables, isOpen }: TRequest) {
  const onChange = useCallback(
    (value: string) => {
      onChangeHandler(value);
    },
    [onChangeHandler]
  );

  const { t } = useTranslation();

  return (
    <section className={mainClass}>
      <button className={`${mainClass}__btn`} onClick={onToggleVariables}>
        {t("main.query")}
      </button>
      <div className={isOpen ? `${mainClass}__wrap ${mainClass}__wrap_open` : `${mainClass}__wrap`}>
        <CodeMirror height="220px" theme={theme} extensions={extensions} onChange={onChange} />
      </div>
    </section>
  );
}

export default VariableEditor;

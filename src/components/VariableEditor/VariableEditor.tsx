import { useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { myTheme } from '../../utils/themeCodemirror';
import './VariableEditor.scss';
const mainClass = 'variable-editor';

type TRequest = {
  onChangeHandler: (value: string) => void;
  onToggleVariables: () => void;
  isOpen: boolean;
};

const extensions = [javascript({ jsx: true })];

function VariableEditor({ onChangeHandler, onToggleVariables, isOpen }: TRequest) {
  const onChange = useCallback(
    (value: string) => {
      onChangeHandler(value);
    },
    [onChangeHandler]
  );

  return (
    <section className={mainClass}>
      <button className={`${mainClass}__btn`} onClick={onToggleVariables}>
        Query Variables
      </button>
      <div className={isOpen ? `${mainClass}__wrap ${mainClass}__wrap_open` : `${mainClass}__wrap`}>
        <CodeMirror height="220px" theme={myTheme} extensions={extensions} onChange={onChange} />
      </div>
    </section>
  );
}

export default VariableEditor;

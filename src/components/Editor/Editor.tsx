import { useCallback /*useEffect, useRef*/ } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { myTheme } from '../../utils/themeCodemirror';
import './Editor.scss';

type TRequest = {
  onChangeHandler: (value: string) => void;
  isOpen: boolean;
};

const extensions = [javascript({ jsx: true })];

function Editor({ onChangeHandler, isOpen }: TRequest) {
  const onChange = useCallback(
    (value: string) => {
      onChangeHandler(value);
    },
    [onChangeHandler]
  );

  return (
    <section className={isOpen ? `editor editor_variables-open` : `editor`}>
      <CodeMirror height="100%" theme={myTheme} extensions={extensions} onChange={onChange} />
    </section>
  );
}

export default Editor;

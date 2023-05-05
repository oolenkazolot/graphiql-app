import { useCallback } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import './Editor.scss';
const mainClass = 'editor';

type TRequest = {
  onChangeHandler: (value: string) => void;
};

const myTheme = createTheme({
  theme: 'light',
  settings: {
    background: '#0f202d',
    foreground: '#75baff',
    caret: '#5d00ff',
    selection: '#036dd626',
    selectionMatch: '#036dd626',
    lineHighlight: '#8a91991a',
    gutterBackground: '#0f202d',
    gutterForeground: '#8a919966',
  },
  styles: [
    { tag: t.comment, color: '#787b8099' },
    { tag: t.variableName, color: '#0080ff' },
    { tag: [t.string, t.special(t.brace)], color: '#5c6166' },
    { tag: t.number, color: '#5c6166' },
    { tag: t.bool, color: '#5c6166' },
    { tag: t.null, color: '#5c6166' },
    { tag: t.keyword, color: '#5c6166' },
    { tag: t.operator, color: '#5c6166' },
    { tag: t.className, color: '#5c6166' },
    { tag: t.definition(t.typeName), color: '#5c6166' },
    { tag: t.typeName, color: '#5c6166' },
    { tag: t.angleBracket, color: '#5c6166' },
    { tag: t.tagName, color: '#5c6166' },
    { tag: t.attributeName, color: '#5c6166' },
  ],
});
const extensions = [javascript({ jsx: true })];

function Editor({ onChangeHandler }: TRequest) {
  const onChange = useCallback(
    (value: string) => {
      onChangeHandler(value);
    },
    [onChangeHandler]
  );
  return (
    <section className={mainClass}>
      <CodeMirror height="500px" theme={myTheme} extensions={extensions} onChange={onChange} />
    </section>
  );
}

export default Editor;

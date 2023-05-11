import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import { tabulateJSON } from '../../utils/tabulateJSON';
import './Response.scss';
const mainClass = 'response';

const myTheme = createTheme({
  theme: 'light',
  settings: {
    background: '#172b3a',
    foreground: '#f52891cc',
    caret: '#5d00ff',
    selection: '#036dd626',
    selectionMatch: '#036dd626',
    lineHighlight: '#8a91991a',
    gutterBackground: '#172b3a',
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

type TResponse = {
  response: string;
};

function Response({ response }: TResponse) {
  return (
    <section className={mainClass}>
      <CodeMirror
        height="500px"
        theme={myTheme}
        extensions={extensions}
        readOnly={true}
        value={tabulateJSON(response)}
      />
    </section>
  );
}

export default Response;

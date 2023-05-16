import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { tabulateJSON } from '../../utils/tabulateJSON';
import { myThemeResponse } from '../../utils/themeCodemirror';
import './Response.scss';
const mainClass = 'response';

const extensions = [javascript({ jsx: true })];

type TResponse = {
  response: string;
};

function Response({ response }: TResponse) {
  return (
    <section className={mainClass}>
      <CodeMirror
        height="100%"
        theme={myThemeResponse}
        extensions={extensions}
        readOnly={true}
        value={tabulateJSON(response)}
      />
    </section>
  );
}

export default Response;

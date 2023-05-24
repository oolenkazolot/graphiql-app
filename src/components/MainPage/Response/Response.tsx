import { tabulateJSON } from '../../../utils/tabulateJSON';

import './Response.scss';
const mainClass = 'response';

type TResponse = {
  response: string;
  isOpen: boolean;
};

function Response({ response, isOpen }: TResponse) {
  return (
    <section className={isOpen ? `${mainClass} ${mainClass}_headers-open` : mainClass}>
      {response ? (
        <pre className={`${mainClass}__code`}>{tabulateJSON(response)}</pre>
      ) : (
        <div className={`${mainClass}__default-text`}>
          Hit the Play Button to get a response here
        </div>
      )}
    </section>
  );
}

export default Response;

import { tabulateJSON } from '../../../utils/tabulateJSON';

import './Response.scss';
import { useTranslation } from 'react-i18next';

const mainClass = 'response';

type TResponse = {
  response: string;
  isOpen: boolean;
};

function Response({ response, isOpen }: TResponse) {
  const { t } = useTranslation();
  return (
    <section className={isOpen ? `${mainClass} ${mainClass}_headers-open` : mainClass}>
      {response ? (
        <pre className={`${mainClass}__code`}>{tabulateJSON(response)}</pre>
      ) : (
        <div className={`${mainClass}__default-text`}>
          {t("main.hit")}
        </div>
      )}
    </section>
  );
}

export default Response;

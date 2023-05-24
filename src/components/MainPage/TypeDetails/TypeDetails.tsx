import { TTypeItem, TField } from '../../../types/schemeTypes';
import SchemeType from '../SchemeType/SchemeType';
import './TypeDetails.scss';
import { useTranslation } from 'react-i18next';

const mainClass = 'type-details';

type TTypeDetails = {
  typeItem: TTypeItem;
  types: TTypeItem[];
};

function TypeDetails({ typeItem, types }: TTypeDetails) {
  const fields = typeItem.inputFields || typeItem.fields;
  const { t } = useTranslation();

  return (
    <div className={mainClass}>
      <div className={`${mainClass}__title chapter`}>{t("documentation.type")}</div>
      <div className={`${mainClass}__content`}>
        <div className={`${mainClass}__subtitle`}>
          <span className={`${mainClass}__text`}>type </span>
          <span className={`${mainClass}__text ${mainClass}__text_mark`}>{typeItem.name}</span>
          <span className={`${mainClass}__text ${mainClass}__text_code`}>{'{'}</span>
        </div>

        {fields.map((item: TField, index: number) => (
          <SchemeType typeItem={item} types={types} mod="type" key={index} />
        ))}
        <span className={`${mainClass}__text ${mainClass}__text_code`}> {' }'}</span>
      </div>
    </div>
  );
}

export default TypeDetails;

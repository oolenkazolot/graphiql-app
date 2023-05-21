import { useMemo } from 'react';
import Collapse from '../Collapse/Collapse';
import TypeDetails from '../TypeDetails/TypeDetails';
import { TTypeItem, TField, TArgs } from '../../types/schemeTypes';
import Argument from '../Argument/Argument';
import { getParamsFields } from '../../utils/getParamsFields';
import './SchemeType.scss';
const mainClass = 'scheme-type';

type TSchemeTypeProps = {
  typeItem: TField;
  types: TTypeItem[];
  mod?: string;
};

function SchemeType({ typeItem, types, mod }: TSchemeTypeProps) {
  const { queryType, isList, isRequired } = useMemo(() => {
    return getParamsFields(typeItem, types);
  }, [typeItem, types]);

  const title = useMemo(() => {
    let typeTitle = queryType?.name;

    if (isList) {
      typeTitle = `[${typeTitle}]`;
    }
    if (isRequired) {
      typeTitle += '!';
    }
    return typeTitle;
  }, [isList, isRequired, queryType?.name]);

  if (!queryType) {
    return null;
  }

  return (
    <div className={mainClass}>
      <Collapse titleText={typeItem.name} titleLink={title} mod={mod}>
        <>
          {queryType.description ? (
            <span className={`${mainClass}__description`}>{`${queryType.description}`}</span>
          ) : (
            <TypeDetails typeItem={queryType} types={types} />
          )}
          {typeItem.args && typeItem.args.length ? (
            <>
              <div className={`${mainClass}__arguments chapter`}>ARGUMENTS</div>
              {typeItem.args.map((item: TArgs, index: number) => (
                <div key={index}>
                  <Argument typeItem={item} types={types} />
                </div>
              ))}
            </>
          ) : null}
        </>
      </Collapse>
    </div>
  );
}

export default SchemeType;

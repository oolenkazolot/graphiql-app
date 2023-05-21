import { useMemo } from 'react';
import { TTypeItem, TArgs } from '../../types/schemeTypes';
import TypeDetails from '../TypeDetails/TypeDetails';
import Collapse from '../Collapse/Collapse';
import { getParamsArgs } from '../../utils/getParamsArgs';
import './Argument.scss';

const mainClass = 'argument';

type TArgumentProps = {
  typeItem: TArgs;
  types: TTypeItem[];
};

function Argument({ typeItem, types }: TArgumentProps) {
  const { argsType, isList, isRequired, isRequiredTwo } = useMemo(() => {
    return getParamsArgs(typeItem, types);
  }, [typeItem, types]);

  const title = useMemo(() => {
    let typeTitle = argsType?.name;

    if (isRequired) {
      typeTitle += '!';
    }

    if (isList) {
      typeTitle = `[${typeTitle}]`;
    }

    if (isRequiredTwo) {
      typeTitle += '!';
    }

    return typeTitle;
  }, [argsType?.name, isList, isRequired, isRequiredTwo]);

  if (!argsType) {
    return null;
  }

  return (
    <div className={mainClass}>
      <Collapse titleText={typeItem.name} titleLink={title} mod="args">
        {argsType.description ? (
          <span className={`${mainClass}__description`}>{`${argsType.description}`}</span>
        ) : (
          <TypeDetails typeItem={argsType} types={types} />
        )}
      </Collapse>
    </div>
  );
}

export default Argument;

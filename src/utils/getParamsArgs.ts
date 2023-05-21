import { TResArg, TArgs, TFieldType, TTypeItem } from '../types/schemeTypes';

export function getParamsArgs(
  typeItem: TArgs | TFieldType,
  types: TTypeItem[],
  res: TResArg = { argsType: undefined, isList: false, isRequired: false, isRequiredTwo: false }
): TResArg {
  const nextType = 'type' in typeItem ? typeItem.type : typeItem?.ofType;
  if (!nextType) {
    return res;
  }

  if (nextType.kind === 'NON_NULL') {
    if (!res.isRequired) {
      res.isRequired = true;
    } else {
      res.isRequiredTwo = true;
    }
  } else if (nextType.kind === 'LIST') {
    res.isList = true;
  } else {
    res.argsType = types.find((item: TTypeItem) => item.name === nextType.name);
  }

  if ('ofType' in nextType) {
    getParamsArgs(nextType, types, res);
  }

  return res;
}

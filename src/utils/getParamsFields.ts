import { TTypeItem, TField, TFieldType, TRes } from '../types/schemeTypes';

export function getParamsFields(
  typeItem: TFieldType | TField,
  types: TTypeItem[],
  res: TRes = { queryType: undefined, isList: false, isRequired: false }
): TRes {
  const nextType = 'type' in typeItem ? typeItem.type : typeItem?.ofType;
  if (!nextType) {
    return res;
  }

  if (nextType.kind === 'NON_NULL') {
    res.isRequired = true;
  } else if (nextType.kind === 'LIST') {
    res.isList = true;
  } else {
    res.queryType = types.find((item: TTypeItem) => item.name === nextType.name);
  }

  if ('ofType' in nextType) {
    getParamsFields(nextType, types, res);
  }

  return res;
}

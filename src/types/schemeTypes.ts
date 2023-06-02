export type TTypeItem = {
  name: string;
  fields: TField[];
  inputFields: TField[];
  description: string;
  kind: string;
};

export type TField = {
  args: TArgs[];
  description: string;
  isDeprecated: boolean;
  name: string;
  type: TFieldType;
};

export type TFieldType = {
  kind: string;
  name: string | null;
  ofType: TFieldType | null;
};

export type TOfType = {
  kind: string;
  name: string;
};

export type TArgs = {
  name: string;
  description: string;
  type: TFieldType;
  defaultValue: unknown;
};

export type TArgsType = {
  kind: string;
  name: string;
  ofType: { kind: string; name: string };
};

export type TDataScheme = {
  queryType: {
    name: string;
  };
  types: TTypeItem[];
};

export type TRes = {
  queryType: TTypeItem | undefined;
  isList: boolean;
  isRequired: boolean;
};

export type TResArg = {
  argsType: TTypeItem | undefined;
  isList: boolean;
  isRequired: boolean;
  isRequiredTwo: boolean;
};

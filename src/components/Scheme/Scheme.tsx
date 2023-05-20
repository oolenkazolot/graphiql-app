import { useMemo } from 'react';
import Collapse from '../Collapse/Collapse';
import SchemeType from '../SchemeType/SchemeType';
import { TTypeItem, TField, TDataScheme } from '../../types/schemeTypes';

import './Scheme.scss';

const mainClass = 'scheme';

type TScheme = {
  scheme: TDataScheme;
};

function Scheme({ scheme }: TScheme) {
  const queryType: TTypeItem | undefined = useMemo(() => {
    return scheme.types.find((item: TTypeItem) => item.name === scheme.queryType.name);
  }, [scheme]);

  console.log('scheme:', scheme);

  if (!queryType) {
    return null;
  }

  return (
    <div className={mainClass}>
      <Collapse titleText={queryType.name}>
        <>
          {queryType.fields.map((item: TField, index: number) => (
            <SchemeType typeItem={item} types={scheme.types} key={index} />
          ))}
        </>
      </Collapse>
    </div>
  );
}

export default Scheme;

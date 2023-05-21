import './Documentation.scss';
import { getGraphQLSchema } from '../../schema/schema';
import { useEffect, useState } from 'react';
import Scheme from '../Scheme/Scheme';
import { ITreeData } from '../../interfaces/ITreeData';

const mainClass = 'documentation';

type TDocumentation = {
  onActiveDocumentation: boolean;
  setIsShowBtnDoc: (value: boolean) => void;
};

function Documentation({ onActiveDocumentation, setIsShowBtnDoc }: TDocumentation) {
  const [schema, setSchema] = useState<ITreeData | null>(null);

  const updateSchema = (value: ITreeData) => {
    setIsShowBtnDoc(true);
    setSchema(value);
  };

  useEffect(() => {
    getGraphQLSchema(updateSchema);
  });

  const className = onActiveDocumentation ? `${mainClass} ${mainClass}_active` : mainClass;

  return (
    <section className={className}>
      <h2 className={`${mainClass}__title`}>Documentation Explorer</h2>
      {schema && (
        <div className={`${mainClass}__content`}>
          <Scheme scheme={schema.data.__schema} />
        </div>
      )}
    </section>
  );
}

export default Documentation;

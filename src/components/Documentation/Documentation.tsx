import './Documentation.scss';
import { getGraphQLSchema } from '../../schema/schema';
import { useEffect, useState } from 'react';
import Scheme from '../Scheme/Scheme';
import { ITreeData } from '../../interfaces/ITreeData';

const mainClass = 'documentation';

type TDocumentation = {
  onActiveDocumentation: boolean;
  setIsShowBtnDoc: (value: boolean) => void;
  isShowBtnDoc: boolean;
  onClickHandler: () => void;
};

function Documentation({
  onActiveDocumentation,
  setIsShowBtnDoc,
  onClickHandler,
  isShowBtnDoc,
}: TDocumentation) {
  const [schema, setSchema] = useState<ITreeData | null>(null);

  useEffect(() => {
    const updateSchema = (value: ITreeData) => {
      setIsShowBtnDoc(true);
      setSchema(value);
    };
    getGraphQLSchema(updateSchema);
  }, [setIsShowBtnDoc]);

  const className = onActiveDocumentation ? `${mainClass} ${mainClass}_active` : mainClass;

  return (
    <section className={className}>
      <div className={`${mainClass}__wrap`}>
        <h2 className={`${mainClass}__title`}>Documentation Explorer</h2>
        {schema && (
          <div className={`${mainClass}__content`}>
            <Scheme scheme={schema.data.__schema} />
          </div>
        )}
      </div>
      {isShowBtnDoc && (
        <button className={`${mainClass}__btn`} onClick={onClickHandler}>
          DOCS
        </button>
      )}
    </section>
  );
}

export default Documentation;

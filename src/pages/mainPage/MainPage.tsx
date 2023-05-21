import React, { useState, useCallback, useEffect, Suspense } from 'react';
import Editor from '../../components/Editor/Editor';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar/TopBar';
import Response from '../../components/Response/Response';
import VariableEditor from '../../components/VariableEditor/VariableEditor';
import { makeRequest } from '../../Api/Api';
import './MainPage.scss';
const mainClass = 'main-page';

const Documentation = React.lazy(() => import('../../components/Documentation/Documentation'));

function MainPage() {
  const [response, setResponse] = useState('');
  const [query, setQuery] = useState('');
  const [variablesIsOpen, setVariablesIsOpen] = useState(false);
  const [variables, setVariables] = useState('');
  const [isShowBtnDoc, setIsShowBtnDoc] = useState(false);
  const [isOpenDocumentation, setIsOpenDocumentation] = useState(false);

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/');
      }
    }
  }, [loading, navigate, user]);

  const onSubmit = useCallback(async () => {
    const res = await makeRequest(query, variables);
    const str: string = JSON.stringify(res);
    setResponse(str);
  }, [query, variables]);

  const toggleVariables = () => {
    setVariablesIsOpen(!variablesIsOpen);
  };

  const toggleDocumentation = () => {
    setIsOpenDocumentation(!isOpenDocumentation);
  };

  return (
    <>
      <section className={mainClass}>
        <div className={`${mainClass}__wrap`}>
          <div className={`${mainClass}__container`}>
            <TopBar onSubmitHandler={onSubmit} />
            <div className={`${mainClass}__editor-bar`}>
              <div className={`${mainClass}__query-wrap`}>
                <Editor isOpen={variablesIsOpen} onChangeHandler={setQuery} />
                <VariableEditor
                  isOpen={variablesIsOpen}
                  onToggleVariables={toggleVariables}
                  onChangeHandler={setVariables}
                />
              </div>
              <Response response={response} />
            </div>
          </div>
          <Suspense>
            <Documentation
              onActiveDocumentation={isOpenDocumentation}
              setIsShowBtnDoc={setIsShowBtnDoc}
              onClickHandler={toggleDocumentation}
              isShowBtnDoc={isShowBtnDoc}
            />
          </Suspense>
        </div>
      </section>
    </>
  );
}
export default MainPage;

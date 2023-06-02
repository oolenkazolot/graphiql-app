import React, { useState, useCallback, useEffect, Suspense } from 'react';
import Editor from '../../components/MainPage/Editor/Editor';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/MainPage/TopBar/TopBar';
import Response from '../../components/MainPage/Response/Response';
import VariableEditor from '../../components/MainPage/VariableEditor/VariableEditor';
import HeadersEditor from '../../components/MainPage/HeadersEditor/HeadersEditor';
import { makeRequest } from '../../Api/Api';
import { Modal } from '../../components/Modal/Modal';
import { Message } from '../../components/Message/Message';
import './MainPage.scss';
const mainClass = 'main-page';

const Documentation = React.lazy(
  () => import('../../components/MainPage/Documentation/Documentation')
);

function MainPage(): JSX.Element {
  const [response, setResponse] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [variablesIsOpen, setVariablesIsOpen] = useState<boolean>(false);
  const [variables, setVariables] = useState<string>('');
  const [headers, setHeaders] = useState<string>('');
  const [headersIsOpen, setHeadersIsOpen] = useState<boolean>(false);
  const [isShowBtnDoc, setIsShowBtnDoc] = useState<boolean>(false);
  const [isOpenDocumentation, setIsOpenDocumentation] = useState<boolean>(false);
  const [error, setError] = useState<string | boolean>('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState<boolean>();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/');
      }
    }
  }, [loading, navigate, user]);

  const onSubmit = useCallback(async () => {
    const res = await makeRequest(query, variables, headers);

    if (res instanceof Error) {
      setError(res.message);
      setResponse('');
      setIsOpenModal(true);
    } else {
      const responseStr: string = JSON.stringify(res);
      setResponse(responseStr);
      setError(false);
    }
  }, [query, variables, headers]);

  const toggleVariables = () => {
    setVariablesIsOpen(!variablesIsOpen);
  };

  const toggleHeaders = () => {
    setHeadersIsOpen(!headersIsOpen);
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
              <div className={`${mainClass}__response-wrap`}>
                <Response isOpen={headersIsOpen} response={response} />
                <HeadersEditor
                  isOpen={headersIsOpen}
                  onToggleHeaders={toggleHeaders}
                  onChangeHandler={setHeaders}
                />
              </div>
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
          {isOpenModal && (
            <Modal
              classNameIcon="icon-close"
              onCloseModal={() => {
                setIsOpenModal(!isOpenModal);
              }}
              isOpen={isOpenModal}
            >
              <Message title="Error" content={error} />
            </Modal>
          )}
        </div>
      </section>
    </>
  );
}
export default MainPage;

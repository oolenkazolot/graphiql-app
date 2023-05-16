import { useState, useCallback, useEffect } from 'react';
import Editor from '../../components/Editor/Editor';
import Response from '../../components/Response/Response';
import VariableEditor from '../../components/VariableEditor/VariableEditor';
import TopBar from '../../components/TopBar/TopBar';
import { makeRequest } from '../../Api/Api';

import './MainPage.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const mainClass = 'main-page';

function MainPage() {
  const [response, setResponse] = useState('');
  const [query, setQuery] = useState('');
  const [variablesIsOpen, setVariablesIsOpen] = useState(false);
  const [variables, setVariables] = useState('');

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

  return (
    <>
      <section className={mainClass}>
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
      </section>
    </>
  );
}
export default MainPage;

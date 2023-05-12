import './CodeExamples.scss';
import { useState, useEffect } from 'react';

function CodeExamples() {
  const [codeExampleClass, setCodeExampleClass] = useState('code-example__block code-invisible');
  useEffect(() => {
    setCodeExampleClass('code-example__block');
  }, []);
  return (
    <div className="code-example">
      <div className={codeExampleClass} id="firstBlock">
        <h3 className="code-example__title">Describe your data</h3>
        <pre className="code-example__code">
          <span className="red">type:</span>{' '}
          <span>
            Project <span className="grey">{'{'}</span>
          </span>
          {'\n  '}
          <span className="blue">name:</span> <span className="yellow">String</span>
          {'\n  '}
          <span className="blue">tagline:</span> <span className="yellow">String</span>
          {'\n  '}
          <span className="blue">contributors:</span> <span className="grey">[</span>
          <span className="yellow">User</span>
          <span className="grey">]</span>
          {'\n'}
          <span className="grey">{'}'}</span>
        </pre>
      </div>
      <div className={codeExampleClass} id="secondBlock">
        <h3 className="code-example__title">Ask for what you want</h3>
        <pre className="code-example__code">
          <span className="grey">{'{'}</span>
          {'\n  '}
          project<span className="grey">{'('}</span>
          <span className="blue">name</span>
          <span className="grey">:</span>
          <span className="pink">"GraphQL"</span>
          <span className="grey">{')'}</span> <span className="grey">{'{'}</span>
          {'\n    '}
          tagline
          {'\n  '}
          <span className="grey">{'}'}</span>
          {'\n'}
          <span className="grey">{'}'}</span>
        </pre>
      </div>
      <div className={codeExampleClass} id="thirdBlock">
        <h3 className="code-example__title">Get predictable results</h3>
        <pre className="code-example__code">
          <span className="grey">{'{'}</span>
          {'\n  '}
          <span className="blue">"project"</span>
          <span className="grey">:</span> <span className="grey">{'{'}</span>
          {'\n    '}
          <span className="blue">"tagline"</span>
          <span className="grey">:</span>
          <span className="pink"> "A query language for APIs"</span>
          {'\n  '}
          <span className="grey">{'}'}</span>
          {'\n'}
          <span className="grey">{'}'}</span>
        </pre>
      </div>
    </div>
  );
}

export default CodeExamples;

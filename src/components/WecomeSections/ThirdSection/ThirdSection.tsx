import './ThirdSection.scss';

function ThirdSection() {
  return (
    <section className="third-section">
      <div className="third-section__wrapper">
        <div className="third-section__block1">
          <h2 className="third-section__h2">A query language for your API</h2>
          <p className="third-section__text">
            GraphQL is a query language for APIs and a runtime for fulfilling those queries with
            your existing data. GraphQL provides a complete and understandable description of the
            data in your API, gives clients the power to ask for exactly what they need and nothing
            more, makes it easier to evolve APIs over time, and enables powerful developer tools.
          </p>
        </div>
        <div className="third-section__block2">
          <h2 className="third-section__h2">Ask for what you need,get exactly that</h2>
          <p className="third-section__text">
            Send a GraphQL query to your API and get exactly what you need, nothing more and nothing
            less. GraphQL queries always return predictable results. Apps using GraphQL are fast and
            stable because they control the data they get, not the server.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;

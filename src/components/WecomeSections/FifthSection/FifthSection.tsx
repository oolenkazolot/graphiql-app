import './FifthSection.scss';

function FifthSection() {
  return (
    <section className="fifth-section">
      <div className="fifth-section__wrapper">
        <div className="fifth-section__block1">
          <h2 className="fifth-section__h2">Describe what’s possible with a type system</h2>
          <p className="fifth-section__p">
            GraphQL APIs are organized in terms of types and fields, not endpoints. Access the full
            capabilities of your data from a single endpoint. GraphQL uses types to ensure Apps only
            ask for what’s possible and provide clear and helpful errors. Apps can use types to
            avoid writing manual parsing code.
          </p>
        </div>
        <div className="fifth-section__block2">
          <h2 className="fifth-section__h2">Move faster with powerful developer tools</h2>
          <p className="fifth-section__p">
            Know exactly what data you can request from your API without leaving your editor,
            highlight potential issues before sending a query, and take advantage of improved code
            intelligence. GraphQL makes it easy to build powerful tools like GraphiQL by leveraging
            your API’s type system.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FifthSection;

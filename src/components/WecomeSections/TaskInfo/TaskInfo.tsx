import './TaskInfo.scss';

function TaskInfo() {
  return (
    <section className="task-info">
      <div className="task-info__wrapper">
        <h1 className="task-info__h1">
          <a
            href="https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md"
            className="task-info__link"
          >
            GraphiQL Clone
          </a>
        </h1>
        <div className="task-info__block">
          <div className="task-info__RS">RS School</div>
          <div className="task-info__year">2023</div>
        </div>
      </div>
    </section>
  );
}

export default TaskInfo;

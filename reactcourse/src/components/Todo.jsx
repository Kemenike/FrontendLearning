function Todo({title, onTodoDelete}) {
    return (
        <div className="todo">
            <h3>{title}</h3>
            <p>{null}</p>
            <button onClick={onTodoDelete}>Delete</button>
        </div>
    );

}

export default Todo;
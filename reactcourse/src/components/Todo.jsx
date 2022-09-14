function Todo(props) {
    return (
        <div className="todo">
            <h3>{props.title}</h3>
            <p>{props.para}</p>
            <button className="btn btn__delete">Delete</button>
        </div>
    );

}

export default Todo;
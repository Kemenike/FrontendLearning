function Todo(props) {
    return (
        <div className="todo">
            <h3>{props.title}</h3>
            <p>{props.para}</p>
            <button onClick={() => { console.log('Clicked');}}>Delete</button>
        </div>
    );

}

export default Todo;
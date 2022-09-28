function User({ id, name, email, username }) {
    const pixles = '3px';
    return (
        <>
        <div key={id} style={{border: `${pixles} solid black `}}>
            <h3>ID: {id}</h3>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <h3>Username: {username}</h3>
        </div>
        </>
    );
}

export default User;
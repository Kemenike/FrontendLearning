import React from 'react';
import { auth } from './firebase/init'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import './App.css';
import Nav from './firebase/components/Nav';

function App() {
  const [user, setUser] = React.useState({});

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setLoading(false);
      if(user) {
        setUser(user);
      }
    })
  }, [])

  function register() {
    console.log('register');
    createUserWithEmailAndPassword(auth, 'email@email.com', 'test123')
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function login() {
    signInWithEmailAndPassword(auth, 'email@email.com', 'test123')
      .then((data) => {
        console.log(data);
        setUser(data.user);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <div className="App">
      <Nav login={login} logout={logout} register={register} user={user}/>
    </div>
  );
}

export default App;


import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { useState } from 'react';
import './App.css';

import Login from './Components/Login UI/Login';
import FBinit from './Config/FBinit';

function App() {

  const firebase = FBinit;
  const auth = getAuth(firebase);

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logOut = () => {
    signOut(auth);
  }

  if(user) {
    return(
      <div><button onClick={logOut}>{user.email}</button></div>
    );
  } else {
    return (
      <div className="App dark:bg-slate-800">
        <Login fb={firebase} ></Login>
      </div>
    );
  }
}

export default App;


import './App.css';

import Login from './Components/Login UI/Login';
import FBinit from './Config/FBinit';

function App() {

  const firebase = FBinit;

  const userLoggedIn = user => {
    console.log(user);
  }

  return (
    <div className="App dark:bg-slate-800">
      <Login fb={firebase} onUserLoggedIn={userLoggedIn}></Login>
    </div>
  );
}

export default App;

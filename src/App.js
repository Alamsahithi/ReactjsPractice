import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';
//import AuthContext from './store/auth-context';

function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  
// useEffect(()=>{
//   const storedUserLoggedInformation = localStorage.getItem('isLoggedIn')

//   if(storedUserLoggedInformation === '1'){
//     setIsLoggedIn(true)
//   }
// },[])


//   const loginHandler = (email, password) => {
//     // We should of course check email and password
//     // But it's just a dummy/ demo anyways
//     localStorage.setItem('isLoggedIn','1')
//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     setIsLoggedIn(false);
//   };

const ctx=useContext(AuthContext)

  return (
   
    <React.fragment>
      <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home  />}
      </main>
      </React.fragment>
    
  );
}

export default App;

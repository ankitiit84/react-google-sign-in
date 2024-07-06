import './App.css';
import { AuthContextProvider } from "./auth/AuthContext";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Protected from "./components/Protected";
import Account from "./pages/Account";
import Signin from "./pages/Signin";

function App() {
  return (
      <div>
          <AuthContextProvider>
              <Navbar/>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/signin' element={<Signin />} />
                  <Route
                      path='/account'
                      element={
                          <Protected>
                              <Account />
                          </Protected>
                      }
                  />
              </Routes>


              {/*<div className="App">*/}
              {/*    <button onClick={signInWithGoogle}>Sign in With Google</button>*/}
              {/*    <button onClick={signOutWithGoogle}>Sign out</button>*/}
              {/*    <h1>{localStorage.getItem("name")}</h1>*/}
              {/*    <h1>{localStorage.getItem("email")}</h1>*/}
              {/*    <img src={localStorage.getItem("profilePic")} alt={""}/>*/}
              {/*</div>*/}
          </AuthContextProvider>
      </div>
  );
}

export default App;

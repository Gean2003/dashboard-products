import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/AuthLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import AuthProtected from "./protected/AuthProtected"
import Dashboard from "./protected/Dashboard"

function App() {

  return (
    <div className="App bg-[#F5F3F5] font-sans">
      <Routes>
        <Route path='/' element={ <Home /> } />

        <Route element={ <AuthLayout /> } >
          <Route path='/sign-up' element={ <Signup /> }/>
          <Route path='/login' element={ <Login /> }/>
        </Route>

        <Route element = {<AuthProtected />}>
            <Route path='/dashboard' element={ <Dashboard /> } />
        </Route>

        
      </Routes>

    </div>
  )
}

export default App

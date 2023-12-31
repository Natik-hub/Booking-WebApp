import './App.css'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Layout from './Layout';
import Register from './pages/Register';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import AccountPage from './pages/Account';


axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  
  return (
    <UserContextProvider>
      <Routes>
      <Route path='/' element={<Layout/>}>
       <Route index element={<Home />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/> 
      <Route path='/account/:subpage?' element={<AccountPage/>}/>
      <Route path='/account/:subpage/:action' element={<AccountPage/>}/>
      </Route>
    </Routes>
    </UserContextProvider>
    
      
  )
}

export default App

import {Routes, Route} from 'react-router-dom';
import UserNavbar from './Components/Header/UserNavbar';
import Login from './Components/Pages/Login';
import PartnerApiEntry from './Components/Pages/PartnerApiEntry';
import PartnerPortal from './Components/Pages/PartnerPortal';
import Register from './Components/Pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from './Components/Pages/adminPages/Admin';
import Users from './Components/Pages/adminPages/Users';
import UserNotVerified from './Components/Pages/UserNotVerified';
import Products from './Components/Pages/adminPages/Products';
import Mappings from './Components/Pages/adminPages/Mappings';
import Customers from './Components/Pages/adminPages/Customers';
import CustomerEntryForm from './Components/Pages/adminPages/CustomerEntryForm';



function App() {
  return (
    <div className="App">
      <UserNavbar/>
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      />          
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/partnerportal" element={<PartnerPortal/>}/>
            <Route exact path="/partnerapientry" element={<PartnerApiEntry/>}/>
            <Route exact path="/Admin" element={<Admin/>}/>
            <Route exact path="/users" element={<Users/>}/>
            <Route exact path='/UserNotVerified' element={<UserNotVerified/>}/>
            <Route exact path="products" element={<Products/>}/>
            <Route exact path="/mappings" element={<Mappings/>}/>
            <Route exact path="/customers" element={<Customers/>}/>
            <Route exact path="customerentry" element={<CustomerEntryForm/>}/>
          </Routes>
    </div>
  );
}

export default App;

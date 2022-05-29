import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs';
import Dashboard from './pages/Dashboard/Dashboard';
import Reveiw from './pages/Dashboard/AddReveiw';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Login/Register';
import RequireAuth from './pages/Login/RequireAuth';
import NotFound from './pages/NotFound';
import Navbar from './pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import MyPortFolio from './pages/Shared/MyPortFolio';
import AddReview from './pages/Dashboard/AddReveiw';
import Payment from './pages/Dashboard/Payment';
import Reviews from './pages/Reveiw/Reveiws';
import MyOrders from './pages/Dashboard/MyOrders';
import AddProduct from './pages/Dashboard/AddProduct';
import RequireAdmin from './pages/RequireAdmin';
import AllUsers from './pages/Dashboard/AllUsers';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/reveiws' element={<Reviews></Reviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        {/* <Route path='/product/:productId' element={<Purchase></Purchase>}></Route> */}
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/portfolio' element={<MyPortFolio></MyPortFolio>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='reveiw' element={<AddReview></AddReview>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='profile' element={<AllUsers></AllUsers>}></Route>

        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>;
    </div>

  );
}

export default App;

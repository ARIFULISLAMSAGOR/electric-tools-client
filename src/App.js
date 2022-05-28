import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrder from './pages/Dashboard/MyOrder';
import MyProfile from './pages/Dashboard/MyProfile';
import Reveiw from './pages/Dashboard/AddReveiw';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Login/Register';
import RequireAuth from './pages/Login/RequireAuth';
import NotFound from './pages/NotFound';
import Purchase from './pages/Purchase';
import Navbar from './pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import MyPortFolio from './pages/Shared/MyPortFolio';
import AddReview from './pages/Dashboard/AddReveiw';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        {/* <Route path='/product/:productId' element={<Purchase></Purchase>}></Route> */}
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/portfolio' element={<MyPortFolio></MyPortFolio>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='reveiw' element={<AddReview></AddReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>;
    </div>

  );
}

export default App;

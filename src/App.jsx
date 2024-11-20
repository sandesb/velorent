import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import CreateVehicleForm from './components/vendor/CreateVehicleForm';
import DisplayVehicles from './components/vendor/DisplayVehicles';
import Dashboard from './pages/Dashboard';
import Layout from './theme/Layout';
import Vehicles from './pages/customer/Vehicles';
import Profile from './pages/customer/Profile';
import BookTable from './components/customer/BookTable';
import Payment from './pages/Payment';
function App() {
  return (
    <Router>
      <Routes>
        {/* Root Route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/vehicle" element={<CreateVehicleForm />} />
        <Route path="/display" element={<DisplayVehicles />} />

        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="profile" element={<Profile />} />
          <Route path="bookings" element={<BookTable />} />
          <Route path="payment" element={<Payment />} />
        </Route>

        <Route path="/vendor" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="vehicles" element={<CreateVehicleForm />} />
          <Route path="bookings" element={<BookTable/>} />
          <Route path="profile" element={<Profile />} />


       
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

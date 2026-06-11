import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages’ imports (will be created in the next steps)
import Splash from './pages/Splash';
import Auth from './pages/Auth';
import Register from './pages/Register';
import RecoverPassword from './pages/RecoverPassword';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Garage from './pages/Garage';
import AddCar from './pages/AddCar';
import Catalog from './pages/Catalog';
import ServiceCard from './pages/ServiceCard';
import CarSelect from './pages/CarSelect';
import DateSelect from './pages/DateSelect';
import TimeSelect from './pages/TimeSelect';
import Options from './pages/Options';
import Confirm from './pages/Confirm';
import Success from './pages/Success';
import MyAppointments from './pages/MyAppointments';
import AppointmentDetails from './pages/AppointmentDetails';

function App() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-slate-white shadow-2xl relative">
      <Routes>
        {/* Block 1: Auth & Onboarding */}
        <Route path="/" element={<Splash />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover" element={<RecoverPassword />} />

        {/* Block 2: Main & Navigation */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/garage" element={<Garage />} />
        <Route path="/add-car" element={<AddCar />} />

        {/* Block 3: Booking Flow */}
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/service/:id" element={<ServiceCard />} />
        <Route path="/select-car" element={<CarSelect />} />
        <Route path="/select-date" element={<DateSelect />} />
        <Route path="/select-time" element={<TimeSelect />} />
        <Route path="/options" element={<Options />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/success" element={<Success />} />

        {/* Block 4: Management */}
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:id" element={<AppointmentDetails />} />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import AppLayout from './pages/AppLayout';
import ManageProducts from './pages/ManageProducts';
import ManageTransactions from './pages/ManageTransactions';
import { ToastContainer } from 'react-toastify';
import Bar from './pages/Bar';
import Pie from './pages/Pie';
import Line from './pages/Line';
import StopWatch from './pages/StopWatch';
import Toss from './pages/Toss';
import Coupon from './pages/Coupon';
import ProtectedRoutes from './services/ProtectedRoutes';
import Login from './components/admin/user/Login';


const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Products = React.lazy(() => import("./pages/Products"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Transaction = React.lazy(() => import("./pages/Transaction"));

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<ProtectedRoutes />}>
        <Route path='/' element={<AppLayout />}>
          <Route path='admin/dashboard' element={
            <Suspense fallback={<Loader />}>
              <Dashboard />
            </Suspense>
          } />
          <Route path='admin/product' element={
            <Suspense fallback={<Loader />}>
              <Products />
            </Suspense>
          } /> 
          <Route path='admin/product/:id' element={
            <Suspense fallback={<Loader />}>
              <ManageProducts />
            </Suspense>
          } />
          <Route path='admin/customers' element={
            <Suspense fallback={<Loader />}>
              <Customers />
            </Suspense>
          } />
          <Route path='admin/transaction' element={
            <Suspense fallback={<Loader />}>
              <Transaction />
            </Suspense>
          } />
          <Route path='admin/transaction/:id' element={
            <Suspense fallback={<Loader />}>
              <ManageTransactions />
            </Suspense>
          } />


          {/* charts */}
          <Route path='admin/chart/bar' element={
            <Suspense fallback={<Loader />}>
              <Bar />
            </Suspense>
          } />
          <Route path='admin/chart/pie' element={
            <Suspense fallback={<Loader />}>
              <Pie />
            </Suspense>
          } />
          <Route path='admin/chart/line' element={
            <Suspense fallback={<Loader />}>
              <Line />
            </Suspense>
          } />


          {/* apps */}
          <Route path='admin/app/stopwatch' element={
            <Suspense fallback={<Loader />}>
              <StopWatch />
            </Suspense>
          } />
          <Route path='admin/app/coupon' element={
            <Suspense fallback={<Loader />}>
              <Coupon />
            </Suspense>
          } />
          <Route path='admin/app/toss' element={
            <Suspense fallback={<Loader />}>
              <Toss />
            </Suspense>
          } />
        </Route>
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;

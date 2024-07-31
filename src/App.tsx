import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Loader from './components/Loader';
import AppLayout from './pages/AppLayout';

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Transaction = lazy(() => import("./pages/Transaction"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/admin/dashboard' element={
            <Suspense fallback={<Loader />}>
              <Dashboard />
            </Suspense>
          } />
          <Route path='/admin/products' element={
            <Suspense fallback={<Loader />}>
              <Products />
            </Suspense>
          } />
          <Route path='/admin/customers' element={
            <Suspense fallback={<Loader />}>
              <Customers />
            </Suspense>
          } />
          <Route path='/admin/transaction' element={
            <Suspense fallback={<Loader />}>
              <Transaction />
            </Suspense>
          } />
          {/* charts */}
          {/* apps */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

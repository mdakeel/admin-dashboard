import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Loader from './components/Loader';
import Sidebar from './components/commen/Sidebar';

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Transaction = lazy(() => import("./pages/Transaction"));

function App() {
  return (
    <Router>
      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/products' element={<><Sidebar /><Products /></>} />
        <Route path='/admin/customers' element={<Customers />} />
        <Route path='/admin/transaction' element={<Transaction />} />

        {/* charts */}


        {/* apps */}
      </Routes>
      {/* </Suspense> */}
    </Router>
  );
}

export default App;

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import AppLayout from './pages/AppLayout';
import ManageProducts from './pages/ManageProducts';

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Products = React.lazy(() => import("./pages/Products"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Transaction = React.lazy(() => import("./pages/Transaction"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='admin/dashboard' element={
            <Suspense fallback={<Loader />}>
              <Dashboard />
            </Suspense>
          } />
          <Route path='admin/products' element={
            <Suspense fallback={<Loader />}>
              <Products />
            </Suspense>
          } />
          <Route path='admin/products/:id' element={
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
          {/* charts */}
          {/* apps */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
// import { ButtonAppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
// import AppBar from '@mui/material/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

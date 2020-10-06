import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/users/UserListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/Login/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProjectListView from 'src/views/project/ProjectListView';
import RegisterView from 'src/views/auth/Register';
import SettingsView from 'src/views/settings/SettingsView';
import TicketListView from 'src/views/ticket/TicketListView';
import TicketView from 'src/views/ticket/TicketView';
import ProjectView from 'src/views/project/ProjectView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'project', element: <ProjectView /> },
      { path: 'projects', element: <ProjectListView /> },
      { path: 'projects/project', element: <TicketListView /> },
      { path: 'ticket', element: <TicketView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;

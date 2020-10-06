import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import CustomerListView from 'src/views/users/UserListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/Login/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProjectListView from 'src/views/project/ProjectListView';
import RegisterView from 'src/views/auth/Register';
import TicketListView from 'src/views/ticket/TicketListView';
import TicketView from 'src/views/ticket/TicketView';
import ProjectView from 'src/views/project/ProjectView';
import AddProjectView from 'src/views/project/AddProjectView';
import AddTicketView from 'src/views/ticket/AddTicketView';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'addproject', element: <AddProjectView />, exact: true, },
      { path: 'addticket', element: <AddTicketView />, exact: true, },
      { path: 'customers', element: <CustomerListView />, exact: true, },
      { path: 'dashboard', element: <DashboardView />, exact: true, },
      { path: 'project', element: <ProjectView />, exact: true, },
      { path: 'projects', element: <ProjectListView />, exact: true, },
      { path: 'projects/project', element: <TicketListView />, exact: true, },
      { path: 'ticket', element: <TicketView />, exact: true, },
      { path: '*', element: <Navigate to="/404" />, exact: true, }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;

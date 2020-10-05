import { v4 as uuid } from 'uuid';

const getAllUsers = async () => {
  return {
    success: true,
    data: [
      {
        id: 1,
        name: 'Haris',
        email: 'haris@gmail.com',
        role: 'developer'
      },
      {
        id: 1,
        name: 'Haris',
        email: 'haris@gmail.com',
        role: 'developer'
      },
      {
        id: 1,
        name: 'Haris',
        email: 'haris@gmail.com',
        role: 'developer'
      },
      {
        id: 1,
        name: 'Niaomi',
        email: 'naiomi@gmail.com',
        role: 'Project Manager'
      }
    ]
  };
};

const getAllProjects = async () => {
  return {
    success: true,
    data: [
      {
        id: uuid(),
        name: 'Online Doctors',
        description: 'An app for doctors to check patients online',
        bugs: 3,
        fixed: 1,
      },
      {
        id: uuid(),
        name: 'Online Doctors',
        description: 'An app for doctors to check patients online',
        bugs: 3,
        fixed: 1,
      },
      {
        id: uuid(),
        name: 'Online Doctors',
        description: 'An app for doctors to check patients online',
        bugs: 3,
        fixed: 1,
      }
    ]
  };
};

const getCurrentUserTickets = ()=>{
  return {
    success:true,
    data: [
      {
        id: uuid(),
        problem: 'Alert not working',
        description: 'When I click on it it wont open',
        priority: 'low',
        userId: uuid(),
        projectId: uuid(),
        completed: true
      },
      {
        id: uuid(),
        problem: 'Alert not working',
        description: 'When I click on it it wont open',
        priority: 'low',
        userId: uuid(),
        projectId: uuid(),
        completed: false
      },
      {
        id: uuid(),
        problem: 'Alert not working',
        description: 'When I click on it it wont open',
        priority: 'low',
        userId: uuid(),
        projectId: uuid(),
        completed: true
      },
      {
        id: uuid(),
        problem: 'Alert not working',
        description: 'When I click on it it wont open',
        priority: 'low',
        userId: uuid(),
        projectId: uuid(),
        completed: false
      },
      {
        id: uuid(),
        problem: 'Alert not working',
        description: 'When I click on it it wont open',
        priority: 'low',
        userId: uuid(),
        projectId: uuid(),
        completed: false
      },
      {
        id: uuid(),
        problem: 'Test pending',
        description: 'When I click on it it wont open',
        priority: 'low',
        userId: uuid(),
        projectId: uuid(),
        completed: false
      }
    ]
  }
}

export default {
  getAllUsers,
  getAllProjects,
  getCurrentUserTickets
};

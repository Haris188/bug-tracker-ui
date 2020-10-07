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

const getCurrentUserTickets = (projectId) => {
  return {
    success: true,
    data: [
      {
        id: uuid(),
        problem: 'Alert not working',
        description: 'When I click on it it wont open',
        priority: 'low',
        userId: 234,
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
  };
};

const getImagesForTicket = async (id) => {
  console.log(id);
  return {
    success: true,
    data: [
      'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
      'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
      'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
      'https://homepages.cae.wisc.edu/~ece533/images/boat.png'
    ]
  };
};

const getCommentsForTicket = (ticketId) => {
  console.log(ticketId);
  return {
    success: true,
    data: [
      {
        id: 1,
        text: 'Did you try factory pattern?',
        userName: 'Brian'
      },
      {
        id: 1,
        text: 'Did you try factory pattern?',
        userName: 'Brian'
      },
      {
        id: 1,
        text: 'Did you try factory pattern?',
        userName: 'Brian'
      }
    ]
  };
};

const getProjectUsersFromApi = async (projectId)=>{
  return {
    success: true,
    data: [
      {
        id: 234,
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

export default {
  getAllUsers,
  getAllProjects,
  getCurrentUserTickets,
  getImagesForTicket,
  getCommentsForTicket,
  getProjectUsersFromApi
};

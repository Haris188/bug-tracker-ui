import { v4 as uuid } from 'uuid';
import get from '../api/get';
import post from '../api/post';

const getAllUsers = async () => {
  const res = await
  get('/getAllUsers');

  return res;
};

const getAllProjects = async () => {
  const res = await
  get('/getAllProjectsForUser');
  return res;
};

const getCurrentUserTickets = async (projectId) => {
  const res = await
  post('/getCurrentUserTickets', { projectId });
  return res;
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

const getCommentsForTicket = async (ticketId) => {
  const res = await
  post('/getCommentsForTicket', { ticketId });
  return res;
};

const getProjectUsersFromApi = async (projectId) => {
  const res = await
  post('/getUsersForProject', { projectId });
  return res;
};

const getAllBugStats = async () => {
  const res = await get('/getTicketStats');
  return res;
};

const getCurrentUser = async () => {
  const res = await get('/getCurrentUser');
  return res;
};

export default {
  getAllUsers,
  getAllProjects,
  getCurrentUserTickets,
  getImagesForTicket,
  getCommentsForTicket,
  getProjectUsersFromApi,
  getAllBugStats,
  getCurrentUser
};

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

const getImagesForTicket = async (ticketId) => {
  const res = await
  post('/getTicketAttachments', { ticketId });

  if (res.success) {
    const urlArr = res.success
    && res.data.map((i) => (i.url));

    res.data = urlArr;
  }

  return res;
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

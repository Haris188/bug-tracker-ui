import send from '../api/post';

const signin = async (email, password) => {
  const postData = { email, password };
  const res = await send('/login', postData);
  return res;
};

const signup = async (data) => {
  const res = await send('/signup', data);
  return res;
};

const deleteUser = async (id) => {
  const res = await send('/removeUser', {
    deleteeId: id
  });

  return res;
};

const deleteProject = async (id) => {
  console.log(id);
  return {
    success: true,
    data: null
  };
};

const attachImgToTicket = async (formData) => {
  return {
    success: true,
    data: null
  };
};

const addCommentToTicket = (commentData) => {
  // TODO:
  // Change server boundary for comments
  // so that we dont have to provide
  // userid from here. Make passport
  // provide userId to interactor

  return {
    success: true,
    data: null
  };
};

const deleteTicket = (ticketId) => {
  return {
    success: true,
    data: null
  };
};

const addNewProject = async (data) => {
  const res = await
  send('/addProject', data);
  return res;
};

const addNewTicket = async (data) => {
  const res = await
  send('/addTicket', data);
  return res;
};

const assignUserToTicket = async (data) => {
  const res = await 
  send('/setTicketUser', data);
  return res;
};

const completeTicket = async (ticketId) => {
  const res = await
  send('/completeTicket', { ticketId });
  return res;
};

export default {
  signin,
  signup,
  deleteUser,
  deleteProject,
  attachImgToTicket,
  addCommentToTicket,
  deleteTicket,
  addNewProject,
  addNewTicket,
  assignUserToTicket,
  completeTicket
};

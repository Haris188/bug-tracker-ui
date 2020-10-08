import send from './send';

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

const addNewProject = (data) => {
  // TODO: Make sure the api for this
  // endpoing returns the project in data,
  // if
  // saving project is successful

  return {
    success: true,
    data: {
      id: '234',
      name: 'bobi project',
      description: 'A new project'
    }
  };
};

const addNewTicket = (data) => {
  // TODO: Make sure the api for this
  // endpoing returns the ticket in data,
  // if
  // saving ticket is successful

  return {
    success: true,
    data: {
      id: '234',
      problem: 'No page openeing',
      description: 'No description',
      userId: '234',
      projectId: '234',
      completed: false
    }
  };
};

const assignUserToTicket = (data) => {
  return {
    success: true,
    data: null
  };
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
  assignUserToTicket
};

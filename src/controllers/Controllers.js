const signin = async (email, password) => {
  return {
    success: true,
    data: null
  };
};

const signup = async (data) => {
  console.log(data);
  return {
    success: true,
    data: null
  };
};

const deleteUser = async (id) => {
  console.log(id);
  return {
    success: false,
    data: null
  };
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

export default {
  signin,
  signup,
  deleteUser,
  deleteProject,
  attachImgToTicket,
  addCommentToTicket
};

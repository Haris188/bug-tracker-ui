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

export default {
  signin,
  signup,
  deleteUser,
  deleteProject
};

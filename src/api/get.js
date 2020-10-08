import axios from 'axios';

axios.defaults.withCredentials = true;

export default async (path) => {
  const api = process.env.REACT_APP_API_URL;

  try {
    const response = await
    axios.get(`${api}${path}`);

    const { data } = response;

    if (data) {
      return data;
    }

    return {
      success: false,
      data: 'Data from api is null'
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: 'Data from api is null'
    };
  }
};

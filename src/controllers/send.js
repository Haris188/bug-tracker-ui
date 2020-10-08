import axios from 'axios';

axios.defaults.withCredentials = true;

export default async (path, postData) => {
  const api = process.env.REACT_APP_API_URL;

  try {
    const response = await
    axios.post(`${api}${path}`, postData);

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

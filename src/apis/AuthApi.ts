import axios from "axios";

export const fetchUser = async () => {
  const accessToken = localStorage.getItem("Access");
  const response = await axios.get(`${process.env.REACT_APP_SERVER}/users/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(accessToken);
  console.log(response);
  return response.data;
};

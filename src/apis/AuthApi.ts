import axios from 'axios';

export const fetchUser = async () => {
    const accessToken = localStorage.getItem('Access');
    const response = await axios.get(`${process.env.REACT_APP_SERVER}/users/me`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    console.log(accessToken);
    console.log(response);
    return response.data;
};

type user = {
    userId: number;
};

export const deleteUser = async ({ userId }: user) => {
    const response = await axios.delete(`${process.env.REACT_APP_SERVER}/users/${userId}`);
    return response.data;
};

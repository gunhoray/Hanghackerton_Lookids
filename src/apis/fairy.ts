import axios from 'axios';

interface fairyProps {
    name: string;
    type: string;
}
export interface missionProps {
    missionType: string;
}
interface itemProps {
    dew: number;
    magicPowder: number;
    heart: number;
}
export interface itemtypeProps {
    // itemType: 'dew' | 'magicPowder' | 'heart';
    itemType: string;
}
export const createFairy = async ({ name, type }: fairyProps) => {
    const accessToken = localStorage.getItem('Access');
    const config = {
        name,
        type,
    };
    const response = await axios.post(`${process.env.REACT_APP_SERVER}/fairy`, config, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    console.log(response.data);
    return response.data;
};

export const getFairy = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER}/fairy`);
    return response.data;
};

export const clearMission = async (missionType: string) => {
    const accessToken = localStorage.getItem('Access');
    // const response = await axios.patch(
    //     `${process.env.REACT_APP_SERVER}/fairy/clear-mission?missionType=${missionType}`,
    //     {
    //         headers: {
    //             Authorization: `Bearer ${accessToken}`,
    //         },
    //     }
    // );
    const response = await axios.patch(
        `${process.env.REACT_APP_SERVER}/fairy/clear-mission?missionType=${missionType}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );
    console.log(response.data);
    return response.data;
};

//MEMO
// export type MissionType =
//   | 'MON'
//   | 'TUE'
//   | 'WED'
//   | 'THU'
//   | 'FRI'
//   | 'SAT'
//   | 'SUN'
//   | 'share'
//   | 'attendance'
//   | 'purchase'
//   | 'trend'
//   | 'event'
//   | 'new'
//   | 'resell';

export const acquireReward = async ({ dew, magicPowder, heart }: itemProps) => {
    const accessToken = localStorage.getItem("Access");
    const config = {
        dew,
        magicPowder,
        heart,
    };
    const response = await axios.patch(
      `${process.env.REACT_APP_SERVER}/inventory/rewards`,
      config,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
};

export const usingItem = async (itemType: string) => {
    const accessToken = localStorage.getItem('Access');
    const response = await axios.put(
        `${process.env.REACT_APP_SERVER}/inventory/item/${itemType}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );
    return response.data;
};

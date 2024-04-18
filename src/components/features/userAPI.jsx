import axios from "axios";

export const getUserProfile = async () => {
  try {
    const response = await axios.get('user/profile');
    const userData = response.data.user;
    return userData
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get('user/');
    const userData = response.data.users;
    return userData;
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw error;
  }
};

export const updateUserProfile = async (formData) => {
  try {
    const response = await axios.post('/user/profiles', formData);
  } catch (error) {
    console.error('Error updating profile:', error);
  }
};

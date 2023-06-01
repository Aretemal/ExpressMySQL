import axios from 'axios';

const baseInstance = axios.create({
  baseURL: process.env.WSS_APP_BASE_URL,
  headers: {
    check: true,
  },
});
export const messageAPI = {
  sendMessageToRoom({ dialogId, message }) {
    return baseInstance.post('/message/create', { message, dialogId });
  },
};

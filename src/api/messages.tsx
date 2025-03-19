import axios from 'axios';
import { addMessage } from '../redux/store.tsx';

const baseUrl = "http://10.0.10.62:8011";

const apiService = axios.create({
  baseURL: baseUrl,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export const checkStatus = async () => {
  try {
    const response = await apiService.get('/conversation/check_heald_model');
    return response.data;
  } catch (error) {
    console.error('Lỗi khi kiểm tra trạng thái:', error);
    throw error;
  }
}

export const chatNormalConversation = async (
  dispatch: any,
  content: string,
) => {
  try {
    const apiUrl = `${baseUrl}/chat/normal`;

    const response = await apiService.post('/chat/normal', { message: content });

    if (response.data && response.data.rep) {
     
      const botMessage = {
        content: response.data.rep,
        sender_type: 'bot' as const,
      };

      dispatch(addMessage({ message: botMessage }));
      return response.data.rep;
    } else {
      throw new Error('Invalid response format');
    }

  } catch (error) {
    console.error("Error in chatNormalConversation:", error);
    throw error;
  }
};

      
        

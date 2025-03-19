import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export interface Message {
  id?: string;
  content: string;
  sender_type: 'bot' | 'user';
  // timestamp: string;
}

interface ChatState {
  type_chat: string;
  conversation_id: string;
  isLoading: boolean;
  isOpenOptions: boolean;
  normalMessage: Message[];
  userInput: string;
}

const initialState: ChatState = {
  type_chat: 'Chat AI',
  conversation_id: '',
  isLoading: false,
  isOpenOptions: false,
  normalMessage: [],
  userInput: ''
};

export const SET_TYPE_CHAT = 'widget/setTypeChat';
export const SET_CONVERSATION_ID = 'widget/setConversationId';
export const SET_LOADING = 'widget/setLoading';
export const RESET_CHAT = 'widget/resetChat';
export const OPEN_OPTIONS = 'widget/openOptions';
export const SET_NORMAL_MESSAGE = 'widget/setNormalMessage';
export const SET_USER_INPUT = 'widget/setUserInput';

export const setTypeChatAction = (chatType: string) => ({
  type: SET_TYPE_CHAT,
  payload: chatType,
});

export const setConversationIdAction = (id: string) => ({
  type: SET_CONVERSATION_ID,
  payload: id,
});

export const setNormalMessageAction = (messages: Message[]) => ({
  type: SET_NORMAL_MESSAGE,
  payload: messages,
});

export const setLoadingAction = (loading: boolean) => ({
  type: SET_LOADING,
  payload: loading,
});

export const resetChatAction = () => ({
  type: RESET_CHAT,
});

export const openOptionsAction = (openOptions: boolean) => ({
  type: OPEN_OPTIONS,
  payload: openOptions,
});

export const setUserInputAction = (input: string) => ({
  type: SET_USER_INPUT,
  payload: input,
});

const chatSlice = createSlice({
  name: 'widget',
  initialState,
  reducers: {
    setTypeChat: (state, action: PayloadAction<string>) => {
      state.type_chat = action.payload;
    },
    setConversationId: (state, action: PayloadAction<string>) => {
      state.conversation_id = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    openOptionsAction: (state, action: PayloadAction<boolean>) => {
      state.isOpenOptions = action.payload;
    },
    updateNormalMessages: (state, action: PayloadAction<Message[]>) => {
      state.normalMessage = action.payload;
    },
    setUserInput: (state, action: PayloadAction<string>) => {
      state.userInput = action.payload;
    },
    setNormalMessage: (state, action: PayloadAction<Message[]>) => {
      state.normalMessage = action.payload;
    },
    addMessage: (state, action: PayloadAction<{ message: Message }>) => {
      state.normalMessage = [...state.normalMessage, action.payload.message];
    },
    resetChat: (state) => {
      state.type_chat = 'Chat AI';
      state.conversation_id = '';
      state.isLoading = false;
      state.isOpenOptions = false;
      state.normalMessage = [];
      state.userInput = '';
    }
  }
});

export const {
  setTypeChat,
  setConversationId,
  setLoading,
  updateNormalMessages,
  addMessage,
  resetChat,
  setNormalMessage,
  setUserInput
} = chatSlice.actions;

// Async action creator example
export const setTypeChatAsync = (chatType: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch(setTypeChat(chatType));
    } catch (error) {
      console.error('Error setting chat type:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const store = configureStore({
  reducer: {
    chat: chatSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import {GetterTree} from 'vuex';
import {IRootState} from '@/store/types/root-state';
import {IConversationState} from './types/conversation-state';
import {CONVERSATION_GETTERS} from '@/store/conversation/types/conversation-getters';

export const getters: GetterTree<IConversationState, IRootState> = {
    [CONVERSATION_GETTERS.GET_MESSAGES]: 
        (state) => state.messages,
};
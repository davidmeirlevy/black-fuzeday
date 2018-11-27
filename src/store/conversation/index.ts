import {Module} from 'vuex';
import {IRootState} from '@/store/types/root-state';
import {IConversationState} from './types/conversation-state';
import {mutations} from './conversation.mutations';
import {actions} from './conversation.actions';
import {getters} from './conversation.getters';

export const CONVERSATION_MODULE = 'conversation';

export const ConversationModule: Module<IConversationState, IRootState> = {
    namespaced: true,
    state: {
        messages: [] 
    },
    mutations,
    actions,
    getters
};
import {ActionTree} from 'vuex';
import {IConversationState, IMessageItem} from './types/conversation-state';
import {IRootState} from '@/store/types/root-state';
import {CONVERSATION_ACTIONS} from './types/conversation-actions';
import {CONVERSATION_MUTATIONS} from './types/conversation-mutations';

export const actions: ActionTree<IConversationState, IRootState> = {
    [CONVERSATION_ACTIONS.ADD_MESSAGE]: ({commit}, item:IMessageItem) =>
        commit(CONVERSATION_MUTATIONS.ADD_MESSAGE, item)
};

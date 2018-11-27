import {MutationTree} from 'vuex';
import {IConversationState} from './types/conversation-state';
import {CONVERSATION_MUTATIONS} from './types/conversation-mutations';
export const mutations: MutationTree<IConversationState> = {
    [CONVERSATION_MUTATIONS.ADD_MESSAGE]: (state, payload) => {
        if (state.messages.push(payload) > 100)
            state.messages.shift();
    }
};
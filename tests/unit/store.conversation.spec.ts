import { shallowMount } from '@vue/test-utils'
import {ConversationModule, CONVERSATION_MODULE} from '@/store/conversation'
import {CONVERSATION_MUTATIONS} from '@/store/conversation/types//conversation-mutations';
import {Speaker} from '@/store/conversation/types/conversation-state'
describe('store/conversation', () => {
  it('should have CONVERSATION_MODULE: conversation',
      () => expect(CONVERSATION_MODULE).toEqual('conversation')
  );

  describe('when dispatched a valid ADD_MESSAGE event', () => {
    const {
      mutations: {
        [CONVERSATION_MUTATIONS.ADD_MESSAGE]: addMessage
      } = {}
    } = ConversationModule;
  
    describe('and there are less than 100 messages in the history', () => {
      it('shold add the message to the end', () => {
        const state = {messages: [] }
        const message = {speaker: Speaker.user, message: "sports, please"};
        addMessage(state, message);
        expect(state.messages).toHaveLength(1)
        expect(state.messages[0]).toEqual(message);
      })
    })

    describe.skip('and there are less exactly 100 messages in the history', () => {
      const state = {
        messages: Array.from(Array(100)).map((_,ix) => ({
            speaker: Speaker.user,
            msg:     'msg ' + ix
        }))
      }
      const message = {
        speaker: Speaker.user,
        msg: 'sports, please'
      };

      beforeAll(() => {
        addMessage(state, message);
      });

      it('shold add the message to the end', () => {
        expect(state.messages[99]).toEqual(message);
      })
      it('should drop the oldest message', () => {
        expect(state.messages).toHaveLength(100)
      })
    })
  })
})

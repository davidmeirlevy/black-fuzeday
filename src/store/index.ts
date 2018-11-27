import Vue from 'vue'
import Vuex from 'vuex'
import {IRootState} from '@/store/types/root-state';
import {CartModule, CART_MODULE} from '@/store/cart';
import { SellerModule, SELLER_MODULE } from '@/store/seller';
import {CONVERSATION_MODULE, ConversationModule} from "@/store/conversation";


Vue.use(Vuex);

const state: IRootState = {
    products: [],
    category: '',
};

// hint: try to separate your state into modules.
export default new Vuex.Store({
    state,
    modules: {
        [CART_MODULE]: CartModule,
        [SELLER_MODULE]: SellerModule,
        [CONVERSATION_MODULE]: ConversationModule,
    }
});

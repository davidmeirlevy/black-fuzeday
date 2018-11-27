import {MutationTree} from 'vuex';
import {ICartState} from './types/cart-state';
import { CART_MUTATIONS } from '@/store/cart/types/cart-mutations';

export const mutations: MutationTree<ICartState> = {
    [CART_MUTATIONS.SET_CART_ITEM](state, {id, quantity}) {
        state.products[id] = state.products[id] || 0;
        state.products[id]+= (quantity || 1);
        if(state.products[id] == 0) {
            delete state.products[id];
        }
    }
};
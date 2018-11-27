import {ActionTree} from 'vuex';
import {ICartState} from './types/cart-state';
import {IRootState} from '@/store/types/root-state';
import { CART_ACTIONS } from '@/store/cart/types/cart-actions';
import { CART_MUTATIONS } from '@/store/cart/types/cart-mutations';

export const actions: ActionTree<ICartState, IRootState> = {
    [CART_ACTIONS.SET_CART_ITEM]: ({commit}, {id, quantity}) => {
        commit(CART_MUTATIONS.SET_CART_ITEM, {id, quantity: quantity || 1});
    }
};
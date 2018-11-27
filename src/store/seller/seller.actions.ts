import {ActionTree} from 'vuex';
import {IRootState} from '@/store/types/root-state';
import {SELLER_ACTIONS} from './types/seller-actions';
import { ISellerState, Category } from '@/store/seller/types/seller-state';
import { SELLER_MUTATIONS } from '@/store/seller/types/seller-mutations';
import {shopify} from '@/services/shopify-client';

export const actions: ActionTree<ISellerState, IRootState> = {
    [SELLER_ACTIONS.SET_CATEGORY]: ({commit}, item: Category) =>
        commit(SELLER_MUTATIONS.SET_CATEGORY, item),


    [SELLER_ACTIONS.FETCH_PRODUCTS]: ({commit}) => {
        return shopify.product
                .fetchAll()
                .then(products => (commit(SELLER_MUTATIONS.FETCH_PRODUCTS, products)));
    }

};

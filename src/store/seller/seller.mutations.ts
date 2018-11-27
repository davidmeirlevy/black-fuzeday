import {MutationTree} from 'vuex';

import {ISellerState, Category} from '@/store/seller/types/seller-state';
import { SELLER_MUTATIONS } from '@/store/seller/types/seller-mutations';


export const mutations: MutationTree<ISellerState> = {
    [SELLER_MUTATIONS.SET_CATEGORY]: (state, category: Category) => {
        state.currentCategory = category;
    },

    [SELLER_MUTATIONS.FETCH_PRODUCTS]: (state, products:Array<ShopifyBuy.Product>) => {
        state.products = products;
    }
};
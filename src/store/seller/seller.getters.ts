import { GetterTree } from 'vuex';
import { ISellerState } from '@/store/seller/types/seller-state';
import { IRootState } from '@/store/types/root-state';
import {SELLER_GETTERS} from "@/store/seller/types/seller-getters";


export const getters: GetterTree<ISellerState, IRootState> = {
    [SELLER_GETTERS.GET_FILTERED_PRODUCTS]: state => state.products
        .filter(product => {
            if(state.currentCategory) {
                return product.description.match(new RegExp(state.currentCategory.toLowerCase(), 'i'))
            }
            return false;
        }),

    [SELLER_GETTERS.FETCH_PRODUCTS]: state => state.products
};

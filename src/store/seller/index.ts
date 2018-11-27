import {Module} from 'vuex';
import {IRootState} from '@/store/types/root-state';
import {ISellerState, Category} from './types/seller-state';
import {mutations} from './seller.mutations';
import {actions} from './seller.actions';
import {getters} from './seller.getters';

export const SELLER_MODULE = 'seller';

export const SellerModule: Module<ISellerState, IRootState> = {
    namespaced: true,
    state: {
        products: [],
        currentCategory: null
    },
    mutations,
    actions,
    getters
};
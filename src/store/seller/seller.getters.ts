import { GetterTree } from 'vuex';
import { ISellerState } from '@/store/seller/types/seller-state';
import { IRootState } from '@/store/types/root-state';


export const getters: GetterTree<ISellerState, IRootState> = {
    filteredProducts: state => state.products
        .filter(product => {
            if(state.currentCategory) {
                return product.title.match(new RegExp(state.currentCategory.toLowerCase(), 'i'))
            }
            return false;
        }),

    fetchProducts: state => state.products
};
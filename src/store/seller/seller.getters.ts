import { GetterTree } from 'vuex';
import { ISellerState, Category } from '@/store/seller/types/seller-state';
import { IRootState } from '@/store/types/root-state';

const texts = {
    [Category.music]: ['headphone', 'earphone'],[Category.games]: ['joystick', 'fortnite']
}

export const getters: GetterTree<ISellerState, IRootState> = {
    filteredProducts: state => state.products
        .filter(product => {
            if(state.currentCategory) {
                var res = false;
                for(var name in texts[state.currentCategory]){
                    res = new RegExp(state.currentCategory.toLowerCase(), 'i').test(name);
                }
                return res;
            }
            return false;
        }),

    fetchProducts: state => state.products
};
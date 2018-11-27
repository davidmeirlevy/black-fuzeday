import { GetterTree } from 'vuex';
import { ISellerState, Category } from '@/store/seller/types/seller-state';
import { IRootState } from '@/store/types/root-state';
import {SELLER_GETTERS} from "@/store/seller/types/seller-getters";

const texts = {
    [Category.music]: ['headphone', 'earphone'],[Category.games]: ['joystick', 'fortnite']
}

export const getters: GetterTree<ISellerState, IRootState> = {
    [SELLER_GETTERS.GET_FILTERED_PRODUCTS]: state => state.products
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

    [SELLER_GETTERS.FETCH_PRODUCTS]: state => state.products
};

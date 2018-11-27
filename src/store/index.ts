import Vue from 'vue'
import Vuex from 'vuex'
import {IRootState} from '@/store/types/root-state';
import {CartModule, CART_MODULE} from '@/store/cart';
import {shopify} from '@/services/shopify-client';
import { SellerModule, SELLER_MODULE } from '@/store/seller';

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
        [SELLER_MODULE]: SellerModule
    }
});

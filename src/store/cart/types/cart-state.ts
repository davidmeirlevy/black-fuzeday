import { Dictionary } from 'vuex';

export interface ICartState {    products: Dictionary<number>,
    checkoutId: string
}


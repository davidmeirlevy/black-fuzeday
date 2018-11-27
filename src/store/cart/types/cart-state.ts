import { Dictionary } from 'vuex';

export interface ICartState {
    products: Dictionary<string>,
    checkoutId: string
}


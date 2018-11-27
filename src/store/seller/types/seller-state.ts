
export interface ISellerState{
    products: Array<ShopifyBuy.Product>,
    currentCategory: Category | null
}

export enum Category {
    music = 'music',
    games = 'games'
}

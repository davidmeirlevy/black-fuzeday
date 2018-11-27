export interface IConversationState {
    messages: Array<IMessageItem>,
}

export interface IMessageItem {
    speaker: Speaker,
    payload: any
}

export enum Speaker {
    user = 'user',
    products = 'products',
    product = 'product',
    shopBot = 'shopBot'
}

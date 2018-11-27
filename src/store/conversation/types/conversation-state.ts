export interface IConversationState {
    messages: Array<IMessageItem>,
}

export interface IMessageItem {
    speaker: Speaker,
    type?: MessageType,
    payload: any
}

export enum Speaker {
    user = 'User',
    bot = 'Bot'
}

export enum MessageType {
    products = 'Products',
    product = 'Product',
    cart = 'Cart',
    checkout = 'Checkout',
    message = 'Message'
}

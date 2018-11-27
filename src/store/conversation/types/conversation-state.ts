export interface IConversationState {
    messages: Array<IMessageItem>,
}

export interface IMessageItem {
    speaker: Speaker,
    msg: String
}

export enum Speaker {
    user = 'user',
    shopBot = 'shopBot'
}
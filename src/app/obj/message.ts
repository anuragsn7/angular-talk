import { MessageType } from './message-type.enum'

export class Message {
    sender: string;
    recipient: string;
    content: string;
    type: MessageType
}

import { randomUUID } from 'node:crypto';
import { Replace } from "@helpers/Replace";
import { Content } from "./content";

export interface NotificationProps{
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
    canceledAt?: Date | null;
}

export class Notification{
    private _id: string;
    private props: NotificationProps;

    public constructor(props: Replace<NotificationProps, { createdAt?: Date }>){
        this._id = randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date()
        };
    }

    public get id(): string{
        return this._id;
    }

    public set recipientId(recipientId: string){
        this.props.recipientId = recipientId;
    }

    public get recipientId(): string{
        return this.props.recipientId;
    }

    public set content(content: Content){
        this.props.content = content;
    }

    public get content(): Content{
        return this.props.content;
    }

    public set category(category: string){
        this.props.category = category;
    }

    public get category(): string{
        return this.props.category;
    }

    public Read(){
        this.props.readAt = new Date();
    }

    public Unread(){
        this.props.readAt = null;
    }

    public get readAt(): Date | null | undefined{
        return this.props.readAt;
    }

    public get cretedAt(): Date{
        return this.props.createdAt;
    }

    public get canceledAt(): Date | null | undefined{
        return this.props.canceledAt;
    }

    public cancel(): void{
        this.props.canceledAt = new Date();
    }
}
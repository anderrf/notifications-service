import { Notification } from '@application/entities/notification'

export abstract class NotificationsRepository{

    public abstract create(notification: Notification): Promise<void>;

    public abstract findById(notificationId: string): Promise<Notification | null>;

    public abstract save(notification: Notification): Promise<void>;

    public abstract countManyByRecipientId(recipientId: string): Promise<number>;

    public abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;

}
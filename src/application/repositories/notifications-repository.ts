import { Notification } from '@application/entities/notification'

export abstract class NotificationsRepository{
    public abstract create(notification: Notification): Promise<void>
}
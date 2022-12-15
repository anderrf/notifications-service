import { Notification } from '../entities/notification'

export abstract class NotificationsRepository{
    public abstract create(notification: Notification): Promise<void>
}
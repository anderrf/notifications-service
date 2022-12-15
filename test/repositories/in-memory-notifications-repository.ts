import { NotificationsRepository } from "@application/repositories/notifications-repository";
import { Notification } from "@application/entities/notification";

export class InMemoryNotificationsRepository implements NotificationsRepository{
    public notifications: Notification[] = [];
    
    public async findById(notificationId: string): Promise<Notification | null> {
        const notification = this.notifications.find(
            (item) => (item.id === notificationId)
        );
        if(!notification){
            return null;
        }
        return notification;
     }

    public async countManyByRecipientId(recipientId: string): Promise<number> {
        return this.notifications.filter(
            (notification) => notification.recipientId === recipientId
        ).length;
    }

    public async create(notification: Notification): Promise<void> {
        this.notifications.push(notification);
    }

    public async save(notification: Notification): Promise<void> {
        const notificationIndex = this.notifications.findIndex(
            (item) => item.id === notification.id
        );
        if(notificationIndex >= 0){
            this.notifications[notificationIndex] = notification;
        }
    }

}
import { NotificationsRepository } from "./../../src/application/repositories/notifications-repository";
import { Notification } from "./../../src/application/entities/notification";

export class InMemoryNotificationsRepository implements NotificationsRepository{
    public notifications: Notification[] = [];

    public async create(notification: Notification): Promise<void> {
        this.notifications.push(notification);
    }
}
import { Notification } from "@application/entities/notification";

export class NotificationViewModel{

    public static toHTTP(notification: Notification){
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.category,
            recipientId: notification.recipientId,
            createdAt: notification.createdAt,
            readAt: notification.readAt,
            canceledAt: notification.canceledAt
        }
    }

}
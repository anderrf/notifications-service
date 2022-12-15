import { Notification } from "@application/entities/notification";

export class PrismaNotificationMapper{

    public static toPrisma(notification: Notification){
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.cretedAt
        }
    }
    
}
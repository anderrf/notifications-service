import { SendNotification } from './send-notification';
import { Notification } from './../entities/notification';

const notifications: Notification[] = [];

const notificationsRepository = {
    async create(notification: Notification){
        notifications.push(notification);
    }
};

describe('Send notification', () => {

    it('should be able to send a notification', async () => {
        const sendNotification = new SendNotification(notificationsRepository);
        const { notification } = await sendNotification.execute({
            content: 'Notificação',
            category: 'social',
            recipientId: 'example-recipient-id'
        });
        console.log(notifications);
        expect(notifications).toHaveLength(1);
    });

});
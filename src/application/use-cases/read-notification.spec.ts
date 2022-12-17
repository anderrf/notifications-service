import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { ReadNotification } from './Read-notification';
import { NotificationNotFound } from './errors/notification-not-found';

const notificationsRepository = new InMemoryNotificationsRepository();

describe('Read notification', () => {
    
    it('should be able to read a notification', async () => {
        const readNotification = new ReadNotification(notificationsRepository);
        const notification = makeNotification();
        await notificationsRepository.create(notification);
        await readNotification.execute({
            notificationId: notification.id
        });
        expect(notificationsRepository.notifications[0].readAt).toEqual(expect.any(Date));
    });

    it('should not be able to read a non existing notification', async () => {
        const readNotification = new ReadNotification(notificationsRepository);
        await 
        expect(() => {
            return readNotification.execute({
                notificationId: 'fake-notification-id'
            });
        }).rejects.toThrow(NotificationNotFound);
    });

});
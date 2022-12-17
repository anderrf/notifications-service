import { GetRecipientNotifications } from './get-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

const notificationsRepository = new InMemoryNotificationsRepository();

describe('Get recipent notifications', () => {
    
    it('should be able to get recipient notifications', async () => {
        const getRecipientNotifications = new GetRecipientNotifications(notificationsRepository);
        
        await notificationsRepository.create(makeNotification({
            recipientId: 'example-recipient-id-1'
        }));
        await notificationsRepository.create(makeNotification({
            recipientId: 'example-recipient-id-1'
        }));
        await notificationsRepository.create(makeNotification({
            recipientId: 'example-recipient-id-2'
        }));
        const { notifications } = await getRecipientNotifications.execute({
            recipientId: 'example-recipient-id-1'
        });
        expect(notifications).toHaveLength(2);
        expect(notifications).toEqual(expect.arrayContaining([
            expect.objectContaining({recipientId: 'example-recipient-id-1'}),
            expect.objectContaining({recipientId: 'example-recipient-id-1'})
        ]));
    });

});
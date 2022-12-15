import { NotificationProps } from './../../src/application/entities/notification';
import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}){
    return new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade!'),
        recipientId: 'example-recipient-id',
        ...override
    });
}
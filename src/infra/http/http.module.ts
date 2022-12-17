import { UnreadNotification } from './../../application/use-cases/unread-notification';
import { ReadNotification } from './../../application/use-cases/read-notification';
import { GetRecipientNotifications } from './../../application/use-cases/get-recipient-notifications';
import { CountRecipientNotifications } from './../../application/use-cases/count-recipient-notifications';
import { CancelNotification } from './../../application/use-cases/cancel-notification';
import { DataBaseModule } from './../database/database.module';
import { Module } from "@nestjs/common";
import { SendNotification } from "@application/use-cases/send-notification";
import { NotificationsController } from "./controllers/notifications.controller";

@Module({
    imports: [DataBaseModule],
    controllers: [
        NotificationsController
    ],
    providers: [
        SendNotification,
        CancelNotification,
        CountRecipientNotifications,
        GetRecipientNotifications,
        ReadNotification,
        UnreadNotification
    ]
})
export class HttpModule{}
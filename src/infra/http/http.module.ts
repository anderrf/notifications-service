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
        SendNotification
    ]
})
export class HttpModule{}
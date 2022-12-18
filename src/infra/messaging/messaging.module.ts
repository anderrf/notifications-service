import { DataBaseModule } from './../database/database.module';
import { SendNotification } from './../../application/use-cases/send-notification';
import { KafkaConsumerService } from './Kafka/kafka-consumer.service';
import { NotificationsController } from './Kafka/controllers/notifications.controller';
import { Module } from "@nestjs/common";

@Module({
    imports: [
        DataBaseModule
    ],
    providers: [
        KafkaConsumerService,
        SendNotification
    ],
    controllers: [
        NotificationsController
    ]
})
export class MessagingModule{

}
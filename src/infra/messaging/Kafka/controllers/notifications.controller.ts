import { SendNotification } from "@application/use-cases/send-notification";
import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";

interface SendNotificationPayload{
    content: string;
    category: string;
    recipientId: string;
}

@Controller()
export class NotificationsController{

    public constructor(private sendNotification: SendNotification){}

    @EventPattern('notifications.send-notification')
    public async handleSendNotification(
        @Payload() { content, category, recipientId }: SendNotificationPayload
    ): Promise<void>{
        await this.sendNotification.execute({
            content,
            category,
            recipientId
        });
    }

}
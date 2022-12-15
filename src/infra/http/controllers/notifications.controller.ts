import { NotificationViewModel } from './../view-models/notification-view-model';
import { SendNotification } from '@application/use-cases/send-notification';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller("Notifications")
export class NotificationsController {

  public constructor(private sendNotification: SendNotification){}

  @Post()
  async createNotification(@Body() createNotificationBody: CreateNotificationBody){
    const { recipientId, content, category } = createNotificationBody;
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category
    });
    return { 
      notification: NotificationViewModel.toHTTP(notification)
    };
  }
}

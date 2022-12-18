import { GetRecipientNotifications } from './../../../application/use-cases/get-recipient-notifications';
import { CountRecipientNotifications } from './../../../application/use-cases/count-recipient-notifications';
import { ReadNotification } from './../../../application/use-cases/read-notification';
import { CancelNotification } from './../../../application/use-cases/cancel-notification';
import { NotificationViewModel } from './../view-models/notification-view-model';
import { SendNotification } from '@application/use-cases/send-notification';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { UnreadNotification } from '@application/use-cases/unread-notification';

@Controller("Notifications")
export class NotificationsController {

  public constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countRecipientNotifications: CountRecipientNotifications,
    private getRecipientNotifications: GetRecipientNotifications


  ){}

  @Get('from/:recipientId')
  public async getFromRecipient(
    @Param('recipientId') recipientId: string
  ){
    const { notifications } = await this.getRecipientNotifications.execute({
      recipientId
    });
    return {
      notifications: notifications.map(NotificationViewModel.toHTTP)
    }
  }

  @Get('count/from/:recipientId')
  public async countFromRecipient(
    @Param('recipientId') recipientId: string
  ) : Promise<{count: number}> {
    const { count } = await this.countRecipientNotifications.execute({
      recipientId
    });
    return {
      count
    }
  }

  @Patch(':id/read')
  public async read(
    @Param('id') id: string
  ) : Promise<void> {
    await this.readNotification.execute({
      notificationId: id
    });
  }

  @Patch(':id/unread')
  public async unread(
    @Param('id') id: string
  ) : Promise<void> {
    await this.unreadNotification.execute({
      notificationId: id
    });
  }

  @Post()
  public async createNotification(@Body() createNotificationBody: CreateNotificationBody){
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
  
  @Patch(':id/cancel')
  public async cancel(
    @Param('id') id: string
  ) : Promise<void> {
    await this.cancelNotification.execute({
      notificationId: id
    }); 
  }
}

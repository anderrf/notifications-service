import { PrismaService } from './prisma.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller("Notifications")
export class AppController {
  constructor(private prismaService: PrismaService) {}

  @Get()
  listNotifications() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async createNotification(@Body() createNotificationBody: CreateNotificationBody){
    const {recipientId, content, category} = createNotificationBody;
    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId
      }
    });
  }
}

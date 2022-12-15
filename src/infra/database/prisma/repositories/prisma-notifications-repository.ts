import { PrismaNotificationMapper } from './../mappers/prisma-notification-mapper';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository{
    constructor(private prismaService: PrismaService){}

    public async create(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification);
        await this.prismaService.notification.create({
            data: raw
        });
    }

}
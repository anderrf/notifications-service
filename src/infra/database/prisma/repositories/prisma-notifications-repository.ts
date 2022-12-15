import { PrismaNotificationMapper } from './../mappers/prisma-notification-mapper';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository{
    constructor(private prismaService: PrismaService){}
    
    public async findById(notificationId: string): Promise<Notification | null> {
        throw new Error('Method not implemented.');
    }
    
    public countManyByRecipientId(recipientId: string): Promise<number> {
        throw new Error('Method not implemented.');
    }
    
    public async create(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification);
        await this.prismaService.notification.create({
            data: raw
        });
    }

    public async save(notification: Notification): Promise<void> {
        throw new Error('Method not implemented.');
    }

}
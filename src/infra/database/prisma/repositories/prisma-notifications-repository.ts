import { PrismaNotificationMapper } from './../mappers/prisma-notification-mapper';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository{
    constructor(private prismaService: PrismaService){}
    
    public async findById(notificationId: string): Promise<Notification | null> {
        const notification = await this.prismaService.notification.findUnique({
            where: {
                id: notificationId
            }
        });
        if(!notification){
            return null;
        }
        return PrismaNotificationMapper.toDomain(notification);
    }
    
    public async countManyByRecipientId(recipientId: string): Promise<number> {
        const count = await this.prismaService.notification.count({
            where: {
                recipientId
            }
        });
        return count;
    }
    
    public async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        const notifications = await this.prismaService.notification.findMany({
            where: {
                recipientId
            }
        });
        return notifications.map(PrismaNotificationMapper.toDomain);
    }
    
    public async create(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification);
        await this.prismaService.notification.create({
            data: raw
        });
    }

    public async save(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification);
        await this.prismaService.notification.update({
            where: {
                id: raw.id
            },
            data: raw
        });
    }

}
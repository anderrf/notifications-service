import { Injectable } from "@nestjs/common";

@Injectable()
export abstract class MailService{

    public abstract sendEmail(): string;

}
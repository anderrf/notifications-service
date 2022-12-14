import { Injectable } from "@nestjs/common";
import { MailService } from "./mail.service";

@Injectable()
export class SMTPMailService implements MailService{

    public sendEmail(): string{
        return "E-mail enviado por SMTP";
    }

}
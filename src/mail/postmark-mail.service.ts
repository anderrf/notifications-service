import { Injectable } from "@nestjs/common";
import { MailService } from "./mail.service";

@Injectable()
export class PostmarkMailService implements MailService{

    public sendEmail(): string{
        return "E-mail enviado por Postmark";
    }

}
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(private _messageService: MessageService) {}

    public displayNotification(type: string, title: string, details: string) {
        this._messageService.add({
            severity: type,
            summary: title,
            detail: details
        })
    }
}
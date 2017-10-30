import {FormGroup} from "@angular/forms";
import {MessageService} from "primeng/components/common/messageservice";
import {environment} from "../../environments/environment";
import {Constants} from "./constants";

export class CommonComponent {

  public imageUrl: string = environment.baseUrl + Constants.IMAGE_DOWNLOAD_URL;

  constructor(protected messageService: MessageService) {}

  public handleException(message) {
    this.messageService.add({severity:'error', summary:'Error', detail: message});
  }

  public handleFormErrors(form: FormGroup) {
    console.log(form);
  }

}

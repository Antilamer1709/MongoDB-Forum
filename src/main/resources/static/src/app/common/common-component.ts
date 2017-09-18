import {FormGroup} from "@angular/forms";
import {MessageService} from "primeng/components/common/messageservice";

export class CommonComponent {

  constructor(protected messageService: MessageService) {}

  public handleException(message) {
    this.messageService.add({severity:'error', summary:'Error', detail: message});
  }

  public handleFormErrors(form: FormGroup) {
    console.log(form);
  }

}

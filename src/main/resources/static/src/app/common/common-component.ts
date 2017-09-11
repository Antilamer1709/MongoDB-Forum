import {FormGroup} from "@angular/forms";

export class CommonComponent {

  public handleException(exception) {
    console.log(exception);
  }

  public handleFormErrors(form: FormGroup) {
    console.log(form);
  }

}

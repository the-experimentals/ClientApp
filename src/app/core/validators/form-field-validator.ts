import { FormGroup } from '@angular/forms';

export function ValidateOnValueChange(form: FormGroup, formErrors: any, validationMessages: any, data?: any){
    if (!form) { return; }
    // const form = this.signInForm;
    for (const field in formErrors) {
      if (formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        formErrors[field] = '';
        const control = form.get(field);
        if (control && (control.dirty || !control.valid)) {
          const messages = validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
}
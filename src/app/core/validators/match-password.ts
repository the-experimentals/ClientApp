import { UntypedFormGroup } from '@angular/forms';

// custom validator to check that password and confirm password match.
export function MatchPassword(newPasswordControl:string, confirmPasswordControl:string)
{
    return (formGroup: UntypedFormGroup) => {
        let password = formGroup.get(newPasswordControl);
        let confirmPassword = formGroup.get(confirmPasswordControl);

        if(password != null && confirmPassword != null){
            // return if another validator has already found an error on the confirm password control.
            if(confirmPassword.errors && !confirmPassword.errors.MatchPassword)
            return;

            // set error on confirm password if validation fails.
            if(password.value !== confirmPassword.value)
                confirmPassword.setErrors({MatchPassword: true})
            else
            confirmPassword.setErrors(null);
        }
    }
}
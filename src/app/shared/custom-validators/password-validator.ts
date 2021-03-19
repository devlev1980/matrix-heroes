import { AbstractControl } from '@angular/forms';

export function passwordValidator(
  control: AbstractControl
): { isError: true } | null {
  const regex = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
  );
  if ((control && control.value !== null) || control.value !== undefined) {
    if (!regex.test(control.value)) {
      return {
        isError: true,
      };
    }
  }
  return null;
}

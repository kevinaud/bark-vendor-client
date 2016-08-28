import { FieldBase } from './base';

export class PasswordField extends FieldBase<string> {
  controlType = 'password';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = 'password';
  }
}
import { IInputText } from './InputText';

const inputText: IInputText = {
  id: 'name',
  title: 'Name',
  name: 'name',
  type: 'text',
  placeholder: 'Please, type your name',
  autoComplete: 'off',
  required: true,
  error: {
    message: 'campo obrigatório.'
  }
};

export const mockInputTextProps = {
  inputText,
};

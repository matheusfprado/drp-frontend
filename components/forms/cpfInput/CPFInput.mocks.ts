import { ICPFInput } from './CPFInput';

const cpfInput: ICPFInput = {
  id: 'document_number',
  title: 'CPF Document',
  name: 'document_number',
  register: undefined,
  error: {
    message: 'campo obrigatório.'
  }
};

export const mockCPFInputProps = {
  cpfInput,
};

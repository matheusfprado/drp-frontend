import { ICNPJInput } from './CNPJInput';

const cnpjInput: ICNPJInput = {
  id: 'document_number',
  title: 'CNPJ Document',
  name: 'document_number',
  register: undefined,
  error: {
    message: 'campo obrigatório.'
  }
};

export const mockCNPJInputProps = {
  cnpjInput,
};

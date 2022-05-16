import { ICardNumber } from './CardNumber';

const cardNumber: ICardNumber = {
  id: 'creditCardNumber',
  title: 'Credit Card Number',
  name: 'cardNumber',
  register: undefined,
  error: {
    message: 'campo obrigatório.'
  }
};

export const mockCardNumberProps = {
  cardNumber,
};

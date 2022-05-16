import * as yup from 'yup';


let cnpjSchema = yup.string()
  .required('cnpj é obrigatório.')
  .matches(
    /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/,
    'documento inválido.'
  )
  .trim('não pode haver espaços.')
  .defined();

export default cnpjSchema

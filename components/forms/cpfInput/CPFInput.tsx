// import styles from './InputText.module.css';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
export interface ICPFInput {
  id?: string;
  title: string;
  name: string;
  register: any;
  error?: {
    message: string;
  };
}
const normalizeCPFNumber = (value) => {
  return value.replace(/\D+/g, "")
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1').substr(0, 14) || ""
}

const CPFInput: React.FC<ICPFInput> = ({ id, title, name, register, error }, props) => {
  return (<div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          {...props}
          id={id}
          name={name}
          type="tel"
          inputMode="numeric"
          autoComplete="cc-number"
          placeholder="000.000.000-00"
          required
          onChange={(event) => {
            const {value} = event.target
            event.target.value = normalizeCPFNumber(value)
          }}
          ref={register}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        />
         <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
        </div>
        </div>
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {error?.message}
        </p>
    </div>);
};

export default CPFInput;

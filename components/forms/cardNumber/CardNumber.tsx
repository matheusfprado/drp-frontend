// import styles from './InputText.module.css';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
export interface ICardNumber {
  id?: string;
  title: string;
  name: string;
  register: any;
  error?: {
    message: string;
  };
}
const normalizeCardNumber = (value) => {
  return value.replace(/\D+/g, "").match(/.{1,4}/g)?.join(" ").substr(0, 19) || ""
}

const CardNumber: React.FC<ICardNumber> = ({ id, title, name, register, error }, props) => {
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
          placeholder="0000 0000 0000 0000"
          required
          onChange={(event) => {
            const {value} = event.target
            event.target.value = normalizeCardNumber(value)
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

export default CardNumber;

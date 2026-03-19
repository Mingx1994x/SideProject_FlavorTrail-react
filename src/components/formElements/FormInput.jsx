import PropTypes from 'prop-types';
import { get } from 'lodash';
import { useFormContext } from 'react-hook-form';

const FormInput = ({ id, label, rules, name, type = 'text', ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, name);

  return (
    <div className="w-100">
      <input
        type={type}
        id={id}
        name={name}
        className={`form-control py-2 px-5 rounded-3 lh-account 
          ${error && 'is-invalid'} 
          ${props?.disabled ? 'border-gray-200 text-gray-700' : 'border-gray-400 bg-white'}`}
        placeholder={`請輸入${label}`}
        {...register(name, rules)}
        {...props}
      />
      {error && <div className="invalid-feedback">{error?.message}</div>}
    </div>
  );
};

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rules: PropTypes.object,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default FormInput;

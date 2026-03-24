import { get } from 'lodash';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const FormSelect = ({
  id,
  name,
  label,
  options = [],
  optionValueKey = 'name',
  optionLabelKey = 'name',
  rules,
  handleChange,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, name);
  const { onChange, ...rest } = register(name, rules);

  const handleSelectChange = (e) => {
    onChange(e);
    handleChange?.(e);
  };

  return (
    <div className="flex-grow-1 w-100">
      <select
        id={id}
        name={name}
        className={`form-select border-gray-400 py-2 px-5 rounded-3 bg-white lh-base ${
          error && 'is-invalid'
        }`}
        defaultValue=""
        {...rest}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          請選擇{label}
        </option>
        {options.map((item) => (
          <option value={item[optionValueKey]} key={item[optionValueKey]}>
            {item[optionLabelKey]}
          </option>
        ))}
      </select>
      {error && <div className="invalid-feedback">{error?.message}</div>}
    </div>
  );
};

FormSelect.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  rules: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      [PropTypes.string]: PropTypes.any, // 或可針對你的資料結構細化
    }),
  ),
  optionLabelKey: PropTypes.string,
  optionValueKey: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
};

export default FormSelect;

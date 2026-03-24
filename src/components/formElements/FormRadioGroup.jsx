import { useFormContext } from 'react-hook-form';
import { get } from 'lodash';
import PropTypes from 'prop-types';

const FormRadioGroup = ({ id, name, label, options, rules, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, name);
  return (
    <div className="mb-7">
      <div className="share-food-modal d-lg-flex align-items-lg-center">
        <div className="me-lg-7 mb-2">
          <label
            htmlFor={id}
            className="form-label h6 fw-bold text-gray-700 col-lg-1 text-nowrap py-4"
          >
            {label}
            <span className="text-danger"> * </span>
          </label>
        </div>
        {options.map((item) => (
          <div
            key={item.id}
            className="form-check ms-0 align-items-center ms-lg-7"
          >
            <input
              className={`form-check-input ${error && 'is-invalid'}`}
              type="radio"
              id={item.id}
              value={item.value}
              {...register(name, rules)}
              {...props}
            />
            <label className="form-check-label text-nowrap" htmlFor={item.id}>
              {item.label}
            </label>
            {error && <div className="invalid-feedback">{error?.message}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

FormRadioGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
  rules: PropTypes.object,
  name: PropTypes.string.isRequired,
};

export default FormRadioGroup;

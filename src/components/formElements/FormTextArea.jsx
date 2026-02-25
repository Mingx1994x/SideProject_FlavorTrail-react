import { get } from 'lodash';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

const FormTextArea = ({ label, id, rows, name, rules }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, name);

  return (
    <>
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={`請輸入${label}`}
        className={`form-control py-2 px-5 border-gray-400 rounded-3 bg-white lh-account w-100 ${
          error && 'is-invalid'
        }`}
        {...register(name, rules)}
      ></textarea>
      {error && <div className="invalid-feedback">{error?.message}</div>}
    </>
  );
};

FormTextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rows: PropTypes.number,
  rules: PropTypes.object,
};

export default FormTextArea;

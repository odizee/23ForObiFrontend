import Select from 'react-select';
import styles from './Styles.module.scss';

const SelectInput = ({ options, label, formik, name }) => {
  const value = formik.values[name];

  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : '';
  };

  return (
    <div className={styles.select}>
      <Select
        className="select-container"
        classNamePrefix="select"
        placeholder={label}
        value={defaultValue(options, value)}
        name={name}
        onChange={(val) => formik.setFieldValue(name, val.label)}
        options={options}
      />
      {formik.errors[name] ? (
        <div className={styles.error}>{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default SelectInput;

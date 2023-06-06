import styles from './inputGroup.module.css';

const InputGroup = ({ label, type, value, name, changeHandler }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        value={value}
        name={name}
        onChange={changeHandler}
      />
    </div>
  );
};

export default InputGroup;

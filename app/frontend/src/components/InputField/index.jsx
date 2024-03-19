import InputMask from 'react-input-mask';
import './styles.css';

function InputField({placeholder, type, id, name, value, onChange, mask }) {
  return (
    <div id="user-data">
      {mask ? (
        <InputMask
          className='input-data'
          placeholder={placeholder}
          mask={mask}
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className='input-data'
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default InputField;

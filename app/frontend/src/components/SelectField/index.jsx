import './styles.css';

function SelectField({id, name, value, onChange, options }) {
  return (
    <div>
      <select className='input-select' id={id} name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;

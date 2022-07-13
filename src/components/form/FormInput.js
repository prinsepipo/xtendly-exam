import './FormInput.css';


function FormInput(props) {
  return (
    <input
      className="form-input"
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}


export default FormInput;

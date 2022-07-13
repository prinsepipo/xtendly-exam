import './FormButton.css';


function FormButton(props) {
  return (
    <button
      className="form-button"
      type={props.type}
    >{props.children}</button>
  );
}


export default FormButton;

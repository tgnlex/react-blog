type Props = { 
  class?: string; 
  place?: string; 
  label?: string;  
  required?: boolean;
};

function Email(props: Props) {
  let placeholder = props.place ? props.place : "Enter your email..."
  let classname = props.class ? props.class : "form-control"
  let label = props.label ? props.label : "Email:"
  return (
    <label htmlFor="email" className="form-label">
        {label}
        <input 
            type="email" 
            name="email" 
            className={classname} 
            placeholder={placeholder}
            required={props.required ? true : false}
        />
    </label>
  )
};

export default Email;
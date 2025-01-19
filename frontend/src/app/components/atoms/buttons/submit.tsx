type SubmitProps = { text?: string; class?: string; }

function Submit(props: SubmitProps) {
  let classname = props.class ? props.class : "submit";
  let text = props.text ? props.text : "Submit";
  return (
    <button type="submit" className={classname}>
      {text}
    </button>
  )
};

export default Submit;
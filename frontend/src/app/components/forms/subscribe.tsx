import Email from "../atoms/inputs/email";
import Submit from "../atoms/buttons/submit";
function SubscribeForm() {
  return (
    <form className="subscribe">
      <Email />
      <Submit />
    </form>
  )
};

export default SubscribeForm;
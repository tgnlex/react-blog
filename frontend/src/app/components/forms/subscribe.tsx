import Email from "../atomic/inputs/email";
import Submit from "../atomic/buttons/submit";
function SubscribeForm() {
  return (
    <form className="subscribe">
      <Email />
      <Submit />
    </form>
  )
};

export default SubscribeForm;
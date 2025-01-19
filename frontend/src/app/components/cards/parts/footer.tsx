
type Props = { text: string; children?: any }


function CardFoot(props: Props) {
  return (
    <div className="card--footer">
      <small className="card--footer--text">
        {props.text}
      </small>
       {props.children ? props.children : <div className="hide"/>}
    </div>
  )
};

export default CardFoot;
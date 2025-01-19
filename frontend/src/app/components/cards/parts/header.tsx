type Props = { text: string; children?: any }


function CardHead(props: Props) {
  return (
    <div className="card--header">
      <h3 className="card--header--text">
        {props.text}
      </h3>
       {props.children ? props.children : <div className="hide"/>}
    </div>
  )
};

export default CardHead;
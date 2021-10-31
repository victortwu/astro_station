const AstroCard = (props) => {


  return(
    <div style={{backgroundColor: 'black', margin: '.5rem', padding: '.5rem'}}>
    <h3>Name: {props.name}</h3>
    <h5>Craft: {props.craft}</h5>
    </div>
  )
}

export default AstroCard

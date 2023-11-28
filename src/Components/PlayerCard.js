import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
const PlayerCard=({el})=>{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{width :'280px' ,height:'290px'}} variant="top" src={el.URL} />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
            {el.age}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}

PlayerCard.defaultProps={
    el :    {
        name : "Amine",
        team : "Kef",
        nationality : "Tunisienne",
        jerseyNumber : 9,
        age : 20,
        URL : "https://gomycodelearndev.blob.core.windows.net/profiles/98bdcd2b-5fe5-4d5e-92a0-dfdaccb351eb-133407944633564858.png"
        

    }
}

PlayerCard.propTypes = {
     el: PropTypes.object
}
export default PlayerCard
// import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";




function AllMakeUp(){

    const [myMakeup, setMyMakeUp] = useState([])
    console.log ("State of Our MakeUp [", myMakeup, "]")
  
    // const [essentialMakeup, setEsssentialMakeUp] = useState([])
    // console.log ("State of Our Essential MakeUp [", essentialMakeup, "]")
  
    useEffect(() => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline") 
      .then(response => response.json())
      .then(makeup => { console.log("From Fetch", makeup)
  
      setMyMakeUp(makeup)
     
     });
    }, []);
      
    return (<>
      <h2> MakeUp </h2>
      {
          myMakeup.map(makeup =>{console.log(makeup) 
          
              return (<h4> key={makeup.id}
                          makeUp={makeup}  </h4>)
  
              })
            }
          
          </>)
  }



  const clickHandler =()=>{
    console.log(makeup.name, "clicked")

  
  }


  function CardDisplay(){
    return (
  <div className="card-columns" >
     <Card style={{ width: '18rem'}} className="card-deck">
      <div className="Makeup-card" key={makeup.id}>
      </div>
        <div style={{width:'10rem' , height: '8rem'}} className="image" variant="top">
          <img className="pic"src={makeup.image_link}  alt="Image of a Makeup" />
        </div>
        <br>
          </br>
          <br>
          </br>
          <br>
          </br>
        <div className="Makeup specs">
          <div className="Makeup-name">
            <h3> {makeup.name} </h3>
          </div>
          <div className="Makeup-water">  
            <h4> Water:  {makeup.rating}</h4>
          </div> 
          <div className="Makeup-light">  
            <h5>Light:  {makeup.price}</h5>
          </div> 
          <br>
          </br>
          <div className="Makeup-description">
            <p> Description:   {makeup.description}</p>
          </div>  
          <br>
          </br>
         </div> 
            <Button variant="primary" className="Makeup-likes" 
            onClick={clickHandler}> ❤️  Likes 
            </Button>  
        
          <Card.Footer></Card.Footer>
    </Card>
  </div>
    );


  }
return (   
  <div>
    <CardDisplay />
  </div>
  
);


export default AllMakeUp;
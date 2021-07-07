import Container from '../container/Container';
import Card from './Card';
import './Card.scss';


function CardList({items, hasFirstHot}) {
  
return (
  <Container>
     <div className="card-container">
       {
       items.map((item, i) => {
           if(i === 0 && hasFirstHot)
               return <Card hasFirstHot={hasFirstHot} img={item.img} rate={item.rate} price={item.price} mprice={item.markdownPrice} name={item.name} />
        return <Card hasFirstHot={false} img={item.img} rate={item.rate} price={item.price} mprice={item.markdownPrice} name={item.name} />
        })
        }
      </div> 
      </Container>
   )
    
}

export default CardList;
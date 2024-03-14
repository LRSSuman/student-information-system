import { cardData } from '../../data/data';
import './Card.css';
const Card = () => {
    return (
        <div className='cards'>
            {cardData.map((card) => {
                return (
                    <div className='card' key={card.id}>
                        <div className='card-heading-icon'>
                            <img src={card.icon} alt={card.alt} />
                        </div>
                        <div className='card-heading-txt'>
                            <div className='card-heading'>{card.title}</div>
                            <div className='card-txt'>{card.data}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;

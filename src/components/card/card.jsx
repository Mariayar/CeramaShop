import cn from 'classnames';
import './card.css';
import api from '../utils/api.js';
import save from './save.svg';

const Card = ({ name, price, discount, description, pictures, tags, onProductLike, currentUser, _id, likes }) => {
    const discount_price = Math.round(price - price * discount / 100);
    return (
        <div className='card'>
            <div className='card__sticky card__sticky_type_top-left'>
            {discount !== 0 && (
          <span className='card__discount'>{`-${discount}%`}</span>
        )}
        {tags &&
          tags.map((tag) => (
            <span
              key={tag}
              className={cn('tag', { [`tag_type_${tag}`]: true })}
            >
              {tag}
            </span>
          ))}
            </div>
            <div className="card__sticky card__sticky_type_top-right">
                <button className='card__favorite' onClick={() => onProductLike({ _id, likes})}>
                    <img src={save} alt="Favorites" className='card__favorite-icon'/>
                </button>
            </div>
            <a href="" className='card__link'>
                <img src={pictures} alt="" className='card__image'/>
                <div className='card__desc'>
                    <p className='card__name'>{name}</p>
                    <span className='card__price'>{price}</span>
                    <span className=''> 300 </span>
                </div>
            </a>
            <a href="" className='card__cart btn btn_type_primary'>Cart</a>
        </div>
    )
}

export default Card;
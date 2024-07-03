import './Card.css'
import srcCard from '../../picDeafault.png'

function Card() {
    return (
        <li className='card'>
            <img src={srcCard} alt='pic' className='card__image'/>
        </li>
    )
}

export default Card
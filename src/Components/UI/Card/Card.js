import './Card.scss'

const Card = (props) => {
    return (
        <div className="general-card">
{props.children}
        </div>
    )
}

export default Card;
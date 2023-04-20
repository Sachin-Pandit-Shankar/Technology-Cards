// Write your code here.
import './index.css'

const CardItem = props => {
  const {allItem} = props
  const {title, description, imgUrl, className} = allItem
  return (
    <div className={className}>
      <h1 className="main-heading">{title}</h1>
      <p className="description">{description}</p>
      <div>
        <img src={imgUrl} alt="Data Scientist" className="image" />
      </div>
    </div>
  )
}
export default CardItem

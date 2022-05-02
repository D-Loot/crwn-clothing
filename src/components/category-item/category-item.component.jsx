import './category-item.styles.scss'

const CategoryItem = ({category}) =>{
  const {imageUrl,subtitle, title} = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
        backgroundImage:`url(${imageUrl})`
      }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

    </div>
  )
}

export default CategoryItem

import React from "react"

import "./collection-item.styles.scss"

export default function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <div className='collection-item' key={id}>
      <div
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  )
}

// className={`collection-item-${item.name.toLowerCase().replace(/\s/g, "-")}`}

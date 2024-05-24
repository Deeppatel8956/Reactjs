import React from 'react'
import Chip from '../../../common/Chip/Chip'
import { Link } from 'react-router-dom'
import './styleitem.css'
const BlogItem = ({blog :{
  description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
},}) => {
  return (
    <div>
      <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <Chip label={category} />
      <h4>{title}</h4>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
    </div>
  )
}

export default BlogItem
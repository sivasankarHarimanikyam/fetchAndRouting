import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, avatarUrl, title, topic, author} = blogData

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="item-container">
        <img src={imageUrl} alt={`item${id}`} className="pic-edit1" />
        <div className="item-info">
          <p className="item-topic">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="author-info">
            <img src={avatarUrl} alt={`avatar${id}`} className="pic-edit" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem

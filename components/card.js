import React from 'react';
import Link from 'next/link';

const Card = ({ article }) => {
  return (
    <Link href={{ pathname: 'article', query: { id: article.id } }}>
      <a className='uk-link-reset'>
        <div className='uk-card uk-card-muted'>
          <div className='uk-card-media-top'>
            <img
              src={process.env.API_URL + article.image[0].url}
              alt={article.image.url}
              height='100'
            />
            <div className='uk-card-body'>
              <p className='uk-text-uppercase' id='category'>
                {article.category.name}
              </p>
              <p id='title' className='uk-text-large'>
                {article.title}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;

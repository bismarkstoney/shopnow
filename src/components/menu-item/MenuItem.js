import React from 'react';
import './menu-item.scss';
import { withRouter } from 'react-router-dom';
const MenuItem = (props) => {
  const { title, imageUrl, linkUrl, size } = props.section;
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => props.history.push(`${props.match.url}${linkUrl}`)}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <h1 className='title'>{title}</h1>

        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);

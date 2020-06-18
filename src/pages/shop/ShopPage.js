import React, { Component } from 'react';
import shopData from './shopData';
import CollectionPreview from '../../components/collection/CollectionPreview';
class ShopPage extends Component {
  state = {
    collections: shopData,
  };
  render() {
    const { collections } = this.state;
    console.log(collections);
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;

import React from 'react';
import { useSelector } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item';

import './collection.scss';


const CollectionPage = ({ match }) => {

  const collectionUrlParam = match.params.collectionId.toLowerCase();

  const collection = useSelector(state => {
    return state.collections.collections[collectionUrlParam];
  });

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
}

export default CollectionPage;
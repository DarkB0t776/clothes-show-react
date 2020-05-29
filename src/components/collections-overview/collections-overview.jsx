import React from 'react';
import { useSelector } from 'react-redux';


import CollectionPreview from '../preview-collection/collection-preview';

import './collections-overview.scss';

const CollectionsOverview = () => {

  const collections = useSelector(state => {
    return Object.keys(state.collections.collections).map(key => state.collections.collections[key]);
  });

  return (
    <div className="collections-overview">
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview
            key={id}
            {...otherCollectionProps}
          />
        ))
      }
    </div>
  );
}

export default CollectionsOverview;
import React, { useState } from 'react';

import { SHOP_DATA } from '../../data/data';

import CollectionPreview from '../preview-collection/collection-preview';

import './collections-overview.scss';

const CollectionsOverview = () => {

  const [collections, setCollections] = useState(SHOP_DATA);

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
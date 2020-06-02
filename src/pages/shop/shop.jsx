import React, {useEffect} from 'react';
import { Route } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase';

import * as collectionActions from '../../redux/actions/collection';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';

const ShopPage = ({ match }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    const unsubscribe = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(collectionActions.updateCollections(collectionsMap));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;

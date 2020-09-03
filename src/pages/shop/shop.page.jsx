import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverwiev from '../../components/collection/overview/collection-ov.comp';
import CollectionPage from '../collection/collection.page';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverwiev} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default ShopPage;
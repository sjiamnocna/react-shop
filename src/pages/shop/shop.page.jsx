import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selector';

import WithSpinner from '../../components/with-spinner/with-spinner.comp';

import CollectionOverwiev from '../../components/collection/overview/collection-ov.comp';
import CollectionPage from '../collection/collection.page';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverwiev),
    CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({match, fetchCollectionsStartAsync, isLoaded}) => {
    useEffect(() => {
        fetchCollectionsStartAsync();
    });
    
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={!isLoaded} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isLoaded} {...props} />} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    isLoaded: selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import fetchCollectionsStartAsync from '../../redux/shop/shop.action';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';

import WithSpinner from '../../components/with-spinner/with-spinner.comp';

import CollectionOverwiev from '../../components/collection/overview/collection-ov.comp';
import CollectionPage from '../collection/collection.page';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverwiev),
    CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props
        fetchCollectionsStartAsync();
    }

    render() {
        const { match, isFetching } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isFetching} {...props} />} />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection/item/collection-item.comp';

import './collection.scss';

const CollectionPage = ({ collection }) => (
    <div className="collection-page">
        {
            console.log(collection)
        }
        <h2>Collection PAGE</h2>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
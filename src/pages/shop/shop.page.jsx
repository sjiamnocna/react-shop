import React from 'react';
import { Route } from 'react-router-dom';

import { firestore } from '../../firebase/firebase.utils';

import CollectionOverwiev from '../../components/collection/overview/collection-ov.comp';
import CollectionPage from '../collection/collection.page';

class ShopPage extends React.Component{
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            console.log(snapshot);
        });
    }

    render() {
        const { match } = this.props;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverwiev} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
    }
}

export default ShopPage;
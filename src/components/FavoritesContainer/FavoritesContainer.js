import React from 'react';
import './FavoritesContainer.css';
import NavBar from '../NavBar/NavBar';
import Listing from '../Listing/Listing';

const FavoritesContainer = ({userInfo, signOut}) => {

  const favoritesToDisplay = () => {
    let favorites = userInfo.favorites.map(favorite => {
      return (
        <Listing key={favorite.listing_id} {...favorite} />
      )
    })
    return favorites;
  }

  return (
    <section className="favorites-page">
      <NavBar
        title={`Favoritied ${userInfo.purpose} Listings`}
        userInfo={userInfo}
        signOut={signOut}
      />
      <section className="favorites-container">
        {!userInfo.favorites ?
          <h3 className="no-favorites-message">You don't have any favorites yet! Head back to the listings and choose a favorite.</h3> :
          favoritesToDisplay
        }
      </section>
    </section>
  )
}

export default FavoritesContainer;
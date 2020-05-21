export const listingPromises = (props) => {
  return props.details.listings.map(async listing => {
  const response = await fetch(`https://vrad-api.herokuapp.com${listing}`)
  const listingData = await response.json()
  return listingData
  })
}
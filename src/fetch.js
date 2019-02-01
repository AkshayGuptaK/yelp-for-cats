const cors = 'https://cors-anywhere.herokuapp.com'
const domain = 'https://api.yelp.com/v3'
const key = 'NUvkMgNejyHF9AYnPRdtXaqMGkX2sbad1ZG1hKIEeRKv3IVrUzmosnNpLrtBUSopwGm6mP5_Qy1SPcMmVzG-o2cygfT4_gFqFBpf2pakOrqFqbSs4uR7gHGgrm37W3Yx'

function formatBusinessDetails (business) {
  return {
    'name': business.name,
    'closed': business.is_closed,
    'price': business.price,
    'rating': business.rating,
    'reviewCount': business.review_count,
    'phone': business.display_phone,
    'address': business.location.display_address.join('\n'),
    'tags': business.categories,
    'images': business.photos,
    'hours': business.hours
  }
}

function formatReviews (reviews) {
  return reviews.map(review => Object.assign({}, {
    rating: review.rating,
    user: review.user.name,
    time: review.time_created,
    text: review.text
  }))
}

function formatSearchData (data) {
  return data.businesses.map(business => {
    return {
      'id': business.id,
      'name': business.name,
      'tags': business.categories,
      'image': business.image_url,
      'reviews': business.review_count,
      'rating': business.rating,
      'price': business.price,
      'phone': business.display_phone,
      'address': business.location.display_address.join('\n')
    }
  })
}

function fetchYelp (url) {
  console.log('Submitting get request')
  return fetch(`${cors}/${domain}/${url}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Authorization': 'Bearer ' + key
    }
  }).then(res => res.json())
    .catch(console.log)
}

class fetchRequests {
  static doSearch (query) {
    return fetchYelp(`businesses/search?${query}`)
      .then(res => { return { 'businesses': formatSearchData(res), 'total': res.total } })
  }
  static locDetails (loc) {
    return fetchYelp(`businesses/search?term=cat&location=${loc}`)
      .then(res => { return { 'businesses': formatSearchData(res), 'total': res.total } })
  }
  static bizInfo (id) {
    let details = fetchYelp(`businesses/${id}`).then(res => formatBusinessDetails(res))
    let reviews = fetchYelp(`businesses/${id}/reviews`).then(res => formatReviews(res.reviews))
    return Promise.all([details, reviews]).then(res => Object.assign(res[0], { reviews: res[1] }))
  }
}

export default fetchRequests

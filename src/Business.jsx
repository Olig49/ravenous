import React from 'react';

const business = {
  name: "BusinessSName",
  image: "business-image.jpg",
  address: "123 Business St",
  city: "Business City",
  state: "CA",
  zip: "12345",
  category: "Business Category",
  rating: 4.5,
  reviewCount: 100
};

const Business = () => {
  return (
    <div>
        <img src={business.image} alt={business.name} />
      <h1>{business.name}</h1>
      <p>{business.address}</p>
      <p>{business.city}</p>
      <p>{business.state}</p>
      <p>{business.zip}</p>
      <p>{business.category}</p>
      <p>{business.rating}</p>
      <p>{business.reviewCount}</p>
    </div>
  );
};

export default Business;

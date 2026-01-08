import React from 'react';

const businesses = [
  {
    name: "BusinessSName",
    image: "business-image.jpg",
    address: "123 Business St",
    city: "Business City",
    state: "CA",
    zip: "12345",
    category: "Business Category",
    rating: 4.5,
    reviewCount: 100
  },
  // Add more business objects as needed
];

const BusinessList = () => {
    return (
        <div>
            {businesses.map((business, index) => (
                <div key={index}>
                    <h2>{business.name}</h2>
                    <img src={business.image} alt={business.name} />
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state}</p>
                    <p>{business.zip}</p>
                    <p>{business.category}</p>
                    <p>{business.rating}</p>
                    <p>{business.reviewCount}</p>
                </div>
            ))}
        </div>
    );
}
export default BusinessList;
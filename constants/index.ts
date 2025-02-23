import { PropertyProps, Review } from "@/interfaces";

export const API_URL = 'https://api.example.com/properties';
export const PLACEHOLDER_IMAGE = '/assets/placeholder.jpg';

export const PROPERTYREVIEWS: Review[] = [
  { propertyId: 1, name: "Emma", comment: "Absolutely stunning!", avatar: "/images/avatar-1.jpg", rating: 5 },
  { propertyId: 1, name: "Frank", comment: "Worth every penny.", avatar: "/images/avatar-2.jpg", rating: 4.8 },
  { propertyId: 1, name: "Sophia", comment: "Loved the ambiance.", avatar: "/images/avatar-1.jpg", rating: 4.7 },
  { propertyId: 2, name: "Daniel", comment: "Perfect getaway!", avatar: "/images/avatar-2.jpg", rating: 5 },
  { propertyId: 2, name: "Olivia", comment: "Cozy and comfortable.", avatar: "/images/avatar-1.jpg", rating: 4.6 },
  { propertyId: 2, name: "Ethan", comment: "Highly recommended!", avatar: "/images/avatar-2.jpg", rating: 4.9 },
  { propertyId: 3, name: "Ava", comment: "Beautiful and serene.", avatar: "/images/avatar-1.jpg", rating: 5 },
  { propertyId: 3, name: "Michael", comment: "A wonderful experience!", avatar: "/images/avatar-2.jpg", rating: 4.8 },
  { propertyId: 3, name: "Isabella", comment: "So peaceful.", avatar: "/images/avatar-1.jpg", rating: 4.7 },
  { propertyId: 4, name: "James", comment: "Had a great stay!", avatar: "/images/avatar-2.jpg", rating: 5 },
  { propertyId: 4, name: "Mia", comment: "Perfect vacation spot.", avatar: "/images/avatar-1.jpg", rating: 4.6 },
  { propertyId: 4, name: "William", comment: "Would visit again!", avatar: "/images/avatar-2.jpg", rating: 4.9 },
  { propertyId: 5, name: "Charlotte", comment: "Amazing location!", avatar: "/images/avatar-1.jpg", rating: 5 },
  { propertyId: 5, name: "Benjamin", comment: "Luxury at its finest.", avatar: "/images/avatar-2.jpg", rating: 4.8 },
  { propertyId: 5, name: "Amelia", comment: "Superb hospitality.", avatar: "/images/avatar-1.jpg", rating: 4.7 },
  { propertyId: 6, name: "Alexander", comment: "A dream vacation!", avatar: "/images/avatar-2.jpg", rating: 5 },
  { propertyId: 6, name: "Ella", comment: "Loved everything!", avatar: "/images/avatar-1.jpg", rating: 4.6 },
  { propertyId: 6, name: "Henry", comment: "Incredible experience!", avatar: "/images/avatar-2.jpg", rating: 4.9 }
];

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: 1,
    name: "Modern Apartment",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.5,
    category: ["Apartment", "Modern"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "4"
    },
    image: "/images/image-1.jpg",
    discount: "10% off",
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    id: 2,
    name: "Cozy Cottage",
    address: {
      state: "London",
      city: "London",
      country: "UK"
    },
    rating: 4.7,
    category: ["Cottage", "Cozy"],
    price: 1500,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "3"
    },
    image: "/images/image-2.jpg",
    discount: "15% off",
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    id: 3,
    name: "Luxury Villa",
    address: {
      state: "Los Angeles",
      city: "Los Angeles",
      country: "USA"
    },
    rating: 4.8,
    category: ["Villa", "Luxury"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "10"
    },
    image: "/images/image-3.jpg",
    discount: "20% off",
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    id: 4,
    name: "City Loft",
    address: {
      state: "Paris",
      city: "Paris",
      country: "France"
    },
    rating: 4.6,
    category: ["Loft", "City"],
    price: 3000,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "6"
    },
    image: "/images/image-4.jpg",
    discount: "5% off",
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    id: 5,
    name: "Beach House",
    address: {
      state: "Malibu",
      city: "Malibu",
      country: "USA"
    },
    rating: 4.9,
    category: ["House", "Beach"],
    price: 4000,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "8"
    },
    image: "/images/image-5.jpg",
    discount: "10% off",
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    id: 6,
    name: "Mountain Cabin",
    address: {
      state: "Aspen",
      city: "Aspen",
      country: "USA"
    },
    rating: 4.4,
    category: ["Cabin", "Mountain"],
    price: 1800,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/images/image-6.jpg",
    discount: "7% off",
   
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  }
];

export const PROPERTYLISTINGSAMPLE2: PropertyProps [] = [
  {
    name: "Modern Apartment",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.5,
    category: ["Apartment", "Modern"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "4"
    },
    image: "/images/image-1.jpg",
    discount: "10% off",
    reviews: [
      { name: "Alice", comment: "Great place!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Bob", comment: "Loved the view!", avatar: "/images/avatar-2.jpg", rating: 4 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Cozy Cottage",
    address: {
      state: "London",
      city: "London",
      country: "UK"
    },
    rating: 4.7,
    category: ["Cottage", "Cozy"],
    price: 1500,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "3"
    },
    image: "/images/image-2.jpg",
    discount: "15% off",
    reviews: [
      { name: "Chris", comment: "Very cozy and comfortable!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Dana", comment: "Perfect getaway spot.", avatar: "/images/avatar-2.jpg", rating: 4.5 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Luxury Villa",
    address: {
      state: "Los Angeles",
      city: "Los Angeles",
      country: "USA"
    },
    rating: 4.8,
    category: ["Villa", "Luxury"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "10"
    },
    image: "/images/image-3.jpg",
    discount: "20% off",
    reviews: [
      { name: "Emma", comment: "Absolutely stunning!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Frank", comment: "Worth every penny.", avatar: "/images/avatar-2.jpg", rating: 4.8 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "City Loft",
    address: {
      state: "Paris",
      city: "Paris",
      country: "France"
    },
    rating: 4.6,
    category: ["Loft", "City"],
    price: 3000,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "6"
    },
    image: "/images/image-4.jpg",
    discount: "5% off",
    reviews: [
      { name: "Grace", comment: "Amazing ambiance!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Hank", comment: "Great for business trips.", avatar: "/images/avatar-2.jpg", rating: 4.6 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Beach House",
    address: {
      state: "Malibu",
      city: "Malibu",
      country: "USA"
    },
    rating: 4.9,
    category: ["House", "Beach"],
    price: 4000,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "8"
    },
    image: "/images/image-5.jpg",
    discount: "10% off",
    reviews: [
      { name: "Ivy", comment: "Loved the ocean view!", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Jack", comment: "Perfect for families.", avatar: "/images/avatar-2.jpg", rating: 4.9 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  },
  {
    name: "Mountain Cabin",
    address: {
      state: "Aspen",
      city: "Aspen",
      country: "USA"
    },
    rating: 4.4,
    category: ["Cabin", "Mountain"],
    price: 1800,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/images/image-6.jpg",
    discount: "7% off",
    reviews: [
      { name: "Kate", comment: "Great escape to nature.", avatar: "/images/avatar-1.jpg", rating: 5 },
      { name: "Leo", comment: "Peaceful and quiet.", avatar: "/images/avatar-2.jpg", rating: 4.4 }
    ],
    images: [
      "/images/detail-image-1.jpg",
      "/images/detail-image-2.jpg",
      "/images/detail-image-3.jpg",
      "/images/detail-image-4.jpg"
    ]
  }
];

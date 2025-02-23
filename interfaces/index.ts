export interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
  }
  
export interface ButtonProps {
  label: string;
  onClick: () => void;
}
  
export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface Review {
  propertyId?: number;
  name: string;
  comment: string;
  avatar: string;
  rating: number; 
} 
export interface PropertyProps {
  id?: number;
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
  reviews?: Review[];
  images: string[];
}

export interface PillProps {
  label: string;
  onClick: () => void;
}
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Starter' | 'Main' | 'Dessert';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
}

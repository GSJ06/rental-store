export interface UserProfile {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  bio: string;
  profile_photo: string;
  settings: {
    dark_mode: boolean;
    email_notifications: boolean;
  };
}

export interface RentalItem {
  name: string;
  quantity: number;
  price_per_unit: number;
}

export interface Rental {
  order_id: string;
  items: RentalItem[];
  rental_start_date: string;
  rental_end_date: string;
  total_price: number;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
}

export interface Toast {
  message: string;
  type: 'success' | 'error';
}
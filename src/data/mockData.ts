import { Rental, UserProfile } from "../types";

export const userProfile: UserProfile = {
  id: "user_01",
  full_name: "Sarah Sharma",
  email: "sarah.sharma@email.com",
  phone: "+91 98765 43210",
  bio: "Professional trekking guide with 5 years of experience in the Himalayas. Passionate about sustainable tourism and mountain conservation. Certified in wilderness first aid and high-altitude rescue. Leading expeditions across various Himalayan ranges.",
  profile_photo: "https://www.w3schools.com/howto/img_avatar.png",
  settings: {
    dark_mode: false,
    email_notifications: true,
  },
};

export const rentalHistory: Rental[] = [
  {
    order_id: "rental_1001",
    items: [
      { name: "Osprey Atmos AG 65L Backpack", quantity: 1, price_per_unit: 2500 },
      { name: "Hydroflask 1L Water Bottle", quantity: 2, price_per_unit: 1200 },
    ],
    rental_start_date: "2024-03-15",
    rental_end_date: "2024-03-20",
    total_price: 4900,
    status: "Confirmed",
  },
  {
    order_id: "rental_1002",
    items: [{ name: "Salomon Quest 4D GTX Hiking Boots", quantity: 1, price_per_unit: 3500 }],
    rental_start_date: "2024-02-10",
    rental_end_date: "2024-02-15",
    total_price: 3500,
    status: "Completed",
  },
  {
    order_id: "rental_1003",
    items: [{ name: "Black Diamond Headlamp", quantity: 1, price_per_unit: 800 }],
    rental_start_date: "2024-01-01",
    rental_end_date: "2024-01-05",
    total_price: 800,
    status: "Cancelled",
  },
  {
    order_id: "rental_1004",
    items: [{ name: "MSR Hubba Hubba NX 2-Person Tent", quantity: 1, price_per_unit: 4500 }],
    rental_start_date: "2023-12-01",
    rental_end_date: "2023-12-05",
    total_price: 4500,
    status: "Cancelled",
  },
  {
    order_id: "rental_1005",
    items: [{ name: "Patagonia Nano Puff Jacket", quantity: 1, price_per_unit: 2800 }],
    rental_start_date: "2023-11-01",
    rental_end_date: "2023-11-05",
    total_price: 2800,
    status: "Completed",
  },
];

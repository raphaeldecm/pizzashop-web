import { api } from "@/lib/axios";

export interface RegisterRestaurantData {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

export async function registerRestaurant({ 
  restaurantName,
  managerName,
  email,
  phone, 
}: RegisterRestaurantData) {
  await api.post('/restaurants', { 
    restaurantName,
    managerName,
    email,
    phone, 
   })
}
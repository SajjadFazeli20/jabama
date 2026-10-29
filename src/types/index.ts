// ── Property ────────────────────────────────
export interface Property {
    id: number;
    title: string;
    city: string;
    province: string;
    price: number;
    rating: number;
    reviewCount: number;
    imageUrl: string;
    images: string[];
    description: string;
    amenities: string[];
    maxGuests: number;
    bedrooms: number;
    bathrooms: number;   
    area: number;        
    address: string;     
    type: string;        
    status: "available" | "booked";
}

// ── User  ──────────────────────────────────────
export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
}

// ── Review  ──────────────────────────────────────
export interface Review {
    id: number;
    userId: number;
    userName: string;
    rating: number;
    comment: string;
    date: string;
}

// ── Booking  ────────────────────────────────────
export interface Booking {
    id: number;
    propertyId: number;
    userId: number;
    checkIn: string;
    checkOut: string;
    totalPrice: number;
    status: "pending" | "confirmed" | "cancelled";
}

// ── SearchFilters  ───────────────────
export interface SearchFilters {
    city: string;
    type?: string;      
    maxPrice?: number;  
}
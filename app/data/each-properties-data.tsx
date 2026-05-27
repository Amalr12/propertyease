export interface Review {
  user: string;
  rating: number;
  comment: string;
   onClose: any;
   lat:number;
   lng:number
}

export interface PropertyDetails {
  id: number;
  district: string;
  title: string;
  slug: string; // ✅ added
  type: "Apartment" | "Villa" | "Plot";
  bhk: string;
  bathrooms: number | "-";
  price: string;
  size: string;
  year: string;
  status?: "Verified";
 
  image: string; // ✅ added (for card)

  images: string[];
  overview: string;
  highlights: string[];
  considerations: string[]; // ✅ required
  amenities: string[];
  floorPlan: string;
  lat:number;
  lng:number;
  nearby: { place: string; distance: string }[]; // ✅ FIXED

  reviews: { user: string, rating: number, comment: string }[];
}

export const properties: PropertyDetails[] = [
  {
    id: 1,
    title: "Luxury 3BHK Villa",
    district: "Thrissur",
    type: "Villa",
    slug: "villa-thrissur",
    price: "₹1.2 Cr",
    bhk: "3 BHK",
    bathrooms: 3,
    size: "2200 sqft",
    year: "2020",
    status: "Verified",
    image: "/pexels-ahmetcotur-31817157.jpg",

    lat: 10.5276,
    lng: 76.2144,

    overview: "Premium villa in peaceful area of Thrissur.",
    highlights: ["Prime location", "Modern design"],
    considerations: ["High demand area", "Good resale value"],
    amenities: ["Swimming Pool", "Gym", "Club House"],

    images: [ "/pexels-ahmetcotur-31817157.jpg","/cardimage1.png", "/cardimage2.png"],
    floorPlan: "/floorplan1.png",

    nearby: [
      { place: "Hospital", distance: "2 km" },
      { place: "Temple", distance: "1 km" },
    ],

    reviews: [
      { user: "Arjun", rating: 4.5, comment: "Great property" },
      { user: "Anjana", rating: 4, comment: "Good Quality property" }
    ]
  },

  {
    id: 2,
    title: "2BHK Apartment",
    district: "Thrissur",
    type: "Apartment",
    slug: "apartment-thrissur",
    price: "₹45 Lakh",
    bhk: "2 BHK",
    bathrooms: 2,
    size: "900 sqft",
    year: "2015",
    image: "/imagereader-3-1550604185.avif",

    lat: 10.5200,
    lng: 76.2100,

    overview: "Affordable apartment near city center.",
    highlights: ["Budget friendly", "Good connectivity"],
    considerations: ["Older building", "Limited parking"],
    amenities: ["Lift", "Parking"],

    images: ["/imagereader-3-1550604185.avif","/cardimage2.png", "/cardimage1.png"],
    floorPlan: "/floorplan3.jpg",

    nearby: [
      { place: "School", distance: "500 m" },
    ],

    reviews: [
      { user: "Rahul", rating: 4, comment: "Worth price" },
    ],
  },

  {
    id: 3,
    title: "4BHK Premium Villa",
    district: "Ernakulam",
    type: "Villa",
    slug: "villa-ernakulam",
    price: "₹2 Cr",
    bhk: "4 BHK",
    bathrooms: 4,
    size: "3200 sqft",
    year: "2022",
    status: "Verified",
    image: "/premium_photo-1661915661139-5b6a4e4a6fcc.avif.png",

    lat: 10.0159,
    lng: 76.3419,

    overview: "Luxury villa near Infopark.",
    highlights: ["IT hub nearby", "High ROI"],
    considerations: ["Premium pricing", "Maintenance cost"],
    amenities: ["Pool", "Gym", "Security"],

    images: ["/premium_photo-1661915661139-5b6a4e4a6fcc.avif.png","/cardimage3.png", "/cardimage2.png"],
    floorPlan: "/floorplan3.jpg",

    nearby: [
      { place: "Infopark", distance: "3 km" },
    ],

    reviews: [
      { user: "Nikhil", rating: 5, comment: "Best investment" },
    ],
  },

  {
    id: 4,
    title: "Residential Plot",
    district: "Ernakulam",
    type: "Plot",
    slug: "plot-ernakulam",
    price: "₹80 Lakh",
    bhk: "-",
    bathrooms: "-",
    size: "3000 sqft",
    year: "-",
    image: "/property.jpg.png",

    lat: 10.0300,
    lng: 76.3200,

    overview: "Prime land for construction.",
    highlights: ["Corner plot", "Wide road"],
    considerations: ["Developing area", "No immediate construction"],
    amenities: ["Water", "Electricity"],

    images: ["/property.jpg.png", "/cardimage1.png", "/cardimage2.png"],
    floorPlan: "/floorplan1.jpg",

    nearby: [
      { place: "Highway", distance: "1 km" },
    ],

    reviews: [
      { user: "Suresh", rating: 4.2, comment: "Nice area" },
    ],
  },
];
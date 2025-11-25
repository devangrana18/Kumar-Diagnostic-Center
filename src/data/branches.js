export const branches = [
  {
    id: 1,
    name: "Milak Branch",
    city: "Milak, Rampur, U.P",
    contactPerson: "Mr. Ramesh Kumar",
    phone: "9720530066",
    image: "/images/branches/milak.jpg",
    services: [1, 2, 3], 
    reviews: [
      {
        id: 1,
        user: "Priya Sharma",
        rating: 5,
        comment: "Very good staff and fast test reports!"
      },
      {
        id: 2,
        user: "Rahul Verma",
        rating: 4,
        comment: "Affordable and quick service. Ultrasound was smooth."
      }
    ]
  },
  {
    id: 2,
    name: "Mirganj Branch",
    city: "Mirganj, Bareilly, U.P",
    contactPerson: "Mr. Mahesh Kumar",
    phone: "9927674842",
    image: "/images/branches/mirganj.jpg",
    services: [1], 
    reviews: [
      {
        id: 1,
        user: "Amit Gupta",
        rating: 5,
        comment: "Best X-ray diagnostic in Mirganj."
      }
    ]
  }
];

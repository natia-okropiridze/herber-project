const database = {
  galleries: [
    {
      id: crypto.randomUUID().toString(),
      image: "watermelon.jpg",
      title: "Watermelon",
    },
    {
      id: crypto.randomUUID().toString(),
      image: "grapes.jpg",
      title: "Grapes",
    },
    {
      id: crypto.randomUUID().toString(),
      image: "orange.jpg",
      title: "Orange",
    },
    {
      id: crypto.randomUUID().toString(),
      image: "milk.jpg",
      title: "Milk",
    },
    {
      id: crypto.randomUUID().toString(),
      image: "lemon.jpg",
      title: "Lemon",
    },
    {
      id: crypto.randomUUID().toString(),
      image: "herbs.jpg",
      title: "Herbs",
    },
  ],
  vegetables: [
    {
      id: crypto.randomUUID().toString(),
      image: "/images/vegetables/organic_vegetables.jpg",
      title: "organic vegetables",
    },
    {
      id: crypto.randomUUID().toString(),
      image: "/images/vegetables/avocado.png",
      title: "Avocados",
      price: 50.0,
      discount: 50,
    },
    {
      id: crypto.randomUUID().toString(),
      image: "/images/vegetables/corn.png",
      title: "Corn",
      price: 27.0,
      discount: null,
    },
    {
      id: crypto.randomUUID().toString(),
      image: "/images/vegetables/artichokes.png",
      title: "Artichokes",
      price: 23.0,
      discount: null,
    },
    {
      id: crypto.randomUUID().toString(),
      image: "/images/vegetables/broccoli.png",
      title: "Broccoli",
      price: 25.0,
      discount: 50,
    },
  ],
  fruits: [
    {
      id: crypto.randomUUID().toString(),
      image: "/images/fruits/fresh_fruits.jpg",
      title: "fresh fruits",
    },
    {
      id: crypto.randomUUID().toString(),
      image: "/images/fruits/peaches.png",
      title: "Peaches",
      price: 60.0,
      discount: 30,
    },
    {
      id: crypto.randomUUID().toString(),
      image: "/images/fruits/apple.png",
      title: "Apples",
      price: 40.0,
      discount: 10,
    },
    {
      id: crypto.randomUUID().toString(),
      image: "/images/fruits/kiwi.png",
      title: "Kiwis",
      price: 30.0,
      discount: null,
    },
    {
      id: crypto.randomUUID().toString(),
      image: "/images/fruits/blueberry.png",
      title: "Blueberry",
      price: 25.0,
      discount: null,
    },
  ],
  partners: [
    {
      id: crypto.randomUUID().toString(),
      image: "/images/partners/partner_1.png",
    },
    {
      id: crypto.randomUUID().toString(),
      image: "/images/partners/partner_2.png",
    },
    {
      id: crypto.randomUUID().toString(),
      image: "/images/partners/partner_3.png",
    },
    {
      id: crypto.randomUUID().toString(),
      image: "/images/partners/partner_4.png",
    },
  ],
  teams: [
    {
      id: crypto.randomUUID().toString(),
      image: "team_1.jpg",
      fullName: "Ryan Wilson",
      position: "Founder",
    },
    {
      id: crypto.randomUUID().toString(),
      image: "team_2.jpg",
      fullName: "Jill Peterson",
      position: "garden manager",
    },
    {
      id: crypto.randomUUID().toString(),
      image: "team_3.jpg",
      fullName: "Sam Robinson",
      position: "Farmyard Coordinator",
    },
  ],
  products: [
    {
      id: crypto.randomUUID().toString(),
      image: "blueberry.png",
      title: "Blueberry",
      category: "fruit",
      price: 25.0,
    },
    {
      id: crypto.randomUUID().toString(),
      image: "kiwi.png",
      title: "Kiwis",
      category: "fruit",
      price: 30.0,
    },
    {
      id: crypto.randomUUID().toString(),
      image: "apple.png",
      title: "Apples",
      category: "fruit",
      price: 40.0,
    },
    {
      id: crypto.randomUUID().toString(),
      image: "peaches.png",
      title: "Peaches",
      category: "fruit",
      price: 60.0,
    },
    {
      id: crypto.randomUUID().toString(),
      image: "broccoli.png",
      title: "Broccoli",
      category: "vegetable",
      price: 25.0,
    },
    {
      id: crypto.randomUUID().toString(),
      image: "artichokes.png",
      title: "Artichokes",
      category: "vegetable",
      price: 23.0,
    },
    {
      id: crypto.randomUUID().toString(),
      image: "corn.png",
      title: "Corn",
      category: "vegetable",
      price: 27.0,
    },
    {
      id: crypto.randomUUID().toString(),
      image: "avocado.png",
      title: "Avocados",
      category: "vegetable",
      price: 50.0,
    },
  ],
};

export default database;

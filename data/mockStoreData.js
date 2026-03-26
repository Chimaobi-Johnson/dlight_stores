/** Shape matches your API responses for local dev without a backend. */

export const mockCategories = [
  {
    _id: "mock-cat-1",
    name: "Kitchen Items",
    imageUrl: "/site/kitchenwares.png",
  },
  {
    _id: "mock-cat-2",
    name: "Souvenirs",
    imageUrl: "/site/souviners.png",
  },
  {
    _id: "mock-cat-3",
    name: "Bedsheets and Duvets",
    imageUrl: "/site/landing-bedspread.png",
  },
];

export const mockProducts = [
  {
    _id: "mock-prod-1",
    name: "Colored plates set",
    imagesUrl: ["/products/colored-plates.png"],
    price: 9000,
    category: "mock-cat-1",
  },
  {
    _id: "mock-prod-2",
    name: "Kitchen towel — colored",
    imagesUrl: ["/products/towel-colored.png"],
    price: 5500,
    category: "mock-cat-1",
  },
  {
    _id: "mock-prod-3",
    name: "Garden hose",
    imagesUrl: ["/products/hose.png"],
    price: 12000,
    category: "mock-cat-1",
  },
  {
    _id: "mock-prod-4",
    name: "White towel",
    imagesUrl: ["/products/towel-white.png"],
    price: 4800,
    category: "mock-cat-2",
  },
  {
    _id: "mock-prod-5",
    name: "Cutting board",
    imagesUrl: ["/products/cuttingboard.png"],
    price: 7500,
    category: "mock-cat-2",
  },
  {
    _id: "mock-prod-6",
    name: "Coffee cup",
    imagesUrl: ["/products/coffee-cup.png"],
    price: 3500,
    category: "mock-cat-3",
  },
];

export const mockSiteDocument = {
  shippingInfo:
    "Mock shipping copy for local development. Standard delivery 3–5 business days.",
  shippingLocations: [
    { locationName: "Port Harcourt — Zone A", locationPrice: 1500 },
    { locationName: "Port Harcourt — Zone B", locationPrice: 2500 },
  ],
};

function categoryById(id) {
  return mockCategories.find((c) => c._id === id) || mockCategories[0];
}

export function mockProductDetailResponse(productId) {
  const p =
    mockProducts.find((x) => x._id === productId) || mockProducts[0];
  const cat = categoryById(p.category);
  return {
    product: [
      {
        ...p,
        subheading: "Demo product — no API",
        description:
          "This page is using mock data. Set USE_MOCK_DATA=false and run your backend to use live data.",
        deliveryStatus: "ready",
        specifications: { type: "simple", sizes: [], colors: [] },
        discountDetails: [],
        priceSale: p.price,
        available: 10,
        categoryDetails: [{ _id: cat._id, name: cat.name }],
      },
    ],
  };
}

export function mockProductsForCategory(categoryId) {
  return mockProducts.filter((p) => p.category === categoryId);
}

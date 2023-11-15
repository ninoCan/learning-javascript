interface Endpoints {
    [endpoint: string]: string[]
}

const inventoryEndpoints ={
  "/categories": ["Shirts", "Pants", "Shoes", "Accessories"],
  "/items?category=Shirts": ["T-Shirts", "Casual", "Formal"],
  "/items?category=Pants": ["Long Pants", "Sweat Pants", "Shorts", "Swimwear"],
  "/items?category=Shoes": ["Athletic", "Professional", "Casual", "Walking"],
  "/items?category=Accessories": ["Hats", "Wallets", "Belts"]
};

export default inventoryEndpoints;

// filtered Product
export const filterAndSortProducts = (products, filters) => {
  let filteredProducts = products;

  if (
    filters.company !== "all" ||
    filters.color !== "all" ||
    filters.category !== "all" ||
    filters.price !== 1000000
  ) {
    filteredProducts = products.filter(
      ({ company, color, category, price }) =>
        (filters.company === "all" || filters.company === company) &&
        (filters.color === "all" || filters.color === color) &&
        (filters.category === "all" || filters.category === category) &&
        price <= filters.maxPrice &&
        price >= 0
    );
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (filters.sortBy === "az") return a.name.localeCompare(b.name);
    if (filters.sortBy === "za") return b.name.localeCompare(a.name);
    return 0;
  });

  return sortedProducts;
};

// getUniqueData from Api

export const getUniqueData = (data, attr) => {
  let newVal = data.map((curElem) => {
    return curElem[attr];
  });
  if (attr === "colors") {
    newVal = newVal.flat();
  }

  return (newVal = [...new Set(newVal)]);
};

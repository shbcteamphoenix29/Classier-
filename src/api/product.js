import axios from 'axios';

/**
 * @returns {Promise<Array>}
 * @description
 * Fetches products from an API online.
 * @see https://fakestoreapi.com/products?sort=desc
 */

const fetchHotDeals = async () => {
  const { data: products } = await axios.get(
    'https://fakestoreapi.com/products?sort=desc&limit=10'
  );
  if (Array.isArray(products)) {
    return products.map((product) => ({
      productId: product.id,
      productTitle: product.title,
      productPrice: product.price,
      productImage: product.image,
    }));
  }
  return [];
};

const fetchProductCategories = async () => {
  const { data: productItems } = await axios.get(
    'https://fakestoreapi.com/products?sort=desc&limit=6'
  );
  console.log('id', productItems);
  if (Array.isArray(productItems)) {
    return productItems.map((productItem) => ({
      productId: productItem.id,
      productTitle: productItem.Title,
      productPrice: productItem.price,
      productImage: productItem.image,
    }));
  }
  return [];
};

export { fetchHotDeals, fetchProductCategories };

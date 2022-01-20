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

export { fetchHotDeals };

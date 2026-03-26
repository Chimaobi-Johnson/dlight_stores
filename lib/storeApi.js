import axios from "axios";
import {
  mockCategories,
  mockProducts,
  mockSiteDocument,
  mockProductDetailResponse,
  mockProductsForCategory,
} from "../data/mockStoreData";

/** Mock unless you opt into the real API (see below). */
const isMockMode = () => {
  if (process.env.USE_MOCK_DATA === "false") return false;
  if (process.env.USE_MOCK_DATA === "true") return true;
  // next dev: use dummy data so pages work without a backend. Set USE_MOCK_DATA=false + BACKEND_URL to hit your API.
  return process.env.NODE_ENV === "development";
};

const backend = () => process.env.BACKEND_URL;

export async function apiGetProducts() {
  if (isMockMode()) {
    return { data: { products: mockProducts } };
  }
  return axios.get(`${backend()}/products`);
}

export async function apiGetCategories() {
  if (isMockMode()) {
    return { data: { categories: mockCategories } };
  }
  return axios.get(`${backend()}/categories`);
}

export async function apiGetSiteContent() {
  if (isMockMode()) {
    return { data: { document: mockSiteDocument } };
  }
  return axios.get(`${backend()}/site-content`);
}

export async function apiGetProductIds() {
  if (isMockMode()) {
    return {
      data: { ids: mockProducts.map((p) => ({ _id: p._id })) },
    };
  }
  return axios.get(`${backend()}/products/ids`);
}

export async function apiGetProductById(productId) {
  if (isMockMode()) {
    return { data: mockProductDetailResponse(productId) };
  }
  return axios.get(`${backend()}/product?id=${productId}`);
}

export async function apiGetProductsByCategory(categoryId) {
  if (isMockMode()) {
    return { data: { products: mockProductsForCategory(categoryId) } };
  }
  return axios.get(`${backend()}/products?id=${categoryId}`);
}

import { RESTDataSource } from 'apollo-datasource-rest';
import {PRODUCTS_API} from '../utils/msAddress.js';

export default class ProductsAPI extends RESTDataSource {
    baseURL = PRODUCTS_API || '';
  
    async create(product) {
      return await this.post(`/api/products/`, product);
    }
    async getallproducts() {
      return await this.get(`/api/products/allproducts`);
    }
    async getById(productId) {
      return await this.get(`/api/products/${productId}`);
    }
    async update(productId, product) {
      return await this.put(`/api/products/update/${productId}`, product);
    }
    async delete(productId) {
      return await this.delete(`/api/products/delete${productId}`);
    }
  }
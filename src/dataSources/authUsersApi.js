import { RESTDataSource } from 'apollo-datasource-rest';
import {AUTH_API} from '../utils/msAddress.js';

export default class AuthUsersAPI extends RESTDataSource {
  baseURL = AUTH_API || '';

  willSendRequest(request) {
    if (this.context.token) request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async create(user) {
    return await this.post(`/register/`, user);
  }
  async getUsers() {
    return await this.get(`/user/`);
  }
  async getById(userId) {
    return await this.get(`/user/${userId}`);
  }
  async login(credentials) {
    return await this.post(`/login/`, credentials);
  }
  async refresh(token) {
    return await this.post(`/refresh/`, { refresh: token });
  }
  }
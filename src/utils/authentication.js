import fetch from 'node-fetch';
import jwtDecode from 'jwt-decode';
import { ApolloError, AuthenticationError } from 'apollo-server';
import {AUTH_API} from '../utils/msAddress.js';

export default async ({ req }) => {
  const token = req.headers['x-token'] || '';

  if (!token || req?.body?.operationName === 'RefreshToken') return null;

  try {
    const userId = jwtDecode(token).user_id;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      redirect: 'follow',
    };

    const data = await fetch(
      `${AUTH_API || ''}/user/${userId}`,
      requestOptions
    );

    if (data.status !== 200) throw new AuthenticationError(`INACTIVE SESSION - ${data.status}`);

    const user = await data.json();

    return { token, user };
  } catch (error) {
    if (error.name === 'AuthenticationError') throw new AuthenticationError(`INACTIVE SESSION`);
    throw new ApolloError(`REQUEST ERROR: ${500}: ${error}`, error.code || 500);
  }
};
import lodash from 'lodash';

import authUsersResolver from './authUsersResolver.js';
import productsResolver from './productsResolver.js';
import purchasesResolver from './purchasesResolver.js';

export default lodash.merge(authUsersResolver, productsResolver, purchasesResolver);
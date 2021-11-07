/**
 * 请求接口暴露
 */

import http from './index';
import api from './api.js'

export const testApi = async (params) => {
    let res = await http.get(api.API_TEST, params);
    return res;
}
export const HOST = process.env.HOST
export const API_VERSION = process.env.API_VERSION

export const URL = HOST + '/' + API_VERSION

// generic crud routes
export const FOOD_URL = URL + '/food'
export const FOODS_URL = URL + '/foods'
export const FOODS_LIST_URL = URL + '/foods/list'
export const FOODS_SEARCH_URL = URL + '/foods/search'

import Generic from './generics/Generic'
import parsePayload from './generics/FormDataParsing'
import Response, { handle as h } from './Response'
import {
  FOOD_URL,
  FOODS_URL,
  FOODS_LIST_URL,
  FOODS_SEARCH_URL
} from './api'


export class FoodService extends Generic {
  static _url = FOOD_URL
}

export class FoodsService extends Generic {
  static _url = FOODS_URL
}

export class FoodsListService extends Generic {
  static _url = FOODS_LIST_URL
}

export class FoodsSearchService extends Generic {
  static _url = FOODS_SEARCH_URL
}

// https://api.nal.usda.gov/fdc/v1/food/ID_FOOD?api_key=DEMO_KEY

import Service from '../Service'
import { handle as h } from '../Response'

/**
 * Generic CRUD service
 */
class Generic extends Service {
  /**
   * @static {string} _url
   */
  static _url = ''

  /**
   * @static {string} _idProperty
   */
  static _idProperty = 'id'

  /**
   * Format the url acording the payload parameter.
   *
   * @param {object|undefined} parameter
   *
   * @returns {string}
   */
  static url (parameter) {
    const id = parameter[this._idProperty]

    const baseUrl = parameter
      ? new URL(`${this._url}/${id}`)
      : new URL(this._url)

    baseUrl.searchParams.append('api_key', this.getToken())

    return baseUrl
  }

  /**
   * Fetch the list of resources.
   *
   * @returns {Response}
   */
  static async fetch () {
    return h(
      fetch(this.url(), {
        headers: this.commonHeader()
      })
    )
  }

  /**
   * Fetch the individual resource.
   *
   * @param {object} payload
   *
   * @returns {Response}
   */
  static async get (payload) {
    return h(
      fetch(this.url(payload), {
        headers: this.commonHeader()
      })
    )
  }

  /**
   * Create a new resource.
   *
   * @param {object} payload
   *
   * @returns {Response}
   */
  static async create (payload) {
    return h(
      fetch(this.url(), {
        headers: this.commonHeader(),
        method: 'POST',
        body: JSON.stringify(payload)
      })
    )
  }
}

export default Generic

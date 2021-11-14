class Service {
  static getToken () {
    return process.env.USDA_API_KEY
  }

  static commonHeader () {
    return {
      'Content-Type': 'application/json'
    }
  }
}

export default Service

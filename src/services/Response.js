// import errorMessage from '../generics/errorMessage'

class Response {
  constructor (res) {
    this.isOk = res.isOk
    this.code = res.code
    this.error = res.error
    this.message = res.message
    this.data = res.data
  }
}

export default Response

export async function handle (promise) {
  const load = {}

  try {
    const res = await promise
    load.isOk = res.ok
    load.code = res.status
    load.message = ''
    load.error = null
    load.data = await res.json()
  } catch (error) {
    load.isOk = false
    load.message = error.message || error.statusText
    load.error = error
    load.code = -1
    load.data = null
  }

  return new Response(load)
}

import { API_URL } from '@lib/constants'
import { rotateToken } from '@common/queries/auth'
import { response, parseCookie, setCookies } from '@lib/helpers'

const user = async (req, res) => {
  if (req.method === 'GET') {
    // If there is no cookie, end the request
    if (!req.headers.cookie) {
      return res.end()
    }

    const cookie = parseCookie(req)
    if (!cookie.access && !cookie.refresh) {
      return res.end()
    }

    try {
      const { access, refresh } = cookie
      // Get the user's data from the API with the access token
      const data = await rotateToken(`${API_URL}/api/user/me/`, access, refresh)

      // Return the user's data to the client if  the request was successful
      response(res, 200, true, 'User is logged in', data)
    } catch (err) {
      setCookies(res, '', '')
      response(res, 401, false, 'User is not logged in')
    }
  }
}

export default user

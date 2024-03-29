import { API_URL } from '@lib/constants'
import { response, parseCookie, setCookies, tokenExpired } from '@lib/helpers'
import { getRequest, postRequest } from '@lib/requests'

const user = async (req, res) => {
  if (req.method === 'GET') {
    // If there is no cookie, end the request
    let access
    const url = `${API_URL}/api/user/me/`
    const refreshUrl = `${API_URL}/api/token/refresh/`
    if (!req.headers.cookie) {
      return res.end()
    }

    const cookie = parseCookie(req)
    if (
      (!cookie.access && !cookie.refresh) ||
      (cookie.access === '' && cookie.refresh === '')
    ) {
      return res.end()
    }

    if (tokenExpired(cookie.access)) {
      if (tokenExpired(cookie.refresh)) {
        setCookies(res, '', '')
        response(res, 401, false, 'Token expired')
      }
      const { access: refreshedAccess } = await postRequest(refreshUrl, {
        refresh: cookie.refresh,
      })
      setCookies(res, refreshedAccess, cookie.refresh)
      access = refreshedAccess
    }

    try {
      if (!access) {
        access = cookie.access
      }
      const data = await getRequest(url, access)
      // Return the user's data to the client if  the request was successful
      response(res, 200, true, 'User is logged in.', data)
    } catch (err) {
      setCookies(res, '', '')
      response(res, 401, false, 'User is not logged in')
    }
  }
}

export default user

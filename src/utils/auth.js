const AccessTokenKey = 'Access-Token-Key'

export function getToken () {
  return localStorage.getItem(AccessTokenKey)
}

export function setToken (token) {
  return localStorage.setItem(AccessTokenKey, token)
}

export function removeToken () {
  return localStorage.removeItem(AccessTokenKey)
}

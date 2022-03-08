import axios from 'axios'

const parseJSON = (resp: any) => (resp.json ? resp.json() : resp)

const checkStatus = (resp: any) => {
  if (resp.status >= 200 && resp.status < 300) {
    return parseJSON(resp)
  }
  throw new Error(resp)
}

export const getApiUrl = (path = '') => {
  const url = new URL(path, process.env.REACT_API_BASE_URL)
  return url.href
}

export async function insecureFetchFromAPI(path = '') {
  const requestURL = getApiUrl(path)
  const res = await axios
    .get(requestURL, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(checkStatus)
    .catch((error) => error)

  return res
}

export async function insecurePatchFromAPI(path = '') {
  const requestURL = getApiUrl(path)
  const res = await axios
    .patch(requestURL, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(checkStatus)
    .catch((error) => error)

  return res
}

export async function insecurePostToAPI(path = '') {
  const requestURL = getApiUrl(path)
  const res = await axios
    .post(requestURL, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(checkStatus)
    .catch((error) => error)

  return res
}

export async function insecureDeleteToAPI(path = '') {
  const requestURL = getApiUrl(path)
  const res = await axios
    .delete(requestURL, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(checkStatus)
    .catch((error) => error)

  return res
}

export async function fetchFromAPI(token: string, path: string) {
  const requestURL = getApiUrl(path)
  const res = await axios
    .get(requestURL, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then(checkStatus)
    .catch((error) => error)
  return res
}

export async function postToAPI(token: string, path: string) {
  const requestURL = getApiUrl(path)
  const res = await axios
    .post(requestURL, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then(checkStatus)
    .catch((error) => error)
  return res
}

export async function patchToAPI(token: string, path: string) {
  const requestURL = getApiUrl(path)
  const res = await axios
    .patch(requestURL, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then(checkStatus)
    .catch((error) => error)
  return res
}

export async function deleteToAPI(token: string, path: string) {
  const requestURL = getApiUrl(path)
  const res = await axios
    .delete(requestURL, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then(checkStatus)
    .catch((error) => error)
  return res
}

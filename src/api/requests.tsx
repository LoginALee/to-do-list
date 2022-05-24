import axios, { AxiosPromise, AxiosResponse } from 'axios'

const checkStatus = (resp: AxiosResponse) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp
  }
  throw new Error(resp.statusText)
}

export const getApiUrl = (path = '') => {
  const url = new URL(path, process.env.REACT_API_BASE_URL)
  return url.href
}

export async function insecureFetchFromAPI(path = ''): Promise<AxiosPromise> {
  const requestURL = getApiUrl(path)
  const res = await axios
    .get(requestURL, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(checkStatus)

  return res
}

export async function insecurePatchFromAPI(
  data: unknown,
  path = '',
): Promise<AxiosPromise> {
  const requestURL = getApiUrl(path)
  const res = await axios
    .patch(requestURL, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(checkStatus)

  return res
}

export async function insecurePostToAPI(
  data: unknown,
  path = '',
): Promise<AxiosPromise> {
  const requestURL = getApiUrl(path)
  const res = await axios
    .post(requestURL, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(checkStatus)

  return res
}

export async function insecureDeleteToAPI(path = ''): Promise<AxiosPromise> {
  const requestURL = getApiUrl(path)
  const res = await axios
    .delete(requestURL, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(checkStatus)

  return res
}

export async function fetchFromAPI(
  token: string,
  path: string,
): Promise<AxiosPromise> {
  const requestURL = getApiUrl(path)
  const res = await axios
    .get(requestURL, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then(checkStatus)

  return res
}

export async function postToAPI(
  token: string,
  path: string,
  data: unknown,
): Promise<AxiosPromise> {
  const requestURL = getApiUrl(path)
  const res = await axios
    .post(requestURL, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then(checkStatus)

  return res
}

export async function patchToAPI(
  token: string,
  path: string,
  data: unknown,
): Promise<AxiosPromise> {
  const requestURL = getApiUrl(path)
  const res = await axios
    .patch(requestURL, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then(checkStatus)

  return res
}

export async function deleteToAPI(
  token: string,
  path: string,
): Promise<AxiosPromise> {
  const requestURL = getApiUrl(path)
  const res = await axios
    .delete(requestURL, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then(checkStatus)

  return res
}

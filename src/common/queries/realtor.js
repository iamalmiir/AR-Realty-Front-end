export const getRealtorData = async (url) => {
  const res = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
  })
  const data = await res.json()
  return data
}

export const fetchRealtors = async (url) => {
  const res = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
  })
  const realtors = await res.json()
  return realtors
}

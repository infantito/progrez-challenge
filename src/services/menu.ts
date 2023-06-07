import type { Menu } from '@types'
import { API_DOMAIN } from '@constants'

async function fetchMenuApi() {
  const pathname = `${API_DOMAIN}/api`

  const response = await fetch(pathname, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })

  const json = await response.json()

  return json as Menu[]
}

export { fetchMenuApi }

function makeQueryClient() {
  const fetchMap = new Map<string, Promise<unknown>>()

  function queryClient<QueryResult>(queryKey: string, query: () => Promise<QueryResult>) {
    if (!fetchMap.has(queryKey)) {
      fetchMap.set(queryKey, query())
    }

    return fetchMap.get(queryKey) as Promise<QueryResult>
  }

  return queryClient
}

const queryClient = makeQueryClient()

export default queryClient

import { queryOptions, useQuery } from '@tanstack/react-query'
import { request } from 'graphql-request'

import { graphql } from '@/lib/gql'

const GetPostsDocument = graphql(`
  query GetPosts {
    posts {
      id
      title
    }
  }
`)

const postsQueryOptions = queryOptions({
  queryKey: ['posts'],
  queryFn: () => request('https://graphqlplaceholder.vercel.app/graphql', GetPostsDocument),
})

export const useGetPosts = () => {
  const { data, isLoading, error } = useQuery(postsQueryOptions)

  return { data, isLoading, error }
}

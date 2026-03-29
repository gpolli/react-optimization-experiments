import { queryOptions, useQuery } from '@tanstack/react-query'
import { request } from 'graphql-request'

import { graphql } from '@/lib/gql'

import { UseGetPosts } from '../types/hooks'
import { isArrayOfNonNullable } from '../utils/types'

const GetPostsDocument = graphql(`
  query GetPosts {
    posts(first: 10) {
      id
      title
    }
  }
`)

const postsQueryOptions = queryOptions({
  queryKey: ['posts'],
  queryFn: () => request('https://graphqlplaceholder.vercel.app/graphql', GetPostsDocument),
})

export const useGetPosts: UseGetPosts = () => {
  const { data, isLoading, error } = useQuery(postsQueryOptions)

  if (isLoading) {
    return { status: 'LOADING' }
  }

  if (error || !data?.posts || !Array.isArray(data.posts) || !isArrayOfNonNullable(data.posts)) {
    return { status: 'ERROR', error: error instanceof Error ? error : new Error('Data is empty') }
  }

  return { status: 'SUCCESS', data: data.posts }
}

'use client'

import { ChildLeve1 } from '../components/ChildLevel1'
import { Root } from '../components/Root'
import { usePostsContext } from '../hooks/usePostsContext'
import { Components } from '../types/interfaces'

// Needed just for testing purposes --> to render the number of renders of the Parent component
// Without this component, the Prop Drilling version and the Context version would have the same depth
export const ContainerB: Components.ContainerB = () => {
  const { countDisplayRef, nodeRef } = usePostsContext()

  return (
    <Root countDisplayRef={countDisplayRef} name="Context" ref={nodeRef}>
      <ChildLeve1 dataTransferMode="context" />
    </Root>
  )
}

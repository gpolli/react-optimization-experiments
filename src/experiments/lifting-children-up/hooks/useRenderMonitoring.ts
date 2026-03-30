import { useEffect, useRef } from 'react'

// Counts are updated in useEffect (post-commit) and reflect committed-visible renders.
// Example: ContainerA -> Root -> ChildLevel1 -> ChildLevel2 (mount + StrictMode double-effects => shows x2).
// Display is updated via a DOM span ref to avoid state updates during render.
export const useRenderMonitoring = () => {
  const nodeRef = useRef<HTMLDivElement>(null)
  const countDisplayRef = useRef<HTMLSpanElement>(null)
  const countRef = useRef(0)

  useEffect(() => {
    countRef.current += 1

    if (countDisplayRef.current) {
      countDisplayRef.current.textContent = `x${countRef.current}`
    }

    const el = nodeRef.current
    if (!el) return

    el.classList.remove('card-flash-on-render')
    void el.offsetWidth // Force reflow so the browser resets the animation
    el.classList.add('card-flash-on-render')
  })

  return { nodeRef, countDisplayRef }
}

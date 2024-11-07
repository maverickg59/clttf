'use client'
import React, {
  createContext,
  useContext,
  useRef,
  ReactNode,
  RefObject,
} from 'react'

type ScrollContextType = {
  targetRef: RefObject<HTMLDivElement>
  scrollToTarget: () => void
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

type ScrollProviderProps = {
  children: ReactNode
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const targetRef = useRef<HTMLDivElement>(null)

  const scrollToTarget = () => {
    if (typeof window !== 'undefined' && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <ScrollContext.Provider value={{ targetRef, scrollToTarget }}>
      {children}
    </ScrollContext.Provider>
  )
}

export const useScroll = () => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}

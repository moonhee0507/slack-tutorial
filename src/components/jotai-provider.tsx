"use clinet"

import React from "react"
import { Provider } from "jotai"

interface JotaiProviderProps {
  children: React.ReactNode
}

export const JotaiProvider = ({ children }: JotaiProviderProps) => {
  return <Provider>{children}</Provider>
}

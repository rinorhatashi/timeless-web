"use client"

import { I18nProvider } from '@/lib/i18n/context'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <I18nProvider>
      {children}
    </I18nProvider>
  )
} 
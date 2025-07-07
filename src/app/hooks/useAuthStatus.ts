"use client"

import { useEffect, useState } from 'react'
import { auth } from '@/lib/firebase'
import { User, onAuthStateChanged } from 'firebase/auth'

export const useAuthStatus = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return { user, loading }
}

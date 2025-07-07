'use client'
import { User } from 'firebase/auth'

import { useEffect, useState } from 'react'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export default function Home() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [])

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Привет, Swapito 👋</h1>
      {user ? (
        <p>Ты вошёл как: <b>{user.email}</b></p>
      ) : (
        <p>Пользователь не авторизован</p>
      )}
    </main>
  )
}

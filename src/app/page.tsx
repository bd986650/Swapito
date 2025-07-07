"use client"

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged, User } from 'firebase/auth'

export default function Home() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      if (user) {
        router.push('/')
      }
    })
    return () => unsubscribe()
  }, [router])

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

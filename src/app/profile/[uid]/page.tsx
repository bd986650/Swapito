"use client"

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged, User } from 'firebase/auth'

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const params = useParams();
  const uid = params?.uid;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        router.push('/auth')
      }
    })
    return () => unsubscribe()
  }, [router])

  if (!user) return <p>Загрузка...</p>

  return (
    <div className="profile-page">
      <h1>Профиль пользователя</h1>
      <p>Email: {user.email}</p>
      <p>UID: {uid}</p>
    </div>
  )
} 
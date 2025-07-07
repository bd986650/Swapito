"use client"

import { useState } from 'react'
import { User } from 'firebase/auth'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { LoginForm } from '@/features/auth/ui/LoginForm'
import RegisterForm from '@/features/auth/ui/RegisterForm'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  const handleLogout = async () => {
    await signOut(auth)
    setUser(null)
  }

  return (
    <div className="auth-container">
      <h1 className="text-3xl font-bold mb-4">Авторизация</h1>
      <div className="switch-container mb-4">
        <button
          onClick={() => setIsLogin(true)}
          className={`switch-button ${isLogin ? 'active' : ''}`}
        >
          Войти
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`switch-button ${!isLogin ? 'active' : ''}`}
        >
          Зарегистрироваться
        </button>
      </div>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      {user && (
        <div className="mt-4">
          <p>Ты вошел как: <b>{user.email}</b></p>
          <button onClick={handleLogout} className="logout-button">Выйти</button>
        </div>
      )}
    </div>
  )
} 
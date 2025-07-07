"use client"

import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex gap-4 p-4 border-b mb-8">
      <Link href="/">Главная</Link>
      <Link href="/auth">Вход/Регистрация</Link>
      <Link href="/items">Товары</Link>
      <Link href="/profile/1">Профиль</Link> {/* UID можно динамически подставлять */}
    </header>
  )
}

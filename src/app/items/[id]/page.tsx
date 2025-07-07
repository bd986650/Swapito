"use client"

import { useParams } from 'next/navigation'

export default function ItemPage() {
  const params = useParams();
  const id = params?.id;

  return (
    <div>
      <h1>Страница товара</h1>
      <p>ID товара: {id}</p>
    </div>
  )
} 
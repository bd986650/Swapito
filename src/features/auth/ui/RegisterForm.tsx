import { useState } from 'react'
import { auth } from '@/lib/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      // Redirect or update UI after registration
    } catch (error) {
      setError('Ошибка при регистрации')
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="password" className="block">Пароль</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded">Зарегистрироваться</button>
    </form>
  )
}

export default RegisterForm

'use client'

import { useForm } from 'react-hook-form'

export default function Home() {
  const { register, handleSubmit } = useForm()

  return (
    <div>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit((data) => {
          alert(JSON.stringify(data))
        })}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="aug@email.com"
          {...register('email')}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Test123!"
          {...register('paassword')}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

'use client'
import { type SubmitHandler, useForm } from 'react-hook-form'

type TInput = {
  email: string
  password: string
}

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TInput>()
  const onSubmit: SubmitHandler<TInput> = (data) => {
    console.log(data)
  }
  console.log(watch('password'))
  return (
    <div>
      <form onSubmit={() => handleSubmit(onSubmit)}>
        <input type="text" {...register('email')} />
        <input type="password" {...register('password', { required: true })} />
        {errors.password != null && <span>Password field is required</span>}
        <input type="submit" />
      </form>
    </div>
  )
}

'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({ email: z.string().email() });

type FormData = z.infer<typeof schema>;

export default function NewsletterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (data: FormData) => {
    console.log('subscribe', data.email);
    setSubmitted(true);
  };
  if (submitted) return <p>Thanks for subscribing!</p>;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
      <input type="email" placeholder="you@example.com" {...register('email')} className="border p-2" />
      <button type="submit" className="border p-2">Join</button>
      {errors.email && <span className="text-red-500 text-sm">Invalid email</span>}
    </form>
  );
}

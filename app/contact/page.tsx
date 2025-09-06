'use client';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log('contact', data);
  };
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      {isSubmitSuccessful ? (
        <p>Thanks for reaching out! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 max-w-md">
          <input
            {...register('name', { required: true })}
            placeholder="Name"
            className="w-full border p-2"
          />
          {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
          <input
            type="email"
            {...register('email', { required: true })}
            placeholder="Email"
            className="w-full border p-2"
          />
          {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
          <textarea
            {...register('message', { required: true })}
            placeholder="Message"
            className="w-full border p-2"
            rows={5}
          />
          {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
          <button type="submit" className="border p-2">Send</button>
        </form>
      )}
    </div>
  );
}

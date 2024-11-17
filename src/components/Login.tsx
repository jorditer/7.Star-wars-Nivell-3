import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="rounded-lg bg-white m-10 py-7 px-9 w-[40%] mx-auto">
      <h1 className="text-3xl mb-4 text-stone-900 font-medium">Enter your email to continue</h1>
      <p className="mb-6 text-stone-800">Log in with your account. If you don't have one, you will be prompted to create one</p>
      <form action="post" onSubmit={handleSubmit} >
      <input
        onChange={e=>setEmail(e.target.value)}
        type="email"
        name="email"
        id="email"
        className="border border-gray-300 p-2 mb-6 w-full rounded-lg"
        placeholder="Enter your email"
      />
      <button className="bg-yellow-500 py-3 rounded-2xl w-2/4 mx-auto block hover:ring-2 hover:ring-yellow-400 active:ring-0 hover:shadow-lg" value={email} type="submit">Continue</button>

      </form>
    </div>
  );
}

export default Login;
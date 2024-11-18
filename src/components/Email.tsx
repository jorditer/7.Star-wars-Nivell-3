import { useState } from 'react';

const Email = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="form">
      <h1 className="form-text">Enter your email to continue</h1>
      <p className="form-p">Log in with your account. If you don't have one, you will be prompted to create one</p>
      <form action="post" onSubmit={handleSubmit} >
      <input
        onChange={e=>setEmail(e.target.value)}
        type="email"
        name="email"
        id="email"
        className="login"
        placeholder="Enter your email"
      />
      <button className="submit" value={email} type="submit">Continue</button>
      </form>
    </div>
  );
}

export default Email;
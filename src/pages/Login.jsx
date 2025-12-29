import { Card } from '../components/Card';

export default function Login() {
  return (
    <Card>
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <label>Email Address</label>
      <input />
      <label>Password</label>
      <input type="password" />
      <button className="disabled">Login</button>
    </Card>
  );
}

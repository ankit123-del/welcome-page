import { Card } from '../components/Card';

export default function Register() {
  return (
    <Card>
      <h2>Create your PopX account</h2>
      {[
        'Full Name',
        'Phone number',
        'Email address',
        'Password',
        'Company name',
      ].map((l) => (
        <div key={l}>
          <label>{l}</label>
          <input type={l === 'Password' ? 'password' : 'text'} />
        </div>
      ))}
      <p>Are you an Agency?</p>
      <label>
        <input type="radio" name="a" defaultChecked /> Yes
      </label>
      <label>
        <input type="radio" name="a" /> No
      </label>
      <button className="primary">Create Account</button>
    </Card>
  );
}

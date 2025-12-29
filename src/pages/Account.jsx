import { Card } from '../components/Card';

export default function Account() {
  return (
    <Card>
      <h3>Account Settings</h3>
      <div className="profile">
        <img src="https://i.pravatar.cc/100" alt="profile" />
        <div>
          <strong>Marry Doe</strong>
          <small>Marry@gmail.com</small>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
    </Card>
  );
}

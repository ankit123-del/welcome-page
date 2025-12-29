import { Link } from "react-router-dom";
import { Card } from "../components/Card";

export default function Welcome() {
  return (
    <Card>
      <div className="dots">
        <span className="dot d6">6</span>
        <span className="dot d1">1</span>
        <span className="dot d2">2</span>
        <span className="dot d3">3</span>
        <span className="dot d4">4</span>
        <span className="dot d5">5</span>
      </div>

      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <Link to="/register">
        <button className="primary">Create Account</button>
      </Link>

      <Link to="/login">
        <button className="secondary">Already Registered? Login</button>
      </Link>
    </Card>
  );
}

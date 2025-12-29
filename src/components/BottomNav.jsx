import { Link, useLocation } from 'react-router-dom';

const steps = ['/', '/login', '/register', '/account'];

export default function BottomNav() {
  const location = useLocation();
  const currentIndex = steps.indexOf(location.pathname);

  return (
    <div className="bottom-nav">
      <Link to="/">
        <span className="icon">🏠</span>
      </Link>

      <Link to={steps[currentIndex - 1] || steps[currentIndex]}>
        <span className="icon">‹</span>
      </Link>

      <span className="step">
        {currentIndex + 1} of {steps.length}
      </span>

      <Link to={steps[currentIndex + 1] || steps[currentIndex]}>
        <span className="icon">›</span>
      </Link>
    </div>
  );
}

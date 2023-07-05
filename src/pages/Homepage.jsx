import AppNav from '../components/AppNav';
import PageNav from '../components/PageNav';
import { Link } from 'react-router-dom';
function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1 className="test">Worldwise</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Homepage;
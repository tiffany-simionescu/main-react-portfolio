import { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./pages'));
const ContactPage = lazy(() => import('./pages/contact'));

function App() {
  return (
    <Suspense fallback={
      <div style={{ margin: "20px auto" }}>
        *~ Tiffany Simionescu's Portfolio ~*
      </div>
    }>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={ContactPage} exact />
      </Switch>
    </Router>
  </Suspense>
  );
}

export default App;

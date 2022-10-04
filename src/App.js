/*
I have included the SCSS and bootstrap library by using the npm.
and in this page there is only one component included 
i.e allrouting(where we have done our routing of every page).
*/
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import AllRouting from './AllRouting';

function App() {
  return (
    <div>
      <AllRouting />
    </div>
  );
}

export default App;

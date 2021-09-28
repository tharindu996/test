

import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';
import NavBar from './NavBar';
import BookList from './BookList';
import { EditBook } from './EditBook';
import { CreateBook } from './CreateBook';
import BookDetails from './BookDetails';
import Download from './test/Download';

function App() {


  return (
    <div >
    <NavBar  />
       <Switch>
     <Route exact path="/"> <BookList /> </Route>
     <Route  path="/edit/:id"> <EditBook /> </Route>
     <Route   path="/create"> <CreateBook /> </Route>
     <Route   path="/book/:id"> <BookDetails /> </Route>
     <Route   path="/download"> <Download /> </Route>
    
    </Switch>
    </div>
   
  );
}

export default App;

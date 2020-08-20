import React from 'react';
import SearchPane from './panels/SearchPane';
import WishListPane from './panels/WishListPane';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My Good Reads
      </header>
      <main>
        <div className="container">
          <div className="row pt-1">
            <div className="col-md-8">
              <SearchPane />
            </div>
            <div className="col-md-4">
              <WishListPane />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

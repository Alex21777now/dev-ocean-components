import logo from './logo.svg';
import './App.css';
import UsersData from './UsersData';
import {BootstrapTable,
  TableHeaderColumn} from 'react-bootstrap-table';
import Table from 'react-table';
import styled from 'styled-components';

const Styles = styled.div`
padding: 1rem;

table {
border-spacing: 0;
border: 1px solid black;

tr {
 :last-child {
   td {
     border-bottom: 0;
   }
 }
}

th,
td {
 margin: 0;
 padding: 1rem;
 border-bottom: 1px solid black;
 border-right: 1px solid black;

 :last-child {
   border-right: 0;
 }
}
}
`

function App() {
  /*  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );  */
    return (
      
        <div className="App">
          ТОШО НАДО
          {console.log(UsersData)}
          
        </div>
  
    );
    }
  
  export default App;

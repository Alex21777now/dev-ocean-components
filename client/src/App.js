import logo from './logo.svg';
import './App.css';
import UsersData from './UsersData';
import users from './Users';
import products from './Products';
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

form {
  border-spacing: 0;
  border: 1px solid gray;
  background-color: lightgreen;
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
        <>
        <div className="App">
         {/* ТОШО НАДО*/}
         *
          {console.log(products)}
          <br/>
          <br/>
          <br/>
          <br/>
          <h3><strong>Products</strong></h3>
      {/*<button onClick={() => props.addSlide()}>add slide</button>*/}
    
      <div>

      <Styles>
      {/*<table style={{ allign: 'center', display: 'inline-block' }}>*/}



{/*<table class="table table-striped">

<thead>
  <tr>
    <th></th>
    <th>Title</th>
    <th>Type</th>
    <th>When</th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>1</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Larry</td>
    <td>Bird</td>
    <td>@twitter</td>
  </tr>
</tbody>

</table> */}



{/*<table class="table table-striped">

<thead>
  <tr>
    <th></th>
    <th>FirstName</th>
    <th>LastName</th>
    <th>MaidenName</th>
    <th>Age</th>
    <th>Gender</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Username</th>
    <th>Password</th>
    <th>BirthDate</th>
    <th>Image</th>
    <th>BloodGroup</th>
    <th>Height</th>
    <th>Weight</th>
    <th>EyeColor</th>
    <th>Hair</th>
    <th>Domain</th>
    <th>ip</th>
    <th>Address</th>
    <th>MacAddress</th>
    <th>University</th>
    <th>Bank</th>
    <th>Company</th>
    <th>ein</th>
    <th>ssn</th>
    <th>UserAgent</th>
  </tr>
 
</thead>



<tbody>

{ 
users.map(dat1 => (
      
  <tr key={dat1.id}>

      <td>{dat1.id}</td>
      <td>{dat1.firstName}</td>
      <td>{dat1.lastName}</td>
      <td>{dat1.maidenName}</td>
      <td>{dat1.age}</td>
      <td>{dat1.gender}</td>
      <td>{dat1.email}</td>
      <td>{dat1.phone}</td>
      <td>{dat1.username}</td>
      <td>{dat1.password}</td>
      <td>{dat1.birthDate}</td>
      <td>{dat1.image}</td>
      <td>{dat1.bloodGroup}</td>
      <td>{dat1.height}</td>
      <td>{dat1.weight}</td>
      <td>{dat1.eyeColor}</td>
      <td>{dat1.hair}</td>
      <td>{dat1.domain}</td>
      <td>{dat1.ip}</td>
      <td>{dat1.address}</td>
      <td>{dat1.macAddress}</td>
      <td>{dat1.university}</td>
      <td>{dat1.bank}</td>
      <td>{dat1.company}</td>
      <td>{dat1.ein}</td>
      <td>{dat1.ssn}</td>
      <td>{dat1.userAgent}</td>

      </tr>       
 ))

}
</tbody>    

</table> */}


<table class="table table-striped">

<thead>
  <tr>
    <th></th>
    <th>Title</th>
    <th>Description</th>
    <th>Price</th>
    <th>DiscountPercentage</th>
    <th>Rating</th>
    <th>Stock</th>
    <th>Brand</th>
    <th>Category</th>
    <th>Thumbnail</th>
    
  </tr>
 
</thead>



<tbody>

{ 
products.map(dat1 => (
      
  <tr key={dat1.id}>

      <td>{dat1.id}</td>
      <td>{dat1.title}</td>
      <td>{dat1.description}</td>
      <td>{dat1.price}</td>
      <td>{dat1.discountPercentage}</td>
      <td>{dat1.rating}</td>
      <td>{dat1.stock}</td>
      <td>{dat1.brand}</td>
      <td>{dat1.category}</td>
      <td>{dat1.thumbnail}</td>

      </tr>       
 ))

}
</tbody>    

</table>


      </Styles>

        <p>&nbsp;</p>
        <br/><br/>
      </div>


      {/*<h3>Form <br/><br/>(edit a <strong>User</strong>)</h3>*/}
      <Styles>
      <form class="row g-3">
      <h3><strong>Form</strong><br/><br/>(edit a <strong>Product</strong>)</h3>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">UPDATE a Product</button>
    <p></p>
  </div>
</form>
</Styles>     


        </div>
        </>
    );
    }
  
  export default App;

import React, { useRef ,useState} from 'react';
import './App.css';
import { Form, Button,Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const [state,setState]=useState()
  const Name = useRef(null);
  const Age = useRef(null);
  const Email = useRef(null);
  const City = useRef(null);
  // const Gender = useRef(null);
  const info = useSelector((state) => state.validator)
  console.log(info)
  const dispatch = useDispatch()
  const handle=(event)=>{
    setState(event.target.value)


  };
  return (
    <div className="container my-3" style={{backgroundColor:"lightblue"}}>
      <h3 className="text-center">Registration From </h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" ref={Name} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control placeholder="Enter your age" ref={Age} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={Email} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>City</Form.Label>
          <Form.Control placeholder=" Enter your city" ref={City} />
        </Form.Group>

       <p>Gender</p>
        <div className="form-group">
            <input type="radio" name="gen" value="Female" onClick={handle} />Female<br />
            <input type="radio" name="gen" value="Male" onClick={handle} />Male<br />
            <input type="radio" name="gen" value="Others" onClick={handle} />Others<br />
          </div>

        <Button variant="primary" type="button" onClick={() => dispatch({ type: 'VAL', payload: { Name: Name.current.value, Age: Age.current.value, Email: Email.current.value, City: City.current.value,Gender: state } })}>
          Submit
        </Button>
      </Form>
      <hr />
      <Table striped bordered hover script={{backgroundColor:"green"}}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>First Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>City</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
        {info.validateData.map((data,index) =>
          
            <tr>
              <th>{index+1}</th>
              <th>{data.Name}</th>
              <th>{data.Age}</th>
              <th>{data.Email}</th>
              <th>{data.City}</th>
              <th>{data.Gender}</th>

            </tr>
          

        )}
        </tbody>
        </Table>
      

    </div>
  );
}

export default App;

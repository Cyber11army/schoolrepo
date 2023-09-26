import axios from "axios";
import { useEffect, useState} from "react";

function Staff() {
  const [_id, setId] = useState("");
  const [name, setName] = useState("");
  const [Job, setJob] = useState("");
  const [phone, setMobile] = useState("");
  const [employees, setUsers] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get("http://localhost:8000/user/getAll");
    setUsers(result.data.data);
    console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/user/create", {
        name: name,
        Job: Job,
        phone: phone,
      });
      alert("Employee Registation Successfully");
      setId("");
      setName("");
      setJob("");
      setMobile("");
      Load();
    } catch (err) {
      alert("User Registation Failed");
    }
  }
  async function editEmployee(employees) {
    setName(employees.name);
    setJob(employees.Job);
    setMobile(employees.phone);

    setId(employees._id);
  }

  async function DeleteEmployee(_id) {
    await axios.delete("http://localhost:8000/user/delete/" + _id);
    alert("Employee deleted Successfully");
    Load();
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.patch(
        "http://localhost:8000/user/update/" +
          employees.find((u) => u._id === _id)._id || _id,
        {
          _id: _id,
          name: name,
          Job: Job,
          phone: phone,
        }
      );
      alert("Registation Updateddddd");
      setId("");
      setName("");
      setJob("");
      setMobile("");
      Load();
    } catch (err) {
      alert(err);
    }
  }
  
 
  return (
    <>
          
    <div>
    <section className="py-4 text-dark" id="bg-info">
        <div className="contaimer">
            <div className="row">
                <div className="col-md-4 my-auto">
                        <h4>Welcome Admin</h4>
                </div>

            </div>

        </div>
    </section>
    <br/>
      <h3 className="main-heading text-center">Update Staff Details</h3>
      <div className="underline mx-auto"></div>
      <div class="container mt-4">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="_id"
              hidden
              value={_id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
            <label><strong>Employee Name</strong></label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter Employee Name..."
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label><strong>Job</strong></label>
            <input
              type="text"
              class="form-control"
              id="Job"
              placeholder="Enter Occupation..."
              value={Job}
              onChange={(event) => {
                setJob(event.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label><strong>Mobile</strong></label>
            <input
              type="text"
              class="form-control"
              id="phone"
              placeholder="Enter Phone no. ..."
              value={phone}
              onChange={(event) => {
                setMobile(event.target.value);
              }}
            />
          </div>

          <div>
            <button class="btn btn-primary mt-4" onClick={save}>
              Register
            </button>
            <button class="btn btn-warning mt-4" onClick={update}>
              Update
            </button>
          </div>
          <hr/>
        </form>
      </div>
      
      <div className="table-responsive-sm ">
      <table className="table table-dark " align="center">
        <thead>
          <tr className="table-responsive-sm text-responsive" >
            {/* <th class="text-responsive" scope="col">Employee Id</th> */}
            <th className="text-responsive" scope="col">Employee Name</th>
            <th className="text-responsive" scope="col">Employee Job</th>
            <th className="text-responsive" scope="col">Employee Mobile</th>

            <th scope="col">Option</th>
          </tr>
        </thead>
        {employees.map(function fn(employee) {
          return (
            <tbody>
              <tr className="table-responsive-sm text-responsive">
                {/* <th scope="row">{employee._id} </th> */}
                <td className="text-responsive">{employee.name}</td>
                <td className="text-responsive">{employee.Job}</td>
                <td className="text-responsive">{employee.phone}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-warning btn-sm"
                    onClick={() => editEmployee(employee)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm"
                    onClick={() => DeleteEmployee(employee._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      </div>
      <br/>
      
    </div>
    </>
  );
}


export default Staff;

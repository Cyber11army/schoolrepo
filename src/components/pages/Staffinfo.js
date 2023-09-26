import axios from "axios";
import { useEffect, useState } from "react";


function Staffinfo() {
  const [employees, setUsers] = useState([]);


  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get("http://localhost:8000/user/getAll");
    setUsers(result.data.data);
    console.log(result.data);
  }

 
  


  return (
    <div>
      <h3 className="main-heading text-center">Staff Details</h3>
      <div className="underline mx-auto"></div>
      <br/>
      <section className="VMC">
      <div className="table-responsive-sm ">
      <table className="table " align="center">
        <thead className="table-dark">
          <tr className="table-responsive-sm text-responsive" >
            {/* <th class="text-responsive" scope="col">Employee Id</th> */}
            <th className="text-responsive" scope="col">Employee Name</th>
            <th className="text-responsive" scope="col">Employee Job</th>
            <th className="text-responsive" scope="col">Employee Mobile</th>

          </tr>
        </thead>
        {employees.map(function fn(employee) {
          return (
            <tbody className="VMC">
              <tr className="table-responsive-sm text-responsive">
                {/* <th scope="row">{employee._id} </th> */}
                <td className="text-responsive"><strong>{employee.name}</strong></td>
                <td className="text-responsive"><strong>{employee.Job}</strong></td>
                <td className="text-responsive"><strong>{employee.phone}</strong></td>
                
              </tr>
            </tbody>
          );
        })}
      </table>
      </div>
      <br/>
      </section>
    </div>
  );
}

export default Staffinfo;

import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

interface Employee {
  id: number;
  namee: string;
  email: string;
  phone: string;
  department: string;
}

const Dashboard = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/employee");
        const data = await response.json();

        setEmployees(data);
      } catch (error) {
        if (error instanceof Error) console.error(error.message);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center">Employees</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.namee}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.department}</td>
                  <td>
                    <Button variant="outline-secondary">Update</Button>
                    <Button variant="outline-danger">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

import { useState } from "react";
import "./PostUser.css";
import { Button, Form } from "react-bootstrap";

const PostUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="center-form">
        <h1>Post New Employee</h1>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Control
              type="text"
              name="phone"
              placeholder="Enter phone"
              value={formData.phone}
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasiDepartment">
            <Form.Control
              type="text"
              name="department"
              placeholder="Enter department"
              value={formData.department}
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Post Employee
          </Button>
        </Form>
      </div>
    </>
  );
};

export default PostUser;

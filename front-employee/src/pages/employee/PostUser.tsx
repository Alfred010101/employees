import { useState } from "react";
import "./PostUser.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PostUser = () => {
  const [formData, setFormData] = useState({
    namee: "",
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

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error creating employee: ", error.message);
      } else {
        console.error("Error desconocido:", error);
      }
    }
  };

  return (
    <>
      <div className="center-form">
        <h1>Post New Employee</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Control
              type="text"
              name="namee"
              placeholder="Enter name"
              value={formData.namee}
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

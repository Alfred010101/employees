package com.example.back_employee.controller;

import com.example.back_employee.entity.Employee;
import com.example.back_employee.service.EmployeeService;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Alfred
 */
@RestController
@RequestMapping("/api/employee")
@CrossOrigin("*")
public class EmployeeController
{

    @Autowired
    private EmployeeService employeeService;

    @RequestMapping(method = RequestMethod.POST)
    public Employee postEmployee(@RequestBody Employee employee)
    {
        return employeeService.postEmployee(employee);
    }
    
    @RequestMapping(method = RequestMethod.GET)
    public List<Employee> getAllEmployees()
    {
        return employeeService.getAllEmployees();
    }
    
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id)
    {
        try{
            employeeService.deleteEmployee(id);
            return new ResponseEntity<>("Employee with ID: " + id + " deleted successfuly", HttpStatus.OK);
        }catch(EntityNotFoundException e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
}

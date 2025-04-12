package com.example.back_employee.service;

import com.example.back_employee.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import com.example.back_employee.entity.Employee;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author Alfred
 */
@Service
public class EmployeeService
{

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee postEmployee(Employee employee)
    {
        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployees()
    {
        return employeeRepository.findAll();
    }
    
    public void deleteEmployee(Long id)
    {
        if(!employeeRepository.existsById(id))
            throw new EntityNotFoundException("Employee with ID : " + id + " not found");
        
        employeeRepository.deleteById(id);
    }
}

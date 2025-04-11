
package com.example.back_employee.service;

import com.example.back_employee.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import com.example.back_employee.entity.Employee;
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
}

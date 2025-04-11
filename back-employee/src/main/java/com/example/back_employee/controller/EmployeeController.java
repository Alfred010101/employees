
package com.example.back_employee.controller;

import com.example.back_employee.entity.Employee;
import com.example.back_employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Alfred
 */

@RestController
@RequestMapping("/api/employees")
public class EmployeeController
{
    @Autowired
    private EmployeeService employeeService;
    
    @RequestMapping(method = RequestMethod.POST)
    public Employee postEmployee(@RequestBody Employee employee)
    {
        return employeeService.postEmployee(employee);
    }
}

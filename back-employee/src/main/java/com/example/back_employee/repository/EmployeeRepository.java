
package com.example.back_employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.back_employee.entity.Employee;

/**
 *
 * @author Alfred
 */
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>
{
    
}

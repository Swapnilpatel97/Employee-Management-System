package EMS.ems.mapper;

import EMS.ems.dto.EmployeeDto;
import EMS.ems.entity.Employee;

public class EmployeeMapper {

    //mapping employee to employeeDto
    public static EmployeeDto mapToEmployeeDto(Employee employee)
    {
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    //mapping employeeDto to employee
    public static Employee mapToEmployee(EmployeeDto employeeDto)
    {
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }
}

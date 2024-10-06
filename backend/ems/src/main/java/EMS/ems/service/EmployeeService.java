package EMS.ems.service;

import EMS.ems.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {

    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployee();

    EmployeeDto updateEmployee(Long employId, EmployeeDto updatedEmployee);

    void deleteEmployById(Long employeeId);

}

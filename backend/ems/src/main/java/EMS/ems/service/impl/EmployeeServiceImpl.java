package EMS.ems.service.impl;

import EMS.ems.dto.EmployeeDto;
import EMS.ems.entity.Employee;
import EMS.ems.exception.ResourceNotFoundException;
import EMS.ems.mapper.EmployeeMapper;
import EMS.ems.repository.EmployeeRepository;
import EMS.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee =  employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {

        Employee employee = employeeRepository.findById(employeeId).orElseThrow( () ->
                new ResourceNotFoundException("Employee Id Not Exist" + employeeId));

        EmployeeDto employeeDto = EmployeeMapper.mapToEmployeeDto(employee);
        return employeeDto;
    }

    @Override
    public List<EmployeeDto> getAllEmployee() {

        List<Employee>employees = employeeRepository.findAll();
        return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee)
        ).collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employId, EmployeeDto updatedEmployee) {

        Employee employee = employeeRepository.findById(employId)
                .orElseThrow(()-> new ResourceNotFoundException("Id Not Exist" + employId));

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());

       Employee updatedemployeeObject = employeeRepository.save(employee);
       EmployeeDto employeeDto = EmployeeMapper.mapToEmployeeDto(updatedemployeeObject);
       return employeeDto;

    }

    @Override
    public void deleteEmployById(Long employeeId) {

        Employee employee = employeeRepository.findById(employeeId).orElseThrow(()->
                new ResourceNotFoundException("Id Not Exist"+employeeId));

        employeeRepository.deleteById(employeeId);
    }


}

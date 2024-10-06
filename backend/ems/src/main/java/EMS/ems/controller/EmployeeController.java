package EMS.ems.controller;

import EMS.ems.dto.EmployeeDto;
import EMS.ems.mapper.EmployeeMapper;
import EMS.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/create")
    public ResponseEntity<EmployeeDto> createEmployee (@RequestBody() EmployeeDto employeeDto)
    {
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return  new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId)
    {
        EmployeeDto fetchedEmployee = employeeService.getEmployeeById(employeeId);
        return new ResponseEntity<>(fetchedEmployee, HttpStatus.OK);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<EmployeeDto>> getAllEmployee()
    {
        List<EmployeeDto>fetchedEmployee = employeeService.getAllEmployee();
        return new ResponseEntity<List<EmployeeDto>>(fetchedEmployee, HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId,  @RequestBody EmployeeDto updateEmployee)
    {
        EmployeeDto updatedEmployee = employeeService.updateEmployee(employeeId, updateEmployee);
        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEmployeeById(@PathVariable("id") Long employeeId)
    {
        employeeService.deleteEmployById(employeeId);
        return ResponseEntity.ok("Deleted Successfully");
    }

}

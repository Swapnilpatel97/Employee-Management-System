    import React, { useEffect } from 'react'
    import { useState } from 'react'
    import { listEmployees } from '../services/EmployeeService'
    import { useNavigate } from 'react-router-dom'
    import { deleteEmployee } from '../services/EmployeeService'

    const ListEmployeeComponent = () => {
    
        const navigate= useNavigate();
    const [employees, setEmployees] = useState([])

    useEffect(()=>{
        getAllEmployees();
    }, [])

    function getAllEmployees()
    {
        listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee()
    {
            navigate('/add-employee')
    }

    function updateEmployee(id) {
        navigate(`/edit-employee/${id}`)
    }

    function removeEmployee(id)
    {
        console.log(id);
        deleteEmployee(id).then((response)=>
        {
            getAllEmployees();
        }).catch((error) => console.log(error));
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List Of Employees</h2>
            <button type="button" class="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
            <table className='table table-striped table-bordered'>
                <thead> 
                    <tr className='text-center'>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee=>
                            <tr key={employee.id} className='text-center'>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td className='text-center mr-md-5'>
                                    <button className='btn btn-info mb-2' onClick={ () => updateEmployee(employee.id)}>Update</button>
                                    <button className='btn btn-danger mb-2' onClick = {()=> removeEmployee(employee.id)}style={{marginLeft:'10px'}}>Delete</button>
                                </td>
                            </tr>   
                        )
                    }
                </tbody>
            </table>

        </div>
    )
    }

    export default ListEmployeeComponent
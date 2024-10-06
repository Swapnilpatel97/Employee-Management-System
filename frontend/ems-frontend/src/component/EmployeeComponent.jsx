import React, { useEffect } from 'react'
import { useState } from 'react'
import { createEmployees, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'
import { getEmployee } from '../services/EmployeeService'


const EmployeeComponent = () => {

    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[email, setEmail] = useState('')
    const [errors, setErrors] = useState({
        firstName : '',
        lastName : '',
        email : ''
    })

    const{id} = useParams()

    const navigate = useNavigate(); 

    useEffect(()=>{
        if(id)
        {
            getEmployee(id).then((response)=>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.log(error);
            })
        }
    }, [id])

    function validateForm()
    {
        let valid = true;
        const errorCopy = {...errors}

        if(firstName.trim())
        {
            errorCopy.firstName = '';
        }else{
            errorCopy.firstName = 'First Name Required';
            valid = false;
        }

        if(lastName.trim())
        {
            errorCopy.lastName = '';
        }else{
            errorCopy.lastName = 'Last Name Required';
            valid = false;
        }

        if(email.trim())
        {
            errorCopy.email = '';
        }else{
            errorCopy.email = 'Email Required';
            valid = false;
        }


        setErrors(errorCopy);

        return valid;
    }

    function saveOrUpdateEmployee(e) {

        e.preventDefault();

        if(validateForm())
        {
            const employee = { firstName, lastName, email };
            console.log(employee);

            if(id)
            {
                updateEmployee(id, employee).then((response)=>
                {
                    console.log(response.data);
                    navigate('/getAll');
                }).catch((error)=>{
                    console.log('There is error in updating the employ', error);
                })
            }
            else
            {

                createEmployees(employee).then((response) => {
                    console.log(response.data);
                    navigate('/getAll');
                }).catch((error) => {
                    console.error('There was an error creating the employee!', error);
                });
            }
        }
        
    }

    function pageTitle()
    {
        if(id)
        {
            return <h2 className='text-center'>Update Employee</h2>
        }
        else
        {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }
     

  return (
    <div className='container'>
        <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label>First Name:</label>
                            <input className={`form-control ${errors.firstName ? 'is-invalid' : '' }`} type='text' name = 'firstName' placeholder='Enter Employee First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label>Last Name:</label>
                            <input className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} name='lastName' type='text' placeholder='Enter Employee Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}>
                            </input>
                            {
                                errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>
                            }
                        </div>

                        <div className='form-group mb-2'>
                            <label>Email:</label>
                            <input className={`form-control ${errors.email ? 'is-invalid' :''}`} name='email' type='text' placeholder='Enter Employee Email' value={email} onChange={(e) => setEmail(e.target.value)}>
                            </input>
                            {
                                errors.email && <div className='invalid-feedback'>{errors.email}</div>
                            }
                        </div>

                    <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent
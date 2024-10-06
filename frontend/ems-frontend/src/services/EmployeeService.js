import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employees'

export const listEmployees = ()=>{

    return axios.get(REST_API_BASE_URL+'/getAll');
}

export const createEmployees = (employee) =>
{
    console.log(employee);
    return axios.post(REST_API_BASE_URL+'/create', employee);
}   

export const getEmployee = (employeeId) =>
{
    return axios.get(REST_API_BASE_URL+'/id/'+ employeeId);
}

export const updateEmployee = (employeeId, employee) =>
{
    return axios.put(REST_API_BASE_URL+ '/update/'+employeeId, employee);
}

export const deleteEmployee = (employeeId) =>
{
    return axios.delete(REST_API_BASE_URL+'/delete/'+employeeId);
}
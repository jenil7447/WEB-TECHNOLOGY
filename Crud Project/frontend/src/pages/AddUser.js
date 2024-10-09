import React, { useState } from 'react'
import './adduser.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


function AddUser() {
    const[users,setUsers]=useState([])
    const navigate = useNavigate();
    return (
        <div className='adduser'>
            <div class='form-group row'>
                <div className='col-8 my-10px'>
                <Link name='submit' to='/' class='btn btn-secondary'><i class="fa-solid fa-backward"></i>  Back</Link>
                </div>
            </div>
            
            <h3>ADD NEW USER</h3>
            
            <div class='form-group row'>
                <label for='text1' class='col-4 col-form-label'>Name</label>

               <div><input onChange={(e)=>{
                setUsers({...users,name:e.target.value})
               }} type='text' class='form-control'/></div>
            </div>
            <div class='form-group row'>
                <label for='text2' class='col-4 col-form-label'>email</label>
               <div><input onChange={(e)=>{
                setUsers({...users,email:e.target.value})
               }} type='email' class='form-control'/></div>
            </div>
            <div class='form-group row'>
                <label for='text3' class='col-4 col-form-label'>Address</label>
               <div><input onChange={(e)=>{
                setUsers({...users,address:e.target.value})
               }} type='texarea' class='form-control'/></div>
            </div>
            <div class='form-group row' >
                <button name='submit' class='btn btn-primary'
                onClick={()=>{
                    const apiurl = 'http://localhost:3001/users'
                    fetch(apiurl,{
                        method:"POST",
                        body:JSON.stringify(users),
                        headers:{
                            "content-type":"application/json"

                        }
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        navigate('/')
                    })    
                }} >
                    Submit</button>
            </div>
            
        </div>
    )
}

export default AddUser

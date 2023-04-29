import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
  const existingUser = users.filter(f => f.id == id);
  const {name , email} = existingUser[0];
  const [uname, setName] = useState(name)
  const [uemail, setEmail] = useState(email)

    

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Update user</h3>
        <form >
            <div>
                <label htmlfor="name">Name:  </label>
                <input type="text" name='name' className='form-control' placeholder='enter name'
             value={uname} />
        
            </div>
            <div>
                <label htmlfor="name">Email:  </label>
                <input type="email" email='email' className='form-control' placeholder='enter email'
             value={uemail}  />
              
            </div> <br/>
            <button className='btn btn-info'>Submit</button>
        </form>
    </div>
</div>
  )
}

export default Update
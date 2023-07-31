import React from 'react';
import { Link } from 'react-router-dom';

import * as Input from '../index';

const Login: React.FC = () => {
  return (
    <>
      <div
        className='card mx-auto'
        style={{ maxWidth: '380px', marginTop: '200px' }}
      >
        <div className='card-body'>
          <h4 className='card-title mb-4'>Sign in</h4>
          {/* feedback et message d'erreurs */}
          <form name='login'>
            {/* 
          <a href="#" className="btn btn-facebook btn-block mb-2"> <i className="fab fa-facebook-f"></i> &nbsp  Sign in with Facebook</a>
          <a href="#" className="btn btn-google btn-block mb-4"> <i className="fab fa-google"></i> &nbsp  Sign in with Google</a> 
          */}
            <div className='form-group' style={{ marginBottom: 0 }}>
              <Input.Email
                label='Email'
                style={{ padding: 0 }}
                onChange={() => null}
              />
            </div>
            <div className='form-group'>
              <Input.Password
                label='Password'
                name='password'
                style={{ padding: 0 }}
                onChange={() => null}
              />
            </div>
            <div className='form-group'>
              <Input.Checkbox>Remember</Input.Checkbox>
            </div>
            <div className='form-group'>
              <Input.Submit classNamees='btn-primary btn-block' title='Login' />
            </div>
          </form>
        </div>
      </div>
      <p className='text-center mt-4'>
        Don't have account? <Link to='/register'>Sign Up</Link>
      </p>
      <br />
      <br />
    </>
  );
};

export default Login;

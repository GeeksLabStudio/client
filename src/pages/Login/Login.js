import React from 'react';
import {Link} from 'react-router';

export default class LoginPage extends React.Component {

  formSubmitHandler(e){
    e.preventDefault();
    console.log(e)
  }

  render() {
    return <div>
        <h2>Sign In</h2>

        <form onSubmit={::this.formSubmitHandler} name="login" novalidate="">
            <div>
                 <label for="username">
                      Username
                 </label>
                 <input type="text" name="username" id="username" required="required" />
            </div>


            <div>
                 <label for="password">
                      Password
                 </label>
                 <input type="password" name="password" id="password" required="required" />
            </div>


            <div>

                 <div>
                      <input type="checkbox" name="remember" />
                      <span>
                           Remember me
                      </span>
                      <br />
                 </div>
            </div>


            <div id="login-submit">
                 <input type="submit" value="Sign In" />
            </div>
       </form>

    </div>
  }
}
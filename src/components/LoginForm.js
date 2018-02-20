'use strict';

import JSXComponent from 'metal-jsx';

class LoginForm extends JSXComponent {
    render (){
        return (
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        );
    }
}

export default LoginForm;

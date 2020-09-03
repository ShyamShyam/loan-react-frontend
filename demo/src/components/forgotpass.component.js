import React, {Component} from "react";
export default class ForgotPass extends Component{
    render(){
        return(
            <div class="auth-inner">
                <form>
                    <h3>Forgot Password</h3>
                        <div className="form-group">
                            <label>New Password</label>
                            <input type="password" className="form-control" placeholder="Enter New Password" />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Enter Confirm Password" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        );
    }
}

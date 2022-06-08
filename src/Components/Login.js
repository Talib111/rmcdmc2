//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - Login
//    DESCRIPTION - Login Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'

function Login() {
    return (
        <>
            <div id="container" className="cls-container">
                <div id="bg-overlay"></div>
                <div className="cls-content">
                    <div className="cls-content-sm panel">
                        <div className="panel-body">
                            <div className="mar-ver pad-btm">
                                <h1 className="h1">LOGIN</h1>
                            </div>
                            <form method="post" action="<?=base_url('Login/index');?>">
                                <div className="form-group text-danger">
                                  
                                </div>
                                <input type="hidden" id="ip_address" name="ip_address" value="" />
                                <div className="form-group">
                                    <input type="text" id="user_name" name="user_name" className="form-control" placeholder="Username" maxLength="50" value="<?=!empty($_POST) && isset($_POST['user_name'])?set_value('user_name'):''?>" autoFocus />
                                </div>
                                <div className="input-group mar-btm">
                                    <input type="password" id="user_pass" name="user_pass" className="form-control" maxLength="50" placeholder="Password" required />
                                    <span className="input-group-addon" id="passToggle" style="cursor: pointer;"><i className="fa fa-eye"></i></span>
                                </div>
                                <div className="input-group mar-btm">
                                    <span className="input-group-btn" id="loginCaptcha">
                                        <img src='<?=loginCaptcha();?>' />
                                    </span>
                                    <span className="input-group-btn">
                                        <i className="fa fa-refresh" style="font-size: 32px; margin-top: 10px; cursor: pointer;" onClick='function refrechLoginCaptcha() {$("#loginCaptcha").html("<h4>Please Wait...</h4>"); $.ajax({url: "<?=base_url()."/login/refrechLoginCaptcha";?>", success: function(result){ setCaptchaCode(result); }}); }; refrechLoginCaptcha();'></i>
                                    </span>
                                </div>
                                <div className="form-group">
                                    <input type="number" id="captcha_code" name="captcha_code" className="form-control" placeholder="captcha code" maxLength="4" autoComplete="off" pattern="/^-?\d+\.?\d*$/" onInput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" require />
                                </div>
                                <button type="submit" id="btn_submit" name="btn_submit" className="btn btn-primary btn-lg btn-block">Sign In</button>
                            </form>
                        </div>

                        <div className="pad-all">
                            <a href="<?=base_url();?>/Home/index" className="btn-link mar-rgt">Back To Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
/**
 * Exported to :
 * 
 */
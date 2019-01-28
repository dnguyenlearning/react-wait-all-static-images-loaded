import {Component} from "react";
import WaitImageLoaded from "./react-wait-all-images-loaded";
import BackgroundImage from "assets/images/login-bg-compress.jpg";
import BackgroundImageOverlay from "assets/images/login_background_overlay.png";
import LoginLogoImage from "assets/images/login-logo.png";
import LoginLoadingImageAnimation from "components/utilComponents/login-loading-image-animation";
/**
 * Login Page contains 3 above images. 
 */
let arrImages = [BackgroundImage, BackgroundImageOverlay, LoginLogoImage];

class Login extends Component{
    render(){
        return <WaitImageLoaded
            imagePaths= {arrImages}
            fallback={<LoginLoadingImageAnimation/>}
        >
            <FullPageWrapper>
                <Overlay />
                <LoginForm error={error} loggingIn={loggingIn} login={this.props.actions.login}/>
            </FullPageWrapper>
        </WaitImageLoaded>
    }
}

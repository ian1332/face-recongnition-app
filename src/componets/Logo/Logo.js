import LogoImg from "./brain.png"
import "./Logo.css"
import Tilt from 'react-parallax-tilt';


const Logo=()=>{
    return(
        <Tilt
        className="Tilt"
        options={{ max: 55 }}
        style={{ height: 250, width: 250 }}>

        <div className="logo shadow-2 w4 ma4 br2 h4 grow pa4 mh3">
          <img src={LogoImg} alt="brain logo"/>
        </div>
      </Tilt>
    );
};
export default Logo;
import FormInput from './form/FormInput';
import FormButton from './form/FormButton';

import './Banner.css';


function Banner() {
  return (
    <div className="banner">
      <div className="banner-header">
        <h2>Schedule A Demo</h2>
        <p>Learn More About FloQast.</p>
      </div>
      <div className="banner-content">
        <p className="banner-content-header">Learn How FloQast Can <span>Improve Your Month-End</span></p>
        <form className="banner-form">
          <FormInput type="text" placeholder="First Name*" />
          <FormInput type="email" placeholder="Email*" />
          <FormButton>Schedule Now</FormButton>
        </form>
      </div>
    </div>
  );
}


export default Banner;

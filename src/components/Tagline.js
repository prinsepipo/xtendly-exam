import logo from '../assets/images/logo.png';

import './Tagline.css';


function Tagline() {
  return (
    <div className="tagline">
      <div><img src={logo} alt="logo" /><span className="tagline-text">The</span></div>
      <h1>Fastest, Most Accurate</h1>
      <p className="tagline-text">Way to Close Your Books!</p>
    </div>
  );
}


export default Tagline;

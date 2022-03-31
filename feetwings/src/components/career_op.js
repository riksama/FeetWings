import './career_op.css';

function Career_Output() {
  return (
    <div className="Navbar">
    	<div className='logo'>
			<img src={'/public/feetwings_logo.png'} alt='LOGO' />
      	</div>
      	<div className='Nav_options'>
			<a href='' className='Navlink'>Our Products</a>
			<a href='' className='Navlink'>Insights</a>
			<a href='' className='Navlink'>Smart Yarn</a>
			<a href='' className='Navlink'>About</a>
			<a href='' className='Navlink'>Contact</a>
      	</div>
    </div>
  );
}

export default Career_Output;
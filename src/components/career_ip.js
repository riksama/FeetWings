import './career_ip.css';

function CareerInput() {
  const employment_type = [
    "Full Time",
    "Part Time",
    "Contract",
    "Temporary",
    "Voluntary",
    "Internship",
  ];
  const Job_Section = [
    "Business Systems",
    "Design",
    "Engineering",
    "Finance",
    "Human Resource",
    "Legal",
    "Marketting",
    "Operations",
    "Product",
    "Sales",
    "Security",
    "Support",
  ];
  const workPlace = ["On-site", "Hybrid", "Remote"];
  const options_types = employment_type.map((i) => (
    <option value={i}>{i}</option>
  ));
  const job_types = Job_Section.map((i) => <option value={i}>{i}</option>);
  const workPlace_type = workPlace.map((i) => <option value={i}>{i}</option>);
  return (
    <div className="career_sec">
	    Career Dashboard
      <form>
        <div className='row1'>
        <label>
          <input className="Title_ip" type="text" name="name" placeholder='Title'/>
        </label>
        <select className="Emp_type_ip" >
          <option className="no" value="Full Time">Employment Type (Option Choose)</option>
          {options_types}
        </select>
        </div>
        <div className='row2'>
        <label>
          <input className="Location_ip" type="text" name="name" placeholder='Location'/>
        </label>
        <select className="Emp_type_ip" >
          <option className="no" value="Full Time">Job Section (Option Choose)</option>
          {job_types}
        </select>
        <select className="Emp_type_ip" >
          <option className="no" value="Full Time">Workplace Type (Option Choose)</option>
          {workPlace_type}
        </select>
        <select className="Emp_type_ip" >
          <option className="no" value="Full Time">Paid/Gratis (Option Choose)</option>
          <option value="Paid">Paid</option>
          <option value="Gratis">Gratis</option>
        </select>
        </div>
        <section className='description_sec'>
          <button className='add_skill_btn'>Add skill  +</button>

        </section>
        <input className="Submit_btn" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CareerInput;
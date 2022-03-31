import './career_ip.css';

function Career_Input() {
  return (
    <div className="career_sec">
	    Career Dashboard
      <form>
        <label>
          <input className="Title_ip" type="text" name="name" placeholder='Title'/>
        </label>
        <select className="Emp_type_ip">
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Career_Input;
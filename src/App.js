import './App.css';
import { useFormik } from 'formik';


function App() {
  const formik = useFormik({
    initialValues: {
      firstName: 'murat can',
      lastName: 'parlar',
      email: 'canparlar@hotmail.com',
      gender:'female',
      hobies:[],
      country:'fr'
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="App">
         
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" placeholder="Jane" onChange={formik.handleChange} value={formik.values.firstName} />

            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" placeholder="Doe" onChange={formik.handleChange} value={formik.values.lastName}/>

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <br/><br/>
            <span>Male</span>
            <input type="radio" name="gender" value="male" onChange={formik.handleChange} checked={formik.values.gender==='male'}/>
            <span>FeMale</span>
            <input type="radio" name="gender" value="female" onChange={formik.handleChange}checked={formik.values.gender==='female'}/>
            <br/><br/>
            <div>
              <input type="checkbox" name="hobies" value="football" onChange={formik.handleChange}/>
              <span>Football</span>
            </div>
            <div>
              <input type="checkbox" name="hobies" value="basketball" onChange={formik.handleChange}/>
              <span>Basketball</span>
            </div>
            <br/>
            <select name='country' onChange={formik.handleChange} value={formik.values.country}>
                <option value="tr">Turkey</option>
                <option value="usa">USA</option>
                <option value="fr">Fransa</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        
       
    </div>
  );
}

export default App;

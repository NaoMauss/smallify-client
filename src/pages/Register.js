import "../App.css";
export default function Register() {
  return (
    <div className="App">
      <h1>Register</h1>
      <div>
        <div className="container">
          <label className="label-form" htmlFor="text">
            <b>Pseudo: </b>
          </label>
          <input
            className="input-form"
            type="text"
            placeholder="Enter Pseudo"
            name="pseudo"
            id="pseudo"
            required
          />
          <label className="label-form" htmlFor="email">
            <b>Email: </b>
          </label>
          <input
            className="input-form"
            type="email"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />
          <label className="label-form" htmlFor="psw">
            <b>Password: </b>
          </label>
          <input
            className="input-form"
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />
          <label className="label-form" htmlFor="psw-repeat">
            <b>Repeat Password: </b>
          </label>
          <input
            className="input-form"
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            id="psw-repeat"
            required
          />
          <div className="btn">
            <button className="larger-btn">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

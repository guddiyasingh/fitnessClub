
import './app.css'

export function App() {
 
  return (
    <>
      <header class="header">
        {/* left box for logo */}
        <div class="left">
          <img  className="a" src="img.png" alt=""/>;
            <div> Singh Fitness</div>
        </div>
        {/* mid box for navbar */}

        <div class="mid">
          <ul class="navbar">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Fitness calculator</a></li>
            <li><a href="#">Contect Us</a></li>
          </ul>

        </div>
        {/* Right box for buttons */}
        <div class="right">
          <button class="btn">Call us now</button><button class="btn">Email us</button>
        </div>
      </header>
      <div class="container">
        <h1>Join the best gym of Ranchi</h1>
        <form action="nonaction.php">
          <div class="form-group">

            <input type="text" name="" placeholder="Enter your name"/><br/>
              <input type="text" contect no="" placeholder="Contect no"/><br/>
                <input type="text" Address="" placeholder="Address"/><br/>
                  <input type="text" Aadhar no="" placeholder="Aadhar no"/><br/>
                    <input type="text" Age="" placeholder="Age"/><br/>
                      <input type="text" Gender="" placeholder="Gender"/>
                      </div>
                      <button class="btn">submit</button>
                    </form>
                    </div>
    </>
  )
}


import "./App.css";

function App() {

  const submitHandler =(e) => {
    e.preventDefault()
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: e.target[0].value
      }),
    };
    fetch("https://master.dd9k055ybpjmv.amplifyapp.com/", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data.short_id))
  }
  return (
    <form className = "App" onSubmit={submitHandler}>
      <h1 className="title">URL SHORTENER APP</h1>
      <label htmlFor="url">Your url</label>
      <br/>
      <input type="text" name="url" id="url"></input>
      <br/>
      <br/>
      <button type="submit">Shorten</button>
    </form>
  );
}

export default App;

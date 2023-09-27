import { Link } from "react-router-dom";


function App() {


  return (
    <>
      <h1 className="text-center text-7xl font-bold">This is Travalling Web site.</h1>
      <h1 className="text-center text-7xl font-bold my-10">This is Home page.</h1>

      <Link to='/login' className="bg-red-600 p-4 rounded-lg">
        <button>
          Login
        </button>
      </Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to='/sign-up' className="bg-green-500 p-4 rounded-lg">
        <button>
          Sign up
        </button>
      </Link>

    </>
  )
}

export default App;

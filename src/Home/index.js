import Dashboard from "../Dashboard";
import SignInPage from "../SignIn";

const Home = () => {
    const auth = localStorage.getItem("auth")
    return <div>{auth ? <Dashboard /> : <SignInPage />}</div>
}

export default Home;
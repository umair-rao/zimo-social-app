import Navbar from "./Navbar"

const WelcomePage = () => {
  return (
    <div className="h-screen">
        <div className="flex flex-col items-center justify-between h-80 pt-10  ">
            <h1 className="text-4xl">Welcome to Zimo Social Media Website</h1>
            <h3 className="text-2xl">Please Login or Signup if you're visiting for first time.</h3>
            <img src="/welcome-icon.png" alt="" className="h-24 w-24"/>
        </div>
    </div>
  )
}

export default WelcomePage

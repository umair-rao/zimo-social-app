
const Navbar = () => {
  return (
    <div className="flex justify-between items-center pl-10 pr-10 h-14 bg-red-200 sticky top-0">
      <div className="flex cursor-pointer">
        <img src="/zimo-icon.png" alt="Zimo-icon" />
        <h1>Zimo Social</h1>
      </div>
      <div>
        <button className="pr-5">Login</button>
        <button>SignUp</button>
      </div>
    </div>
  )
}

export default Navbar

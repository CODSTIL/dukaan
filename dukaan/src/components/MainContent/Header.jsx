import './Header.css'


const Header = () => {
  return (
    <div className="header">
       <div className="pay">
         <h5>Payouts</h5>
         <button><i class="fa-solid fa-question"></i></button> <p>How it works</p>
       </div>
       <div className="input">
        <input type="text" placeholder="Search features,tutorials,etc." />
       </div>
       <div className="notification">
         <button><i class="fa-solid fa-message"></i></button>
         <button><i class="fa-solid fa-caret-down"></i></button>
       </div>
    </div>
  )
}

export default Header

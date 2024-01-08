
import './list.css'

const list = () => {
  return (
    <div className='list'>
       <span> <button><i class="fa-solid fa-house"></i></button> <p>Home</p></span>
       <span> <button><i class="fa-solid fa-list"></i></button> <p> Orders</p></span>
       <span> <button><i class="fa-solid fa-border-all"></i></button> <p>Products</p></span>
       <span> <button><i class="fa-solid fa-truck"></i></button> <p>Delivery</p></span>
       <span> <button><i class="fa-solid fa-bullhorn"></i></button> <p>Marketing</p></span>
       <span> <button><i class="fa-solid fa-chart-simple"></i></button> <p>Analytics</p></span>
       <span> <button><i class="fa-solid fa-receipt"></i></button> <p>Payouts</p></span>
       <span> <button><i class="fa-solid fa-percent"></i></button> <p>Discounts</p></span>
       <span> <button><i class="fa-solid fa-people-line"></i></button> <p>Audience</p></span>
       <span> <button><i class="fa-solid fa-paintbrush"></i></button> <p>Appearance</p></span>
       <span> <button><i class="fa-solid fa-bolt"></i></button> <p>Plugins</p></span>
    </div>
  )
}

export default list

import './frame1.css'

const SubMain = () => {
  return (
    <div className='payout-detail'>
        <div className="next-payout">
            <div className="next">
                <h4>Next Payout</h4>
                <button><i class="fa-solid fa-question"></i></button>
            </div>
            <div className="amount">
             
                <h3>$2,312</h3>
                <p>23 orders</p> <button><i class="fa-solid fa-chevron-right"></i></button>
            
            </div>
            <div className="dark">
                <h5>Next payout date:</h5>
                <p>Today 4:00pm</p>
            </div>
        </div>
        <div className="pending">
            <div className="pend">
                <h4>Amount Pending</h4>
                <button><i class="fa-solid fa-question"></i></button>
            </div>
            <div className="amount">
               <h3>$92,312</h3>
                <p>13 orders</p>
            </div>
        </div>
        <div className="processed">
        <div className="process">
                <h4>Amount Processed</h4>
                <button><i class="fa-solid fa-question"></i></button>
            </div>
            <div className="amount">
               <h5>$232000</h5>
            </div>
        </div>
    </div>
  )
}

export default SubMain

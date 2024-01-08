
import './table.css'

const Table = () => {
  return (
    <div className='table'>
       <div className="transaction">
         <h3> Transaction | This month</h3>
         <div className="pay-refund">
             <h4>Payouts(22)</h4>
             <h4>Refunds(2)</h4>
         </div>
       </div>

       <div className="chart">
         <div className="chart-input">
            <input type="text" />
            <div className="btn">
                 <button><i class="fa-solid fa-download"></i></button>
                 <button>Sort</button>
            </div>



         </div>
      
         <div className="charts">
             <table>
                <tr>
                    <th><i class="fa-solid fa-caret-down"></i></th>
                    <th>Transaction ID</th>
                    <th>Order Amount</th>
                    <th>Transaction Fee</th>
                    <th>Total</th>
                </tr>

                <tr>
                  <td>Processing</td>
                  <td>1316485521555</td>
                  <td>10125</td>
                  <td>1,125</td>
                  <td>9312</td>
                </tr>

        
                <tr>
                <td>Processing</td>
                  <td>1316485521555</td>
                  <td>10125</td>
                  <td>1,125</td>
                  <td>9312</td>
                </tr>

                <tr>
                <td>Processing</td>
                  <td>1316485521555</td>
                  <td>10125</td>
                  <td>1,125</td>
                  <td>9312</td>
                </tr>

                <tr>
                <td>Processing</td>
                  <td>1316485521555</td>
                  <td>10125</td>
                  <td>1,125</td>
                  <td>9312</td>
                </tr>

                <tr>
                <td>Processing</td>
                  <td>1316485521555</td>
                  <td>10125</td>
                  <td>1,125</td>
                  <td>9312</td>
                </tr>

                <tr>
                <td>Processing</td>
                  <td>1316485521555</td>
                  <td>10125</td>
                  <td>1,125</td>
                  <td>9312</td>
                </tr>
                
             </table>
          </div>

       </div>
    </div>
  )
}

export default Table

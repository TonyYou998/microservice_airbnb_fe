import React from 'react'
import CountUp, { useCountUp } from 'react-countup'
export default function Count_Up() {

  return (
    <div className=' countup'>
      <div className='container'>
        <div className='row'>
        <div className='col-3 text-center'>
              
              <span className="countup__number">
              <i class="fa fa-user "></i>
              <CountUp
              className='number'  
              duration={30}
              end={5000} 
                
              />
              </span>
              
              <h3>Clients</h3>
          </div>
          <div className='col-3 text-center'>
              <p className='countup__number'><span className="countup__number">
              <i class="fa fa-home"></i>
              <CountUp
              className='number'  
              duration={30}
              end={6500} 
               
              />
              </span></p>
              <h3>Host</h3>
          </div>
          <div className='col-3 text-center'>
              <p className='countup__number'> <p className='countup__number'><span className="countup__number">
              <i class="fa fa-hotel"></i>
              <CountUp
              className='number'  
              duration={30}
              end={8000} 
               
              />
              </span></p></p>
              <h3>Slot</h3>
          </div>
          <div className='col-3 text-center'>
              <p className='countup__number'>
              <span className="countup__number">
              <i class="fa fa-credit-card"></i>
              <CountUp
              className='number'  
              duration={30}
              end={1000} 
                
              />
              </span>
                </p>
              <h3>Reservation  per day</h3>
          </div>
        </div>
         

      </div>
      
    </div>
  )
}

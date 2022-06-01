import React from 'react'
import classes from './Notification.module.css'
import '../../styles/global.css'
const Notification = ({ntf}) => {
  return (
    <div className={classes.notificationContainer}>
        <div className={classes.notifications}>
                
                {ntf.map((value)=>
                {
                    return(
                        <a href="/">

                            <p>{value}</p>
                        </a>
                        
                    )
                })}   
                
          
        </div>

    </div>
  )
}

export default Notification
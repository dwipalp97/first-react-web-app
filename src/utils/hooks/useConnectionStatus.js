 import React, { useEffect, useState } from 'react';

const useConnectionStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);
  
    useEffect(()=>{

        window.addEventListener('offline', ()=>{
            setOnlineStatus(false);
        });

        window.addEventListener('online', ()=>{
            setOnlineStatus(true);
        });
       
    },[]);

    return onlineStatus;
}

export default useConnectionStatus
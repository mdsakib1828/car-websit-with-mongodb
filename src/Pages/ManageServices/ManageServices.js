import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
     fetch("http://localhost:5000/services")
       .then((res) => res.json())
       .then((data) => setServices(data));
    },[])

    const deleteItem=(id)=>{
        const url = `http://localhost:5000/services/${id}`;
        fetch(url,{
            method:'DELETE'
        }).then(res=>res.json).then(data=>{
            
              const res = window.confirm("deleted successfully");
              if(res){
                  const remaining = services.filter(
                    (service) => service._id !== id
                  );
                  setServices(remaining);
              }
              
            
            
        })
        


    }
    return (
        <div>
            {
                services.map(service=><div key={service._id}>

                <h3>{service.Nme}</h3>
                <button onClick={()=>deleteItem(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;
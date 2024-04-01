
    //Create your constructor funtion with the name Shipment
     function Shipment(id,location,status,resource){
         this.id=id;
         this.status=status;
         this.location=location;
         this.resource=resource;  
         this.changeStatus=(status)=>{
         this.status=status;
    }
     }
        const Ship1=new Shipment("1","srinagar","acitve",[1,2,3,]);
        const Ship2=new Shipment("2","Mumbai","nonActive",[1,2,3,4,5]);

        console.log(Ship1.status);
        Ship1.changeStatus("nonActive");
        console.log(Ship1.status);
  
    
   
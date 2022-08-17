const arr=[    
    {prodName:"Product1",prodDescription:"product 1 decription",prodPrice:5.05},
    {prodName:"Product2",prodDescription:"product 1 decription",prodPrice:8.50},
    {prodName:"Product3",prodDescription:"product 1 decription",prodPrice:10.50}
    ];
  
    popolate();
    function popolate(){
     text="";
    for(i=0;i<arr.length;i++)
    {
     text+="<div id='prod'><h1>"+arr[i].prodName+"</h1><p>"+arr[i].prodDescription+"</p><p>"+arr[i].prodPrice+"</p><button onclick='addCart(this)'>Add to cart</button></div>";
 
    }
    document.getElementById('outer').innerHTML=text;
    }
    var arrCart=[{cprodName:arr[0].prodName,cprice:arr[0].prodPrice,quantity:'',amount:''},
    {cprodName:arr[1].prodName,cprice:arr[1].prodPrice,quantity:'',amount:''},
    {cprodName:arr[2].prodName,cprice:arr[2].prodPrice,quantity:'',amount:''}
     ];
    
 
    
    function populateCart()
    {
 
     text="";
     text+="<table><th>Product_Name</th><th>Product_price</th><th>Quantity</th><th>Amount</th><th>Action</th>";
      for(i=0;i<arrCart.length;i++)
      {
        text+="<tr><td >"+arrCart[i].cprodName+"</td><td>"+arrCart[i].cprice+"</td><td id='qnt' value='1'>"+arrCart[i].quantity+"</td><td>"+arrCart[i].amount+"</td><td><button>X</button></td></tr>"
 
      }    
      text+="</table>" 
     document.getElementById('divTbl').innerHTML=text;
 
    }

    function addCart(args)
    {   populateCart();
        var cartElement=args.parentNode.parentNode;
        console.log(cartElement);
        var index=cartElement.children;
       
        // console.log(sel);
        var quantity1=document.getElementById('qnt').value;
            quantity1=quantity+1;
            arrCart[args].quantity=quantity1;
            console.log(arrCart[args].quantity);

            
           
      
    }
 
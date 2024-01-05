

$  ( document ).ready ( function(){

    $("#btn3").click(function(){
        $("#Airpods1").show();
        $("#Airpods2").show();
        $("#Airpods3").show(); 
        $("#Airpods4").show(); 
        $("#Headphone").show();
        $("#Headphone2").show();
        $("#Headphone3").show();
        $("#Headphone4").show();
        $("#Bluetooth1").show();
        $("#Bluetooth2").show();
        $("#Bluetooth3").show();
        $("#Bluetooth4").show();
    })

    $("#btn4").click(function(){
        $("#Airpods1").show();
        $("#Airpods2").show();
        $("#Airpods3").show(); 
        $("#Airpods4").show(); 
        $("#Headphone").hide();
        $("#Headphone2").hide();
        $("#Headphone4").hide();
        $("#Headphone3").hide();
        $("#Bluetooth1").hide();
        $("#Bluetooth2").hide();
        $("#Bluetooth3").hide();
        $("#Bluetooth4").hide();
      
    })

    $("#btn5").click(function(){
        $("#Airpods1").hide();
        $("#Airpods2").hide();
        $("#Airpods3").hide(); 
        $("#Airpods4").hide(); 
        $("#Headphone").show();
        $("#Headphone2").show();
        $("#Headphone3").show();
        $("#Headphone4").show();
        $("#Bluetooth1").hide();
        $("#Bluetooth2").hide();
        $("#Bluetooth3").hide();
        $("#Bluetooth4").hide();
    })


    $("#btn6").click(function(){
        $("#Airpods1").hide();
        $("#Airpods2").hide();
        $("#Airpods3").hide(); 
        $("#Airpods4").hide(); 
        $("#Headphone").hide();
        $("#Headphone2").hide();
        $("#Headphone3").hide();
        $("#Headphone4").hide();
        $("#Bluetooth1").show();
        $("#Bluetooth2").show();
        $("#Bluetooth3").show();
        $("#Bluetooth4").show();
    })
})

// onmouseover start 1

function change1(){
document.getElementById("img1").src="img/air2-removebg-preview.png"
}
 
function change2(){
    document.getElementById("img1").src="img/air1-removebg-preview.png"
}

// onmouseover end 1


// onmouseover start 2
function change3(){
    document.getElementById("img2").src="img/head2.png"
    }
     
    function change4(){
        document.getElementById("img2").src="img/head1.png"
    }

    
// onmouseover end 2


// onmouseover start 3
    function change5(){
        document.getElementById("img3").src="img/bluetooth2.png"
        }
         
        function change6(){
            document.getElementById("img3").src="img/bluetooth1.png"
        }

        
// onmouseover end 3


// onmouseover start 4
        function change7(){
            document.getElementById("img4").src="img/airi2-removebg-preview.png"
            }
             
            function change8(){
                document.getElementById("img4").src="img/airi1-removebg-preview.png"
            }

            
// onmouseover end 4


// onmouseover start 5
            function change9(){
                document.getElementById("img5").src="img/headp2.png"
                }
                 
                function change10(){
                    document.getElementById("img5").src="img/headp1.png"
                }
                
// onmouseover end 5


               // onmouseover start 6
                function change11(){
                    document.getElementById("img6").src="img/bluetootha1.png"
                    }
                     
                    function change12(){
                        document.getElementById("img6").src="img/bluetootha2.png"
                    }
                    
                         // onmouseover end 6

                        // onmouseover start 7
function change13(){
    document.getElementById("img7").src="img/airpo2.png"
    }
     
    function change14(){
        document.getElementById("img7").src="img/airpo1.png"
    }
    
       // onmouseover end 7

       // onmouseover start 8
         function change15(){
     document.getElementById("img8").src="img/headq2.png"
              }   
        function change16(){
        document.getElementById("img8").src="img/headq1.png"
              }
    
      // onmouseover end 8

            // onmouseover start 9
           function change17(){
    document.getElementById("img9").src="img/bluetooths2.png"
                          }
       
            function change18(){
             document.getElementById("img9").src="img/bluetooths1.png"
               }
    
// onmouseover end 9

// onmouseover start 10
function change19(){
    document.getElementById("img10").src="img/airq1.png"
    }
     
    function change20(){
        document.getElementById("img10").src="img/airq2.png"
    }
    
// onmouseover end 10

// onmouseover start 11
function change21(){
    document.getElementById("img11").src="img/heads2.png"
    }
     
    function change22(){
        document.getElementById("img11").src="img/heads1.png"
    }
    
// onmouseover end 11

// onmouseover start 12
function change23(){
    document.getElementById("img12").src="img/bluetootht1.png"
    }
     
    function change24(){
        document.getElementById("img12").src="img/bluetootht2.png"
    }
    
// onmouseover end 12

function add(){
    var name =document.getElementById("username").value
    var userpass =document.getElementById("password").value
    var useremail =document.getElementById("email").value
    var usernum =document.getElementById("phone-number").value
    var userdate =document.getElementById("birth-date").value

         
    if(username == "" || userpass == "" || useremail =="" || usernum == "" || userdate =="")
   {
    alert("Filled All THE INPUTS !!")
   }
   
   else{
    localStorage.setItem("username",name)
    localStorage.setItem("password",userpass)
    localStorage.setItem("email",useremail)
    localStorage.setItem("phone-number",usernum)
    localStorage.setItem("birth-date",userdate)

    alert("Log-in")
    window.location="log.html"

   }
}


function add1(){


var myname=document.getElementById("myname").value
var mypassword=document.getElementById("mypassword").value

    var Name =localStorage.getItem("Name");
    var password =localStorage.getItem("password");
   
if(myname == Name && mypassword == password  )
{
    alert ("log-in")
}  

else{
    alert ("Filled All THE INPUTS")
}



}
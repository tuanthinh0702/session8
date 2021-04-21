//b1
const b = document.getElementById("btn");
const dcm = document.getElementById("dcm");
let num =0;
b.onclick = function(){  
   if(num%2==0){  
       dcm.innerHTML = "";
    dcm.style.backgroundColor = "";
        }else{
            dcm.innerHTML = "an hien khoi";
            dcm.style.backgroundColor = "red";
            dcm.style.width = "100px";
            dcm.style.height = "100px";
        }
        num++;
}
//b2
let dcm1 = document.getElementById("dcm1");
let image =[
    "red","blue","black","pink","yellow"
];
let b1 = document.getElementById("btn1");
let num1 =0;
b1.onclick = function(){
    dcm1.style.backgroundColor = image[num1];
    if(num1 >= image.length){
        num1 = 0;
    }
    num1++; 
}

//b3
const dcm2 = document.getElementById("dcm2");
const dcm3 = document.getElementById("dcm3");
const b2 = document.getElementById("btn2");
let num2 =0;
b2.onclick = function(){  
   if(num2%2==0){  
       dcm2.innerHTML = "da dao noi dung khoi 2";
       dcm3.innerHTML = "dao noi dung khoi 1 thanh khoi 2 va nguoc lai";
        }else{
            dcm3.innerHTML = "da dao noi dung khoi 2";
            dcm2.innerHTML = "dao noi dung khoi 1 thanh khoi 2 va nguoc lai";
        }
        num2++;
}
 //b4

const b3 = document.getElementById("btn3");
const dcm4 = document.getElementById("dcm4");
let num3 = 0;
let value = 1;
b3.onclick = function(){  
     dcm4.style.fontSize = 14 + value +"px" ;
        value++;
        num3++;
}

 

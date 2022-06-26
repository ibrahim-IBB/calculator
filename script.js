function getting(id){
    return document.getElementById(id);
}

var temp="";
var res_container=getting("res_container");
var res=getting("Result");
var B_APPEND_1=getting("Bapp1");
var B_APPEND_2=getting("Bapp2");
var B_APPEND_3=getting("Bapp3");
var B_APPEND_4=getting("Bapp4");
var B_APPEND_5=getting("Bapp5");
var B_APPEND_6=getting("Bapp6");
var B_APPEND_7=getting("Bapp7");
var B_APPEND_8=getting("Bapp8");
var B_APPEND_9=getting("Bapp9");
var B_APPEND_0=getting("Bapp10");
var B_OPR_PLUS=getting("Boprplus");
var B_OPR_MUL=getting("Boprmul");
var B_OPR_DIV=getting("Boprdiv");
var B_OPR_RES=getting("Boprres");
var B_OBR_DOT=getting("Boprdot");
var B_OBR_SIGN=getting("Boprsign");
var B_OBR_CLR=getting("clear");


class Stack{
    constructor(){
        this.arr=[];
        this.top=-1;    
    }

    push(data){
        this.arr.push(data);
        this.top+=1;
    }
    pop(){
        if(this.top!=-1){
            var data=this.arr[this.arr.length-1];
           this.arr.splice(-1);
           this.top-=1;
           return data;
        }else{
            console("error stack is empty");
        }
    }
}



var firstStack= new Stack();
var secondStack=new Stack();

B_APPEND_1.onclick=function(e){
    temp+="1";
    console.log(temp);
    res.innerHTML=temp;
}
B_APPEND_2.onclick=function(e){
    temp+="2";
    console.log(temp);
    res.innerHTML=temp;
}
B_APPEND_3.onclick=function(e){
    temp+="3";
    console.log(temp);
    res.innerHTML=temp;
}
B_APPEND_4.onclick=function(e){
    temp+="4";
    console.log(temp);
    res.innerHTML=temp;
}
B_APPEND_5.onclick=function(e){
    temp+="5";
    console.log(temp);
    res.innerHTML=temp;
}
B_APPEND_6.onclick=function(e){
    temp+="6";
    console.log(temp);
    res.innerHTML=temp;
}
B_APPEND_7.onclick=function(e){
    temp+="7";
    console.log(temp);
    res.innerHTML=temp;
}
B_APPEND_8.onclick=function(e){
    temp+="8";
    console.log(temp);
    res.innerHTML=temp;
}
B_APPEND_9.onclick=function(e){
    temp+="9";
    console.log(temp);
    res.innerHTML=temp;
}
B_APPEND_0.onclick=function(e){
    temp+="0";
    console.log(temp);
    res.innerHTML=temp;
}

B_OBR_DOT.onclick=function(e){
    
   
       if(!temp.includes(".",0)){
        temp+=".";
        console.log(temp);
        res.innerHTML=temp;
       }
   
   
}

B_OBR_SIGN.onclick=function(e){

    
    if(temp[0]!=="-"){
        temp=`-${temp}`;
        res.innerHTML=temp;
    }else{
        temp = temp.substring(1);
        res.innerHTML=temp;
    }
  
}

B_OBR_CLR.onclick=function(e){
    temp="";
    getValueFromStack(firstStack);
    getValueFromStack(secondStack);
    res.innerHTML=temp;
}


function getValueFromStack(theStack){
    var params=[];
    var value=0;
    for(i=theStack.top;i>-1;i--){
        params.push(theStack.pop());
    }
    if(params[1]=="+"){
        value=parseFloat(params[0])+parseFloat(params[2]);
    }
    else if(params[1]=="-"){
        value=parseFloat(params[0])-parseFloat(params[2]);
    }
    else if(params[1]=="*"){
        value=parseFloat(params[0])*parseFloat(params[2]);
    }
    else if(params[1]=="/"){
        value=parseFloat(params[0])/parseFloat(params[2]);
    }
    console.log(params);
    return value;
}

B_OPR_PLUS.onclick=function(e){

    
   if(firstStack.top==1){
    if(temp!=""){
    firstStack.push(temp);
    for(i=2;i>-1;i--){
        secondStack.push(firstStack.pop());
        
    }

    temp=getValueFromStack(secondStack);

    res.innerHTML=temp;
}
   }else{
    if(temp!=""){
        firstStack.push(temp);
        firstStack.push("+");
        temp="";
        res.innerHTML=temp;
    }
  
   }
  
 

   
}


B_OPR_MUL.onclick=function(e){

    
    if(firstStack.top==1){
        if(temp!=""){
     firstStack.push(temp);
     for(i=2;i>-1;i--){
         secondStack.push(firstStack.pop());
         
     }
     temp=getValueFromStack(secondStack);
 
     res.innerHTML=temp;
    }
    }else{
        if(temp!=""){
     firstStack.push(temp);
     firstStack.push("*");
     temp="";
     res.innerHTML=temp;
        }
    }
   
  
 
    
 }

 B_OPR_DIV.onclick=function(e){

    
    if(firstStack.top==1){
 
        if(temp!=""){
     firstStack.push(temp);
     for(i=2;i>-1;i--){
         secondStack.push(firstStack.pop());
         
     }
     temp=getValueFromStack(secondStack);
 
     res.innerHTML=temp;
    }
    }else{
        if(temp!=""){
     firstStack.push(temp);
     firstStack.push("/");
     temp="";
     res.innerHTML=temp;
        }
    }
   
  
 
    
 }
 

 B_OPR_RES.onclick=function(e){

    
    if(firstStack.top==1){
        
        if(temp!=""){
            firstStack.push(temp);
            for(i=2;i>-1;i--){
                secondStack.push(firstStack.pop());
                
            }
            temp=getValueFromStack(secondStack);
     
            res.innerHTML=temp;
        }
   
    
     
    }else{
    console.log("no operator");
    }
   
  
 
    
 }
 
 const copyToClipboard = str => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(str);
    return Promise.reject('The Clipboard API is not available.');
  };


  res_container.onclick=function(e){

    copyToClipboard(temp);
 }

 res.onclick=function(e){

    copyToClipboard(temp);
 }
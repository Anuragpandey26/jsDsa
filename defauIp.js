 function defangIPaddr(address) {
        let ans="";
        for(let i=0;i<address.length;i++){
            if(address[i]=='.'){
                ans+="[.]";
            }else{
                ans+=address[i];
            }
        }
        return ans ;
    }
    const address = "1.1.1.1"
    console.log( defangIPaddr(address))
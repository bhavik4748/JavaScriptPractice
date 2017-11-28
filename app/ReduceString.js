function super_reduced_string(s){
  
    let temp= s.split('');
  
    for(let i=1; i < s.length; ++i){
        if(temp[i-1] == temp[i]){
            temp[i-1]='';
            temp[i]='';      
        } 
    }
  
    let t= temp.join('');
    t=t.replace(" ", "");
  
    if(t.length == s.length)
        return t    ;
    else
      return  super_reduced_string(t);
  
}

let a = super_reduced_string('aaabccddd');
console.log(a);
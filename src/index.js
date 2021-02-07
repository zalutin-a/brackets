const type = {
    ')':'(',
    ']':'[',
    '}':'{',
    '|':'|',
    '2':'1',
    '4':'3',
    '6':'5',
    '7':'7',
    '8':'8'
}

const myReg = /[\|78]/g

module.exports = function check(str, bracketsConfig){
    let arr = []
    let result = true
    for(let i =0; i<str.length; i++){
        if(type.hasOwnProperty(str.charAt(i))){
            if(!myReg.test(str.charAt(i))){
                if(arr[arr.length-1] === type[str.charAt(i)]) arr.pop()
                else {return result = false}
            }else{  
                myReg.test()
                if(arr[arr.length-1] === str.charAt(i)) arr.pop()
                else arr.push(str.charAt(i))
                }
        }else{
                arr.push(str.charAt(i))
                }
        }
    
    if(arr.length != 0) result = false
     
    return result
}

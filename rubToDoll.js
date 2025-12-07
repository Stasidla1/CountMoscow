

const seperateFunc = (message)=>{   
    
    let seperate = message.split('\n')

    return seperate
}

let rusToDollar = (message,course)=>{
     
    let filtSep = seperateFunc(message)
    let text = ''
    filtSep.map((arr)=>{
        if(arr){
            let index = arr.trimEnd().lastIndexOf(' ')
            let coast = arr.slice(index) 
            let dollar = Math.round(+coast/+course)

            text += `${arr.trimEnd()} = ${dollar} \n`
        }else{
            text += '\n'
        }
  })

return text
}

exports.rusToDollar = rusToDollar


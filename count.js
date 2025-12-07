const seperateFunc = (message)=>{   
    
    let seperate = message.split('\n')

    seperate = seperate.filter(str=>{
        if(str){
            return str
        }
    })
    return seperate
}

let workWithMessage = (message)=>{
 
    
    let filtSep = seperateFunc(message)

    let totalCount = 0
    let totalCoast = 0
        
    filtSep.map((arr)=>{
            let index = arr.trimEnd().lastIndexOf(' ')
   

            let copy = arr.replace('*','')
            let indexTab = copy.indexOf('-')

            let coast = arr.slice(index)
            let count = copy.slice(0,indexTab)

            totalCoast += +coast*+count

            totalCount += +count       
  })



  let final = `
Общее количество позиций: ${totalCount}

Сумма заказ: ${totalCoast}
`
return final
}

exports.workWithMessage = workWithMessage



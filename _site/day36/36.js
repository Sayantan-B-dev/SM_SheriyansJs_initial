const secondLargest = () => {
    let arr = [1, 5, 2, 45, 23, 66, 232, 324]
    let max = Math.max(arr[0], arr[1])
    let sMax = Math.min(arr[0], arr[1])
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > max) {
            sMax = max
            max = arr[i]
        } else if (arr[i] > sMax) {
            sMax = arr[i]
        }
    }
    process.stdout.write(String(sMax))
}
//secondLargest()

const reverseArray=()=>{
    let arr=[1, 5, 2, 45, 23, 66, 232, 324]
    let nArr=[]
    for(let j=arr.length;j>=0;j--){
        nArr.push(arr[j])
    }
    process.stdout.write(nArr.join(' '))
}
//reverseArray()
const reverseArray2=()=>{
    let arr=[1, 5, 2, 45, 23, 66, 232, 324]
    let i=0,j=arr.length-1
    while(i<j){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        i++
        j--
    }
    process.stdout.write(arr.join(' '))
}
//reverseArray2()
const Left0right1=()=>{
    let arr=[0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1]
    let i=0,j=0
    while(i<arr.length){
        if(arr[i]==0){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            j++
        }
        i++
    }
    process.stdout.write(arr.join(' '))
}
//Left0right1()

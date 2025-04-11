const prompt = require("prompt-sync")()

const userStepRotate=()=>{
    let arr=[3,4,5,2,59,22,55,6,7,37,643,39]
    let k=4
    k=k%arr.length
    for(let i=1;i<=k;i++){
        let copy=arr[0]
        for(let i=0;i<arr.length-1;i++){
            arr[i]=arr[i+1]
        
        }
        arr[arr.length-1]=copy
    }
    process.stdout.write(arr.join(', '))
}
//userStepRotate()
const userStepRotateOptimized=()=>{
    let arr=[3,4,5,2,59,22,55,6,7,37,643,39]
    let nArr=[]
    let k=4
    k=k%arr.length
    for(let i=0;i<arr.length;i++){
        nArr[i]=arr[(i+k)%arr.length]
    }
    process.stdout.write(nArr.join(', '))
}
//userStepRotateOptimized()
const userStepRotateMoreOptimizedWithBlockSwapReverseAlgorithm=()=>{
    let arr=[3,4,5,2,59,22,55,6,7,37,643,39]
    let nArr=[]
    let k=4
    k=k%arr.length
    function reverse(arr,i,j){
        while(i<j){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            i++
            j--
        }
    }
    reverse(arr,0,k-1)
    reverse(arr,k,arr.length-1)
    reverse(arr,0,arr.length-1)
    process.stdout.write(arr.join(', '))
}
//userStepRotateMoreOptimizedWithBlockSwapReverseAlgorithm()

const LinearSearch=()=>{
    let arr=[3,4,5,2,59,22,55,6,7,37,643,39]
    let n = prompt('Enter number: ')
    let index=-1
    for(let i=0;i<arr.length;i++){
        if(arr[i]==n){
            index=i
        }
    }
    if(index==-1){
        process.stdout.write('Not found')
    }else{
        process.stdout.write(`Element found in ${index}th index`)
    }
}
//LinearSearch()

const BinarySearch=()=>{
    let arr=[3,4,5,2,59,22,55,6,7,37,643,39]
    arr=arr.sort((a,b)=>a-b)
    let n = prompt('Enter number: ')
    process.stdout.write(`Sorted array: ${arr.join(', ')} \n`)
    const binary=(arr,n)=>{
        let s=0,e=arr.length-1;
        while(s<=e){
            let mid=Math.floor((s+e)/2)
            if(arr[mid]==n)return mid
            else if(arr[mid]>n) e=mid-1
            else s=mid+1
        }
        return -1
    }

    if(binary(arr,n)==-1) process.stdout.write('Not found')
    else process.stdout.write(`Found element found in ${binary(arr,n)}th index`)
    
}
BinarySearch()
const BubbleSort=()=>{
    const arr=[3,45,22,12,565,23,45,112,3445,23]
    let n=arr.length
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    process.stdout.write(arr.join(', '))
}
//BubbleSort()
const SelectionSort=()=>{
    const arr=[3,45,22,12,565,23,45,112,3445,23]
    let n=arr.length
    for(let i=0;i<n-1;i++){
        let small=i
        for(let j=i+1;j<n;j++){
            if(arr[small]>arr[j]){
                small=j
            }
        }
        if(i!=small){
            let temp=arr[i]
            arr[i]=arr[small]
            arr[small]=temp
        }
    }
    process.stdout.write(arr.join(', '))
}
//SelectionSort()
const InsertionSort=()=>{
    const arr=[3,45,22,12,565,23,45,112,3445,23]
    let n=arr.length
    for(let i=0;i<n-1;i++){
        let j=i-1
        let key=arr[i]
        while(j>=0&&arr[j]>key){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=key
    }
    process.stdout.write(arr.join(', '))
}
//InsertionSort()
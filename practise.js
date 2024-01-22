// const slice_fn = (arr,start,end) => {
//     const new_arr = [];
//     for(let i=start;i<end;i++){
//         new_arr.push(arr[i])
//     }
//     return new_arr
// }

// Object.defineProperty(Array.prototype, 'mySlice', {
//     value: (start, end) => {
//         const new_arr = [];
//             for (let i = start; i < end; i++) {
//                 new_arr.push(i)
//         }
//         return new_arr
//     }
//   });

// const arr = [1,2,3,4,5,6]
// console.log(arr.mySlice(3,6))
// console.log(slice_fn(arr,3,6))

let arr = [
    {
       name : "Dsk",
       id : 12345,
       prescription : [
           {
               medication : '1231241',
               id : 123
           },
            {
               medication : '1231246',
               id : 127
           }
           ]
    },
    {
       name : "Dsk2",
       id : 12346,
       prescription : [
           {
               medication : '1231240',
               id : 124
           },
             {
               medication : '1231249',
               id : 129
           }
           ]
    }
    ]
    
    let tracking_data = {
        pill_taken : true,
        taken_on : '19-01-2024',
        medicine_id : 2231
    }
    let tracking_data2 = {
        skip : true,
        skip_on : '19-01-2024',
        medicine_id : 2231
    }
    
    let patient_rec = arr.find(val => val.id = 12345)
    
    if(patient_rec.prescription.length){
        patient_rec.prescription[0].tracking_data = [tracking_data]
        patient_rec.prescription[0].tracking_data.push(tracking_data2)
    }
    
    console.log(arr[0].prescription[0])
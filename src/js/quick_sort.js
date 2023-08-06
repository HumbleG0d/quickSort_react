function partition(array , min , max , mode){
  const pivote = array[max].value
  let i = min - 1

  for(let j = min ; j <= max - 1 ; j++){
    if(mode === 'ascendente'){
      if(array[j].value < pivote){
        i++
        [array[i] , array[j]] = [array[j] , array[i]]
      }
    }
    else{
      if(array[j].value > pivote){
        i++
        [array[i] , array[j]] = [array[j] , array[i]]
      }
    }

  }
  [array[i+1] , array[max]] = [array[max] , array[i+1]]
  return i + 1
}

export function quickSort(array , min , max , mode){
  if(min < max){
    const index_pivote = partition(array , min , max , mode)
    quickSort(array , min , index_pivote - 1 , mode)
    quickSort(array , index_pivote + 1 , max , mode)
  }
}

const removeItemAtIndex = (list, index) => {
 return [
   ...list.slice(0,index),
   ...list.slice(index+1, index.length)
 ];
  
 list.slice(index, 1);
 return list;
};

console.log(removeItemAtIndex(['a', 'b', 'c', 'd'], 1));
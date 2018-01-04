// reference: https://www.codewars.com/kata/which-are-in/train/javascript

//@TODO: how to solve l.9 to remove duplicated value in the array?
function inArray(array1,array2){
  let ret=[];
  array2.map((e)=>{
    array1.map((el)=>{
      let substr = (e.indexOf(el) > 0) ? true : false;
      let retDuplicate = ret.map((a)=>{a.indexOf(el) > 0 ? false : true});
      substr && retDuplicate ? ret.push(el): null;
    })
  })
  return ret;
}
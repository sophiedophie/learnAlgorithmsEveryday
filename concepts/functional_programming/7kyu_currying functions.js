// reference: https://www.codewars.com/kata/currying-functions-multiply-all-elements-in-an-array/train/javascript

// @Takeaway:
// currying function: by using the feature of closure, make function refering only one param (instead of plural)

const multiplyAll=(arr)=>{
  return (num)=>{
    return arr.map((e)=>{
      return e*num;
    })
  }
}

// more clever way? > don't need to use return

const multiplyAll = a = x => a.map(e => e * x);
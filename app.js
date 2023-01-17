// var tegs = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div’];





//второе задание
var nums = [1, 3, 5, 8];
var max = nums[0];
nums.forEach(function (elem, index){
    if(index >0){
        if(max < elem){
            max = elem;
        }
    }
})
console.log(max)

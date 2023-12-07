var itr = 1
export function QuickSort2(pillars,low,high){
    if (low >= high){
        return
    }
    
    var s = low;
    var e = high;
    var m = parseInt((low+high) / 2);
    var pivot = pillars[m];

    pivot.classList.add("pivot");
    pillars[s].classList.add("low");
    pillars[e].classList.add("high");

   
}
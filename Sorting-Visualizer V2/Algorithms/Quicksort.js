
export function QuickSort2(pillars,low,high){
    if (low >= high){
        return
    }
    
    var s = low;
    var e = high;
    var m = parseInt((low+high) / 2);
    var pivot = pillars[m];

    changeColor(m, "Black", pillars)
    changeColor(s, "Yellow", pillars)
    changeColor(e, "Yellow", pillars)
    
    while(s <= e){
        while (pillars[s].clientHeight < pivot.clientHeight){
            changeColor(s, "Blue", pillars)
            s += 1;
            changeColor(s, "Yellow", pillars)
        }
        while (pillars[e].clientHeight > pivot.clientHeight){
            changeColor(e, "Blue", pillars)
            e -= 1
            changeColor(e, "Yellow", pillars)
        }

        
        break;
    }
}

function changeColor(index, color, pillars){
    var animationComplete = false;
    pillars[index].animate([
        { backgroundColor: color },
    ], {
        duration: 100,
        iterations: 1,
    });
    while (!pillars[index].onanimationend){
        
    }
}
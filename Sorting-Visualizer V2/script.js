let arrs = [];

const resultDiv = document.getElementById("result");


document.getElementsByTagName("input")[1].addEventListener("click", function(){
    var arr = [];
    var NoofPillars = Number(document.getElementsByTagName("input")[0].value);
    var division = resultDiv.clientWidth/NoofPillars;
    document.getElementById("result").innerHTML = "" ;
    var length =  Number(document.getElementsByTagName("input")[0].value);
    for (let i = 0 ; i < length; i++) {
        var pillar = document.createElement("div");
        arr.push(Math.floor(Math.random() * 200));
        pillar.classList.add("pillar");
        pillar.setAttribute("style", "height:" + arr[i] + "px; width:" + Number(division * 0.85) + "px; margin-left:" + Number(division * 0.15) + "px;");
        document.getElementById("result").appendChild(pillar);
    }
});

document.getElementsByTagName("input")[2].addEventListener("click",function(){
    var value = document.getElementById("Selector").value;
    let arr = [];
    let pillars = document.getElementsByClassName("pillar");

    for (var i = 0; i <pillars.length ; i++) {
        arr.push(pillars[i].clientHeight);
    }
    switch(value){
        case '1':
            arrs = [];
            QuickSort(arr,0,arr.length-1);
            break;
        case '2':
            arrs = [];
            MergeSortInPlace(arr,0,arr.length);
            break;
    }

    for(let i = 0; i < arrs.length; i++){
        setTimeout(printPillars,300 * (i+1),arrs[i]);
    }
});



function QuickSort(pillars,low,high){
    if (low >= high){
        return
    }
    
    var s = low;
    var e = high;

    var m = parseInt((low+high) / 2);
    var pivot = pillars[m];

    while (s<=e){        
        while (pillars[s] < pivot){
            s += 1;
        }
        while (pillars[e] > pivot){
            e -= 1;
        }
        if (s <= e){
            temp = pillars[s];
            pillars[s] = pillars[e];
            pillars[e] = temp;
            s += 1;
            e -= 1;
        }
        let t = [];
        for (let i = 0; i <pillars.length; i++) { 
            t.push(pillars[i]);
        }
        arrs.push(t);
    }
    QuickSort(pillars,low,e);
    QuickSort(pillars,s,high);
}

function MergeSortInPlace(arr,s,e){
    if (e-s <= 1){
        return;
    }
    var m = Math.floor((s+e)/2);
    MergeSortInPlace(arr,s,m);
    MergeSortInPlace(arr,m,e);

    MergeInPlace(arr,s,m,e);
    let t =[];
    for(let k = 0; k <arr.length;k++){
        t.push(arr[k]);
    }
    arrs.push(t);
}

function MergeInPlace(arr,s,m,e){
    let res = [];
    var i = s;
    var j = m;

    while (i < m && j < s){
        if (arr[i] < arr[j]){
            res.push(arr[i]);
            i +=1;
        }else{
            res.push(arr[j]);
            j +=1;
        }
    }
    while (i < m){
        res.push(arr[i]);
        i += 1;
    }
    while (j < e){
        res.push(arr[j]);
        j += 1;
    }
    let t =[];
    for(let k = 0; k <res.length;k++){
        arr[s+k] = res[k];
    }
    
    for(let k = 0; k <res.length;k++){
        t.push(arr[k]);
    }
    arrs.push(t);
}

function printPillars(arr){
    document.getElementById("result").innerHTML = "";
    console.log(arr);
    var NoofPillars = Number(document.getElementsByTagName("input")[0].value);
    var division = resultDiv.clientWidth/NoofPillars;
    for (let i = 0; i < arr.length; i++){
        let pillar = document.createElement('div');
        pillar.classList.add("pillar");
        pillar.setAttribute("style", "height:" + arr[i] + "px; width:" + Number(division * 0.85) + "px; margin-left:" + Number(division * 0.15) + "px;");
        document.getElementById("result").appendChild(pillar);
    }
}
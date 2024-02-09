let arr = [];
let someVariable = 0;
let element;
function arrayTaker() {
    for (let i = 0; i < 5; i++) {
        someVariable = (parseInt)(document.querySelector(".c" + i).value);
        element = document.querySelector(".bar-" + i);
        element.textContent=someVariable;
        element.style.height = (someVariable * 0.4326) + "vh";
        element.style.border = "4px solid black";
        arr[i] = someVariable;
    }
}
function inputChecker(){
    for(let i=0;i<5;i++)
    {
          document.querySelectorAll("input")[i].addEventListener("input",(e)=>
          {
            inputValueChecker(e);
          });
    }
}
function inputValueChecker(e)
{
         if(document.querySelector("."+e.srcElement.className).value>100 && arr.length!=5)
         {
            document.querySelector(".first-button button").disabled=true;
         }
         else if(document.querySelector("."+e.srcElement.className).value<=100){
            document.querySelector(".first-button button").disabled=false;
         }
}
inputChecker();
document.querySelector(".first-button button").addEventListener("click", arrayTaker);
document.querySelector(".Bubble-button p").addEventListener("click",bubbleSorting);
// function numberComparator(i,j)
// {
// do {
//         for(let i=0;i<100000000;i++)
//         {
            
//         }
// } while (condition);
//     document.querySelector(".bar-"+i).classList.add("color-changer1");
//     setTimeout(()=>
//     {

//         document.querySelector(".bar-"+i).classList.remove("color-changer1");
//     });
//     document.querySelector(".bar-"+j).classList.add("color-changer2");
//     setTimeout(()=>
//     {

//         document.querySelector(".bar-"+j).classList.remove("color-changer2");
//     });
//     document.querySelector(".bar-"+j).classList.remove("color-changer2");
//     if(arr[i]>arr[j])
//     {
//         return true;
//     }
//     else{
//            return false;
//     }

// }
function bubbleSorting() {
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (numberComparator(j,j+1)) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}

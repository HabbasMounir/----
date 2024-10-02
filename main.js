let grid=document.querySelector('.grid')
let list=document.querySelector('.list')
let dataGrid=[]

let time = [
  "08:00",
    "09:30",
    "11:00",
    "12:30",
    "14:00",
    "15:30",
    "17:00"
  ]
let days = ["الاحد",
    "الاثنين",
    "الثلاثاء",
    "الاربعاء",
    "الخميس",
    ]

    for (let index = 1; index <=6; index++) {
      // console.log(time[index])
      for (let kndex = 1; kndex <=7; kndex++) {
          grid.innerHTML+=`<span style='grid-area: ${kndex}/${index};z-index:0; opacity:0.5'></span>`
      }
  }
// grid.innerHTML+=`
// <span style='
//   grid-area: 2/2/4/2; 
//     writing-mode: vertical-lr;
//     align-items: center;
//     text-align: center;
//     display: flex;
//     justify-content: center;
//     background: rgb(53, 26, 59);
//     z-index:1;
// '> محاسبة الشركات </span>
// `
// grid.innerHTML+=`
// <span style='
//   grid-area: 3/4; 
//     // writing-mode: vertical-lr;
//     align-items: center;
//     text-align: center;
//     display: flex;
//     justify-content: center;
//     background: rgb(00, 26, 59);
//         z-index:1;

// '>احصاء مالي</span>
// `
// grid.innerHTML+=`
// <span style='
//   grid-area: 5/4; 
//     // writing-mode: vertical-lr;
//     align-items: center;
//     text-align: center;
//     display: flex;
//     justify-content: center;
//     background: rgb(100, 26, 59);
//         z-index:1;

// '> محاسبة</span>
// `
// grid.innerHTML+=`
// <span style='
//   grid-area: 6/4; 
//     // writing-mode: vertical-lr;
//     align-items: center;
//     text-align: center;
//     display: flex;
//     justify-content: center;
//     background: rgb(1, 206, 59);
//         z-index:1;

// '> مالية</span>
// `
// grid.innerHTML+=`
// <span style='
//   grid-area: 5/2; 
//     // writing-mode: vertical-lr;
//     align-items: center;
//     text-align: center;
//     display: flex;
//     justify-content: center;
//     background: rgb(100, 26, 59);
//         z-index:1;

// '> تدقيق داخلي</span>
// `










let addBt = document.querySelector(".addBt");
let err = document.querySelector(".err");
let inputtitle = document.getElementById("title")

let inputday = document.getElementById("day")
let inputsttime = document.getElementById("sttime")
let inputendtime = document.getElementById("endtime")
let inputcolor = document.getElementById("color")
let inputType = document.querySelectorAll('input[name="type"]')
let inputTeacher = document.getElementById("teacher")


addBt.addEventListener("click", function( event ) { 
  let type=''
 
  for (let i = 0; i < inputType.length; i++) if (inputType[i].checked) type=inputType[i]

if (inputendtime.value==''  )   err.innerHTML='choose end time'  
if (inputsttime.value==''   )   err.innerHTML='choose start time'  
if (inputday.value==''      )   err.innerHTML='choose day'  
if (inputTeacher.value==''  )   err.innerHTML='add teacher name' 
if (inputtitle.value==''    )   err.innerHTML='add title' 
if (type==''                )   err.innerHTML='choose type' 
setTimeout(()=>err.innerHTML='',2000)
if (inputtitle.value=='' ||inputday.value=='' ||inputsttime.value=='' ||inputendtime.value==''  ||type==''||inputTeacher.value=='' )   return 
dataGrid.push({
  id:dataGrid.length,
  title:inputtitle.value,
  teacher:inputTeacher.value,
  type:type.value,
  day:inputday.value,
  sttime:inputsttime.value,
  endtime:inputendtime.value,
  color:`rgb(${Math.random()*255},${Math.random()*25},${Math.random()*255})`
})
addingdate()
movedate()
})






function addingdate(){
  list.innerHTML=`<div class="list__li">
            <div class="li__color"style="background:gray "></div>
            <div>type</div> 
            <div>title</div> 
            <div>teacher</div> 
            <div>day</div> 
            <div>start time</div> 
            <div>end time</div> 

          </div>`
  grid.innerHTML=`<span class="time" fixed>  التوقيت  </span>
          <span class="Sunday" fixed>  الاحد  </span>
          <span class="Monday" fixed> الاثنين </span>
          <span class="Tuesday" fixed>  الثلاثاء</span>
          <span class="Wednesday" fixed> الاربعاء</span>
          <span class="Thursday" fixed>  الخميس  </span>
          <span class="first--time" fixed>08.00-09.30</span>
          <span  class="second--time" fixed>09.30-11.00</span>
          <span  class="third--time" fixed>11.00-12.30</span>
          <span  class="fourth--time" fixed>12.30-14.00</span>
          <span  class="fifth--time" fixed>14.00-15.30</span>
          <span  class="sixth--time" fixed>15.30-17.00</span>`
  dataGrid.map((ele)=>{
    for (let index = 1; index <=6; index++) {
      // console.log(time[index])
      for (let kndex = 1; kndex <=7; kndex++) {
          grid.innerHTML+=`<span style='grid-area: ${kndex}/${index};z-index:0; opacity:0.5'></span>`
      }
  }
 
  let myday=
list.innerHTML+=`
<div class="list__li">
  <div class="li__color"style="background:${ele.color} "></div>
    <div>${ele.type}</div> 
      <div>${ele.title}</div> 
        <div>${ele.teacher}</div> 

    <div>${days[+ele.day-2]}</div> 
    <div>${time[+ele.sttime-2]}</div> 
    <div>${time[+ele.endtime-2]}</div> 


</div>

`

grid.innerHTML+=`
<span 
id="${ele.id}"
style='
grid-area: ${ele.sttime}/${ele.day}/${ele.endtime}/${ele.day}; 
// writing-mode: vertical-lr;
align-items: center;
text-align: center;
display: flex;
justify-content: center;
background:${ele.color}  ;
z-index:1;
cursor:pointer
'> ${ele.title} </span>
`
  })
  // console.log(list)
 




}















let dragcolor,fromcolor,tocolor
dragcolor='purple'
fromcolor='white'
tocolor='gray'
function movedate(){
  let test = document.querySelectorAll(".grid>*");
let from='1/5'
let to='1/auto'
let target=''
let dragon=false
let firstClick=true
let ibgdraged='',ibgfrom,ibgto
let eledraged,elefrom,eleto
let eledragedid=''
test.forEach(a=>{
  a.addEventListener("click", function( event ) {   
    if(a.hasAttribute('fixed')) return
    if (dragon==false) {
      if (a.innerHTML!='') {
        eledraged=a
        eledragedid=eledraged.getAttribute('id')
        ibgdraged= event.target.style.background
        // a.style.background = dragcolor;
        a.style.opacity = 0.8;
        a.style.pointerEvents= "none";
        dragon=true
      }
    }
    if (dragon) {
      if (a.innerHTML=='') {
        if (firstClick) { // from 
          elefrom=a
          ibgfrom= event.target.style.background
          a.style.background = fromcolor;
          // from=a.style.gridArea
          firstClick=false
        }else{  // to
          eleto=a
          ibgto= event.target.style.background
          a.style.background = tocolor;
          // to=`${+a.style.gridRowStart+1}/${+a.style.gridColumnStart+1}`
          console.log(ibgdraged)
          // eledraged.style.gridArea=`${from}/${to}`
          eledraged.style.background=ibgdraged
          eledraged.style.pointerEvents='unset'
          elefrom.style.background=''
          eleto.style.background=''
          dragon=false
          firstClick=true


          // change dataGrid
dataGrid[eledragedid].day=a.style.gridColumnStart
dataGrid[eledragedid].sttime=elefrom.style.gridRowStart
dataGrid[eledragedid].endtime=+a.style.gridRowStart+1
console.log(eledragedid,dataGrid[eledragedid],elefrom)
addingdate()
movedate()
        }
      }
    }
})
}, false);
}
movedate()
const sub=document.querySelector(`.submit`);
let score=0;
sub.addEventListener(`click` , (e) => {
    e.preventDefault();
    if(document.getElementsByClassName(`s`)[0].checked)
    score++;
    if(document.getElementsByClassName(`b`)[1].checked)
    score++;
    if(document.getElementsByClassName(`l`)[2].checked||document.getElementsByClassName(`l`)[3].checked||document.getElementsByClassName(`l`)[4].checked||document.getElementsByClassName(`l`)[5].checked)
    score++;
    if(document.getElementsByClassName(`b`)[2].checked)
    score++;
    if(document.getElementsByClassName(`r`)[3].checked||document.getElementsByClassName(`r`)[4].checked||document.getElementsByClassName(`r`)[5].checked||document.getElementsByClassName(`r`)[6].checked)
    score++;

    let iTag=document.getElementById(`iTag`);
    iTag.className=`fa-solid fa-circle-check`;
    let spanTag=document.getElementById(`spanTag`);
    spanTag.innerText=` Thanks,your responses have been submitted.Your score is : `+score+`/5`;

    let parent=document.querySelector(`.ans`);
    parent.appendChild(iTag);
    parent.appendChild(spanTag);
    score=0;
    sub.addEventListener(`click` , () =>{
        location.reload();
    }) 
    setTimeout(()=>{
        location.reload();
     }, 5000);
})





import "./style.min.css";
console.log('hi2');
let priori;
let objTitle;
let count=0;

//document.querySelector('#low').addEventListener('onclick', function(e) {consol.log(e.target.id);});
document.querySelector("#create").addEventListener('click',call_stack);
let sidebar=document.querySelector(".sidepanel");
let display=document.querySelector(".display");
let Title;
let decp;
let due;

let note;

function call_stack(){
  clear_content();
  create_header();
  create_todo();
}
function clear_content(){
  display.innerHTML="";
  Title="";
  priori="";
  decp="";
  due="";
  note="";
  objTitle="";
  
}

function create_header(){
  let h5=document.createElement('h5');
  h5.textContent="display";
  display.appendChild(h5);
}
function create_todo(){
    let new_div=document.createElement('div');
    new_div.setAttribute('id','todo');

    let title=document.createElement('input');
    title.setAttribute('id','title');
    title.setAttribute('type','text');
    
    title.setAttribute('placeholder','TITLE');
    

    let Description=document.createElement('div');
    Description.setAttribute('class','Description');
    let dlable=document.createElement('p');
    dlable.setAttribute('id','dlable');
    dlable.textContent="Description";
    let desp=document.createElement('input');
    desp.setAttribute('id','desp');
    Description.appendChild(dlable);
    Description.appendChild(desp);

    let dueDate=document.createElement('div');
    dueDate.setAttribute('class','dueDate');
    let dtlable=document.createElement('p');
    dtlable.setAttribute('id','dtlable');
    dtlable.textContent="dueDate";
    let date=document.createElement('input');
    date.setAttribute('type','date');
    date.setAttribute('id','date');
    dueDate.appendChild(dtlable);
    dueDate.appendChild(date);


    let Priority=document.createElement('div');
    Priority.setAttribute('class','Priority');
    let prlable=document.createElement('p');
    prlable.setAttribute('id','prlable');
    prlable.textContent="Priority";
let dropdown=document.createElement('div');
dropdown.setAttribute('class','dropdown');
let dropbtn=document.createElement('button');
dropbtn.setAttribute('class','dropbtn');
dropbtn.textContent="Priority";
let dropdown_content=document.createElement('div');
dropdown_content.setAttribute('class','dropdown_content');
let low=document.createElement('a');
low.setAttribute('id','low');
low.setAttribute('class','item');
//low.setAttribute('onclick','get_priori()');
low.onclick=function(e){ priori=e.target.id;};
low.textContent="Low";
low.setAttribute('href','#');

let medium=document.createElement('a');
medium.setAttribute('id','medium');
medium.setAttribute('class','item');
medium.onclick=function(e){ priori=e.target.id;};
medium.textContent="Medium";
medium.setAttribute('href','#');

let high=document.createElement('a');
high.setAttribute('id','high');
high.setAttribute('class','item');
high.onclick=function(e){ priori=e.target.id;};
high.textContent="High";
high.setAttribute('href','#');

dropdown_content.appendChild(low);
dropdown_content.appendChild(medium);
dropdown_content.appendChild(high);

dropdown.appendChild(dropbtn);
dropdown.appendChild(dropdown_content);
Priority.appendChild(prlable);
Priority.appendChild(dropdown);

let notes=document.createElement('textarea');

notes.setAttribute('id','notes');
notes.setAttribute('placeholder','Notes Here');

let done=document.createElement('button');
done.textContent="Done";
done.setAttribute('id','done');
done.addEventListener('click',get_val);

new_div.appendChild(title);
new_div.appendChild(Description);
new_div.appendChild(dueDate);
new_div.appendChild(Priority);
new_div.appendChild(notes);
new_div.appendChild(done);

display.appendChild(new_div);
//document.querySelector('#low').addEventListener('onclick', function(e) {consol.log(e.target.id);});
}

function get_val(){
  Title=document.querySelector('#title').value;
   decp=document.querySelector('#desp').value;
   due=document.querySelector('#date').value;
   note=document.querySelector('#notes').value;
   objTitle=`title${count}`;
   window[`title${count}`]=maker(Title,decp,due,priori,note);
   console.log(window[`title${count}`]);
   count+=1;
  create_sidetab();
  clear_content();

}
function create_sidetab(){
  let tab=document.createElement('div');
  tab.setAttribute('id',`${objTitle}`);
  let tabtitle=document.createElement('h3');
  tabtitle.setAttribute('id',`${objTitle}`);
  tabtitle.textContent=`${Title}`;
  tab.appendChild(tabtitle);
  tab.onclick=function(e){display_todo(e.target.id);}
  sidebar.appendChild(tab);
}
function display_todo(name){
  clear_content();
  create_header();
  console.log(name);
  console.log(window[name]);
  let re_div=document.createElement('div');
  re_div.setAttribute('id','todo');
  //title,desp,date,priority,notes
  let re_title=document.createElement('input');
  re_title.setAttribute('id','title');
  re_title.setAttribute('type','text');
  //title.setAttribute('placeholder','TITLE');
  re_title.defaultValue=`${window[name].title}`;
    
  let re_Description=document.createElement('div');
  re_Description.setAttribute('class','Description');
  let re_dlable=document.createElement('p');
  re_dlable.setAttribute('id','dlable');
  re_dlable.textContent="Description";
  let re_desp=document.createElement('input');
  re_desp.setAttribute('id','desp');
  re_desp.defaultValue=`${window[name].desp}`;
  re_Description.appendChild(re_dlable);
  re_Description.appendChild(re_desp);

  let re_dueDate=document.createElement('div');
  re_dueDate.setAttribute('class','dueDate');
  let re_dtlable=document.createElement('p');
  re_dtlable.setAttribute('id','dtlable');
  re_dtlable.textContent="dueDate";
  let re_date=document.createElement('input');
  re_date.setAttribute('type','date');
  re_date.setAttribute('id','date');
  re_date.defaultValue=`${window[name].date}`;
  re_dueDate.appendChild(re_dtlable);
  re_dueDate.appendChild(re_date);

  let re_Priority=document.createElement('div');
  re_Priority.setAttribute('class','Priority');
  let re_prlable=document.createElement('p');
  re_prlable.setAttribute('id','prlable');
  re_prlable.textContent="Priority";
  let re_dropdown=document.createElement('div');
  re_dropdown.setAttribute('class','dropdown');
  let re_dropbtn=document.createElement('button');
  re_dropbtn.setAttribute('class','dropbtn');
  re_dropbtn.textContent="Priority";
  let re_dropdown_content=document.createElement('div');
  re_dropdown_content.setAttribute('class','dropdown_content');
  let re_low=document.createElement('a');
  re_low.setAttribute('id','low');
  re_low.setAttribute('class','item');
//low.setAttribute('onclick','get_priori()');
  re_low.onclick=function(e){ priori=e.target.id;};
  re_low.textContent="Low";
  re_low.setAttribute('href','#');

  let re_medium=document.createElement('a');
  re_medium.setAttribute('id','medium');
  re_medium.setAttribute('class','item');
  re_medium.onclick=function(e){ priori=e.target.id;};
  re_medium.textContent="Medium";
  re_medium.setAttribute('href','#');

  let re_high=document.createElement('a');
  re_high.setAttribute('id','high');
  re_high.setAttribute('class','item');
  re_high.onclick=function(e){ priori=e.target.id;};
  re_high.textContent="High";
  re_high.setAttribute('href','#');

  re_dropdown_content.appendChild(re_low);
  re_dropdown_content.appendChild(re_medium);
  re_dropdown_content.appendChild(re_high);

  re_dropdown.appendChild(re_dropbtn);
  re_dropdown.appendChild(re_dropdown_content);
  re_Priority.appendChild(re_prlable);
  re_Priority.appendChild(re_dropdown);

  let re_notes=document.createElement('textarea');
  re_notes.setAttribute('id','notes');
  re_notes.setAttribute('placeholder','Notes Here');
  re_notes.defaultValue=`${window[name].notes}`;
//title,desp,date,priority,notes
  let re_done=document.createElement('button');
  re_done.textContent="Done";
  re_done.setAttribute('id','done');
  re_done.addEventListener('click',get_val);

  re_div.appendChild(re_title);
  re_div.appendChild(re_Description);
  re_div.appendChild(re_dueDate);
  re_div.appendChild(re_Priority); 
  re_div.appendChild(re_notes);
  re_div.appendChild(re_done);

  display.appendChild(re_div);
}
const maker=(title,desp,date,priority,notes)=>{
  return {title,desp,date,priority,notes};
}
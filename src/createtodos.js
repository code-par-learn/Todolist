import close_view from "./project.js";
import date_checker from "./datecheck.js";
import {close_tab,select_priori,maker,clear_display} from "./common_func";
import {display_todo,edit,delete_todo} from "./edit_todo.js"
export function create_todo(prj_id){
    clear_display()
    let new_div=document.createElement('form');
    new_div.setAttribute('id','todo');
    let title=document.createElement('input');
    title.setAttribute('id','title');
    title.setAttribute('type','text');
    title.setAttribute('placeholder','TITLE');
    title.setAttribute('required', '');
    
    let Description=document.createElement('div');
    Description.setAttribute('class','Description');
    let dlable=document.createElement('p');
    dlable.setAttribute('id','dlable');
    dlable.textContent="Description";
    let desp=document.createElement('input');
    desp.setAttribute('id','desp');
    desp.setAttribute('required', '');
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
    date.setAttribute('required', '');
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
dropbtn.textContent="Select";

let dropdown_content=document.createElement('div');
dropdown_content.setAttribute('class','dropdown_content');
let low=document.createElement('a');
low.setAttribute('id','low');
low.setAttribute('class','item');
low.onclick=function(e){select_priori(e.target.id);};
low.textContent="Low";
low.setAttribute('href','#');

let medium=document.createElement('a');
medium.setAttribute('id','medium');
medium.setAttribute('class','item');
medium.onclick=function(e){ select_priori(e.target.id);};
medium.textContent="Medium";
medium.setAttribute('href','#');

let high=document.createElement('a');
high.setAttribute('id','high');
high.setAttribute('class','item');
high.onclick=function(e){ select_priori(e.target.id);};
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
done.onclick=function(){get_val(prj_id)};
let close_btn=document.createElement('button');
  close_btn.textContent="X";
  close_btn.setAttribute('id','close');
  close_btn.onclick=function(){close_tab();};

new_div.appendChild(close_btn);
new_div.appendChild(title);
new_div.appendChild(Description);
new_div.appendChild(dueDate);
new_div.appendChild(Priority);
new_div.appendChild(notes);
new_div.appendChild(done);

display.appendChild(new_div);

}

 export function get_val(prj_id){
  let prj_arr=localStorage.getItem("prj_arr");
  prj_arr=JSON.parse(prj_arr);
  let op_prj=prj_arr[prj_id];
  console.log(op_prj);
    //let prj_arr1=window.localStorage.getItem(`${prj_id}`);
    //prj_arr1=JSON.parse(prj_arr1);
   let  Title=document.querySelector('#title').value;
   let   decp=document.querySelector('#desp').value;
   let  due=document.querySelector('#date').value;
   let  note=document.querySelector('#notes').value;
  let priori=document.querySelector('.dropbtn').textContent;
  if(priori=="Select"){
    priori="low";
  }
     
     if(Title){
      if(decp){
          if(due){
  
          }
          else{
              return;
          }
      }
      else{
          return;
      }
  }
  else{
      return;
  }
     
     let td_count=localStorage.getItem("todo_count")||'0';
     let new_todo=maker(`title${td_count}`,Title,decp,due,priori,note);

     //prj_arr1.todo[`title${td_count}`]=new_todo;
    //localStorage.setItem(`${prj_id}`,JSON.stringify(prj_arr1));
  op_prj.todo[`title${td_count}`]=new_todo;
   localStorage.setItem("prj_arr",JSON.stringify(prj_arr));
  
   //let for_date=localStorage.getItem("prj_arr");
   //for_date=JSON.parse(for_date);
     //create_sidetab(Title,prj_id);
    //date_checker(for_date[prj_id].todo[`title${td_count}`],prj_id);
    date_checker(`title${td_count}`,due,Title,prj_id);
    create_sidetab(`title${td_count}`,Title,prj_id);
    localStorage.setItem("todo_count",parseInt(td_count)+1);
     close_tab();
   
}
export function create_sidetab(td_count,title,prj_id){
   
    let tab=document.createElement('button');
    tab.setAttribute('id',`${td_count}`);
    tab.setAttribute('class','sidetab');
    tab.setAttribute('value',`${prj_id}`);
    tab.textContent=`${title}`;
    tab.onclick=function(e){send_val(e.target.id);}
    let prj_div=document.querySelector(`#${prj_id}`);;
    prj_div.appendChild(tab);
  }
export  function send_val(todo_id){
    console.log(todo_id);
      let todos=document.querySelector(`#${todo_id}`);
      let prj_id=todos.value;
      
      display_todo(prj_id,todo_id);
  }
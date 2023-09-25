import {close_tab,select_priori,maker,clear_display} from "./common_func";
import date_checker from "./datecheck.js";

export function display_todo(obj_id,todo_id){
  clear_display();
  //let prj_arr=localStorage.getItem(`${obj_id}`);
  //prj_arr=JSON.parse(prj_arr);
let prj_arr=localStorage.getItem("prj_arr");
prj_arr=JSON.parse(prj_arr);
let op_prj=prj_arr[obj_id]
let obj=op_prj.todo[todo_id];
 console.log(prj_arr[obj_id].todo[todo_id]);
let display=document.querySelector(".display");
    let re_div=document.createElement('div');
    re_div.setAttribute('id','todo');
    let re_title=document.createElement('input');
    re_title.setAttribute('id','title');
    re_title.setAttribute('type','text');
    
    re_title.defaultValue=`${obj.title}`;
      
    let re_Description=document.createElement('div');
    re_Description.setAttribute('class','Description');
    let re_dlable=document.createElement('p');
    re_dlable.setAttribute('id','dlable');
    re_dlable.textContent="Description";
    let re_desp=document.createElement('input');
    re_desp.setAttribute('id','desp');
    re_desp.defaultValue=`${obj.desp}`;
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
    re_date.defaultValue=`${obj.date}`;
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
    re_dropbtn.textContent=`${obj.priority}`;
    let re_dropdown_content=document.createElement('div');
    re_dropdown_content.setAttribute('class','dropdown_content');
    let re_low=document.createElement('a');
    re_low.setAttribute('id','low');
    re_low.setAttribute('class','item');

    re_low.textContent="Low";
    re_low.setAttribute('href','#');
    re_low.onclick=function(e){select_priori(e.target.id);};
  
    let re_medium=document.createElement('a');
    re_medium.setAttribute('id','medium');
    re_medium.setAttribute('class','item');
   
    re_medium.onclick=function(e){select_priori(e.target.id);};
    re_medium.textContent="Medium";
    re_medium.setAttribute('href','#');
  
    let re_high=document.createElement('a');
    re_high.setAttribute('id','high');
    re_high.setAttribute('class','item');
  
    re_high.onclick=function(e){select_priori(e.target.id);};
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
    re_notes.defaultValue=`${obj.notes}`;
 
    let re_done=document.createElement('button');
    re_done.textContent="Done";
    re_done.setAttribute('id','done');
    re_done.onclick=function(){edit(obj_id,todo_id);}
   
  
    let deletebtn=document.createElement('button');
    deletebtn.textContent="Delete";
    deletebtn.setAttribute('id','delete');
    deletebtn.onclick=function(){delete_todo(obj_id,todo_id);
      document.getElementById('todo').remove();
    }
    
  
    let close_btn=document.createElement('button');
    close_btn.textContent="X";
    close_btn.setAttribute('id','close');
    close_btn.onclick=function(){close_tab();};
  
    re_div.appendChild(close_btn);
    re_div.appendChild(re_title);
    re_div.appendChild(re_Description);
    re_div.appendChild(re_dueDate);
    re_div.appendChild(re_Priority); 
    re_div.appendChild(re_notes);
    re_div.appendChild(re_done);
    re_div.appendChild(deletebtn);
    
  
    display.appendChild(re_div);
  }
 export function edit(obj_id,todo_id){
    let Title=document.querySelector('#title').value;
    let  decp=document.querySelector('#desp').value;
    let  due=document.querySelector('#date').value;
    let  note=document.querySelector('#notes').value;
    let  priori=document.querySelector('.dropbtn').textContent;
    /*
    let prj_arr=window.localStorage.getItem(`${obj_id}`);
    prj_arr=JSON.parse(prj_arr);
    let obj=prj_arr.todo[todo_id];
*/
let prj_arr=localStorage.getItem("prj_arr");
prj_arr=JSON.parse(prj_arr);
let op_prj=prj_arr[obj_id]
let obj=op_prj.todo[todo_id];


    obj.title=Title;
    
    obj.desp=decp;
    obj.date=due;
    document.getElementById(todo_id).remove();
    date_checker(todo_id,due,Title,obj_id);
    obj.priority=priori;
    obj.notes=note;

     //localStorage.setItem(`${obj_id}`,JSON.stringify(prj_arr));   
     localStorage.setItem("prj_arr",JSON.stringify(prj_arr));
     let title_list=document.querySelectorAll(`#${todo_id}`);
     let arr = Array.from(title_list);
     arr.forEach(function(element) {
      element.textContent=Title; 
  });
     close_tab();
     
  }

 export default function delete_todo(prj_id,todo_id){
  

  let prj_arr=localStorage.getItem("prj_arr");
prj_arr=JSON.parse(prj_arr);

   
    let todos=document.querySelectorAll(`#${todo_id}`);
    
    todos.forEach(todo => {
      todo.remove();
    }); 
    
    delete prj_arr[prj_id].todo[todo_id];
    localStorage.setItem("prj_arr",JSON.stringify(prj_arr));
  
  }
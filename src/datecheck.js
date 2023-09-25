const {format} = require('date-fns');
import {display_todo,edit,delete_todo} from "./edit_todo.js"

export default function date_checker(todo_id,Due,title,prj_id){
  
  const date_now = new Date(Due);
  let thisday=new Date();
  let due_date=format(date_now, 'dd.MM.yyyy');
  let today =format(thisday,'dd.MM.yyyy');
let thismonth=format(thisday,'MM');
  let date_month=format(date_now,'MM');
  if( due_date===today){
            
    create_sidetab_today(todo_id,title,prj_id,'#Today_div');
    //Today.push(due_date);
  }
  else if(thismonth===date_month){
    create_sidetab_today(todo_id,title,prj_id,'#ThisMonth');
    //this_Month.push(due_date);
        }
 
}
export function create_sidetab_today(td_count,title,prj_id,where){
  let tab=document.createElement('button');
  
  tab.setAttribute('id',`${td_count}`);
  tab.setAttribute('class','sidetab');
  tab.setAttribute('value',`${prj_id}`);
 
  tab.textContent=`${title}`;
  
  tab.onclick=function(e){send_val(e.target.id);}
  let today_div=document.querySelector(where);
  today_div.appendChild(tab);
}
function send_val(todo_id){
  let todo=document.querySelector(`#${todo_id}`);
  
  let prj_id=todo.value;
  display_todo(prj_id,todo_id);
}

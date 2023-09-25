import {delete_project,close_view} from "./project.js";
import {create_todo,get_val,create_sidetab} from "./createtodos.js";
import {display_todo,edit,delete_todo} from "./edit_todo.js"

export default function open_prj(prj_id){
    //let prj_arr=window.localStorage.getItem(`${prj_id}`);
    //prj_arr=JSON.parse(prj_arr);
let prj_arr=localStorage.getItem("prj_arr");
prj_arr=JSON.parse(prj_arr);
let op_prj=prj_arr[prj_id];
console.log(op_prj);

    let prj=document.createElement('div');
    prj.setAttribute('id','view_prj');

    let title=document.createElement('div');
    title.setAttribute('id','view_t');
    title.textContent=op_prj.prj_title;

    let decp=document.createElement('div');
    decp.setAttribute('id','view_d');
    let p=document.createElement('p');
    p.textContent=op_prj.prj_decp;
    decp.appendChild(p);
    let div=document.createElement('div');
    div.setAttribute('id','btn_todo_div');
    div.textContent="create todo";
    let crt_todo=document.createElement('button');
    crt_todo.setAttribute('id','btn_todo');
    crt_todo.onclick=function(){create_todo(prj_id)};
    
    crt_todo.textContent='+';//this is the create_todo button.
    div.appendChild(crt_todo);

    let close=document.createElement('button');
    close.setAttribute('id','close');
    close.addEventListener('click',close_view);
    close.textContent='X';

    let prj_todo=document.createElement('div');
    prj_todo.setAttribute('id','prj_todo');
    
    if((Object.keys(op_prj.todo).length)>0){
      console.log("inside");
      let len=Object.keys(op_prj.todo).length;
      const iterate = (obj) => {
        console.log("ii");
        let Title;
          let priori;
          let todo_id;
          let Due;
        Object.keys(obj).forEach(key => {
        
        if (typeof obj[key] === 'object' && obj[key] !== null) {
                iterate(obj[key])
            }
        else{
        
         
          if (key=="title"){
            Title=obj[key];
          }
          else if(key=="date"){
            Due=obj[key]
          }
          else if(key=="priority"){
            priori=obj[key]
          }
          else if(key=="todo_id"){
            todo_id=obj[key]
          }
          
        }
       
        })
        if(Title!=undefined){
        
        let todo_div=document.createElement('button');
        todo_div.setAttribute('id',`${todo_id}${prj_id}`);
        //todo_div.setAttribute('data-value',`${prj_id}`);
        todo_div.onclick=function(e){send_val(e.target.id);}
        
        if(priori=='low'){
          todo_div.setAttribute('class','yellow');
          
        }
        else if(priori=="medium"){
          todo_div.setAttribute('class','green');
         
         
        }
        else {
          todo_div.setAttribute('class','red');
   
        }

        todo_div.textContent=`${Title} ${Due}`;
        
        prj_todo.appendChild(todo_div);


      }
      
    }
    
    let obj=op_prj.todo;
    iterate(obj);
    }

    let delete_prj=document.createElement('button');
    delete_prj.setAttribute('id','delete_prj');
    delete_prj.onclick=function(){delete_project(prj_id)};
    delete_prj.textContent="Delete";

prj.appendChild(close);
    prj.appendChild(title);
    prj.appendChild(decp);
    prj.appendChild(div);
    prj.appendChild(prj_todo);
    prj.appendChild(delete_prj);
    while(display.firstChild){
        display.removeChild(display.firstChild);
    }
    display.appendChild(prj);
    
}
function send_val(todo_id){
  console.log(todo_id);
  let idx=todo_id.indexOf("p");
  let td_id=todo_id.slice(0,idx);
  let pj_id=todo_id.slice(idx);
  console.log(td_id);
  console.log(pj_id);
  //let todo=document.querySelector(`#${todo_id}`);
  
  //let prj_id=todo.getAttribute("data-value");
  //data-value
  
  display_todo(pj_id,td_id);

}
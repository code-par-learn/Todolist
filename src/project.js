const {format} = require('date-fns');
import {create_todo,select_priori,get_val,create_sidetab} from "./createtodos.js";
import delete_todo from "./edit_todo.js";
import open_prj from "./opn_prj.js";
export function new_project(){
  
  document.querySelector(".display").innerHTML="";
    let project=document.createElement('form');
    project.setAttribute('class','prjdiv');
  
    let prjtitle=document.createElement('input');
    prjtitle.setAttribute('id','prjtitle');
    prjtitle.setAttribute('type','text');
    prjtitle.placeholder="Project Title";
    prjtitle.setAttribute('required', '');
  
    let prjdecp=document.createElement('input')
    prjdecp.setAttribute('type','text');
    prjdecp.setAttribute('id','prjdecp');
    prjdecp.placeholder="Project Description";
    prjdecp.setAttribute('required', '');
  
    let done=document.createElement('button');
    done.setAttribute('id','prj_done');
    done.addEventListener('click',check_it);
    done.textContent="Done";

    let close=document.createElement('button');
    close.setAttribute('id','close');
    close.addEventListener('click',close_prj);
    close.textContent='X';
    project.appendChild(close);
    project.appendChild(prjtitle);
    project.appendChild(prjdecp);
   
    project.appendChild(done);
    
    while(display.firstChild){
        display.removeChild(display.firstChild);
    }
    
    display.appendChild(project);
  }
  
export  function check_it(){
    let title=document.querySelector('#prjtitle').value;
    let decp=document.querySelector('#prjdecp').value;
    let todo={};
    
    if(title){
      
      if(decp){
  
      }
      else{
        return;
      }
    }
    else{
     
      return;
    }
    
    let count=window.localStorage.getItem("prj_count")||'0';
    let prj_copy=localStorage.getItem("prj_copy")||"[]";
    prj_copy=JSON.parse(prj_copy);
    let prj_temp=project_maker(`prj${count}`,title,decp,todo);
    prj_copy.push(`prj${count}`);
    //localStorage.setItem(`prj${count}`,JSON.stringify(prj_temp));
     
    to_prj_arr(`prj${count}`,prj_temp);
    
    close_prj();
    add_prj(title,`prj${count}`);
    localStorage.setItem("prj_copy",JSON.stringify(prj_copy));
    localStorage.setItem("prj_count",parseInt(count)+1);
   
  }
export function to_prj_arr(prj_name,prj_temp){
  let prj_arr=localStorage.getItem("prj_arr")||"{}";
  prj_arr=JSON.parse(prj_arr);
  prj_arr[prj_name]=prj_temp;
  localStorage.setItem("prj_arr",JSON.stringify(prj_arr));
}
export  const project_maker=(prj_id,prj_title,prj_decp,todo)=>{
    return {prj_id,prj_title,prj_decp,todo};
  }
export function add_prj(title,prj_id){
    let sidediv=document.createElement('div');
    let h3=document.createElement('button');
    h3.textContent=title;
    h3.setAttribute('id',`${prj_id}`);
 
    sidediv.setAttribute('id',`${prj_id}`);
    sidediv.setAttribute('class','prj_side');
  
    h3.onclick=function(e){open_prj(e.target.id)};
    sidediv.appendChild(h3);
    
    
    
    
    sidebar.appendChild(sidediv);
}
export function close_view(){
    document.querySelector('#view_prj').remove();
   
}
export function close_prj(){
    document.querySelector('.prjdiv').remove();
  
}

export function delete_project(prj_id){
  
 let prj_arr=localStorage.getItem("prj_arr");
 prj_arr=JSON.parse(prj_arr);

 let prj_copy=localStorage.getItem("prj_copy")||"[]";
 prj_copy=JSON.parse(prj_copy);

  let dle_prj=prj_arr[prj_id];
  //dle_prj=JSON.parse(dle_prj);
  if((Object.keys(dle_prj.todo).length)>0){
    Object.keys(dle_prj.todo).forEach(key => {
    
      console.log(`${key}`);
      delete_todo(prj_id,key);
  });
  }
  console.log(dle_prj);

  close_view();
  delete prj_arr[prj_id];

 for (let i=0;i<prj_copy.length;i++){
   if(prj_copy[i]==prj_id){
     delete prj_copy[i];
     break;
   }
 }
 localStorage.setItem("prj_copy",JSON.stringify(prj_copy));
  localStorage.setItem("prj_arr",JSON.stringify(prj_arr));
  //localStorage.removeItem(`${prj_id}`);
  document.querySelector(`#${prj_id}`).remove();
}
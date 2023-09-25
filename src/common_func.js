import {new_project,close_view,check_it,project_maker,add_prj,close_prj, open_prj,to_prj_arr} from "./project.js";
import {create_todo,get_val,create_sidetab,send_val} from "./createtodos.js";
import date_checker from "./datecheck.js";

export function select_priori(ele_id){
    //priori=ele_id;
    let text=document.querySelector('.dropbtn');
    text.textContent=`${ele_id}`;
  
  }
export function clear_display(){
  document.querySelector(".display").innerHTML="";
}
  export const maker=(todo_id,title,desp,date,priority,notes)=>{
   
    return {todo_id,title,desp,date,priority,notes};
  }
  export function close_tab(){
    document.getElementById('todo').remove();
   
  }
  export function add_prj_lclstrg(title,decp,todo){
    let count=window.localStorage.getItem("prj_count")||'0';
    let prj_temp=project_maker(`prj${count}`,title,decp,todo);
    to_prj_arr(`prj${count}`,prj_temp);

    let prj_copy=localStorage.getItem("prj_copy")||"[]";
 prj_copy=JSON.parse(prj_copy);
 console.log(prj_copy);
 prj_copy.push(`prj${count}`);
    //localStorage.setItem(`prj${count}`,JSON.stringify(prj_temp));
    
   // add_prj(title,`prj${count}`);

    add_todo_lclstrg(`prj${count}`,"todo1","decp1","2023-09-21","low","hi there");
    add_todo_lclstrg(`prj${count}`,"todo2","decp2","2023-09-22","medium","hi there you");
    localStorage.setItem("prj_copy",JSON.stringify(prj_copy));
    localStorage.setItem("prj_count",parseInt(count)+1);
  }
  export function add_todo_lclstrg(prj_id,Title,decp,due,priori,note){
    let prj_arr=localStorage.getItem("prj_arr");
    prj_arr=JSON.parse(prj_arr);
    
    let td_count=localStorage.getItem("todo_count")||'0';
    let new_todo=maker(`title${td_count}`,Title,decp,due,priori,note);
    prj_arr[prj_id].todo[`title${td_count}`]=new_todo;
    //localStorage.setItem(`${prj_id}`,JSON.stringify(prj_arr));
   localStorage.setItem("prj_arr",JSON.stringify(prj_arr));
    
    let for_date=localStorage.getItem("prj_arr");
    for_date=JSON.parse(for_date);
      
     //date_checker(for_date[prj_id].todo[`title${td_count}`],prj_id);
     //create_sidetab(Title,prj_id);

    localStorage.setItem("todo_count",parseInt(td_count)+1);
    
  }
  export function set_default(){
    let def=localStorage.getItem("default")||"0";
    if(def=="0"){
      add_prj_lclstrg("prj1","decp1",{});
    add_prj_lclstrg("prj2","decp2",{});
    }
  
    localStorage.setItem("default",1);
  }
  
export function get_back(){
  let prj_arr=localStorage.getItem("prj_arr")||"{}";
  prj_arr=JSON.parse(prj_arr);

  let prj_copy=localStorage.getItem("prj_copy")||"[]";
  prj_copy=JSON.parse(prj_copy);

  for(let i=0;i<prj_copy.length;i++){
    if(prj_copy[i]!=null){
      let op_prj=prj_arr[prj_copy[i]];
      add_prj(op_prj.prj_title,op_prj.prj_id);
      if((Object.keys(op_prj.todo).length)>0){
        const iterate = (obj) => {
        
          let Title;
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
            else if(key=="todo_id"){
              todo_id=obj[key]
            }
          
            
          }
         
          })
          if(Title!=undefined){
          create_sidetab(todo_id,Title,op_prj.prj_id);
          
          date_checker(todo_id,Due,Title,op_prj.prj_id)
         console.log(Title,Due);
  
        }
        
      }
      
      let obj=op_prj.todo;
      iterate(obj);
      }
  
    }
  
    
  }
}
/*
if((Object.keys(op_prj.todo).length)>0){
      
     
      const iterate = (obj) => {
      
        let Title;
          
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
        
          
        }
       
        })
        if(Title!=undefined){
        create_sidetab(Title,op_prj.prj_id);
       

      }
      
    }
    
    let obj=op_prj.todo;
    iterate(obj);
    }

*/
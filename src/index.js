import "./style.min.css";
import {new_project,close_view,check_it,project_maker,add_prj,close_prj, open_prj} from "./project.js";
import {close_tab,select_priori,maker,add_prj_lclstrg,add_todo_lclstrg,set_default,get_back} from "./common_func";
import {create_todo,get_val,create_sidetab} from "./createtodos.js";
import {display_todo,edit,delete_todo} from "./edit_todo.js"
//do not use addeventlistener while adding click you should be using onclick only;

document.querySelector('#prjcreate').addEventListener('click',new_project);
//document.querySelector("#create").addEventListener('click',call_stack);
window.sidebar=document.querySelector(".sidepanel");
window.display=document.querySelector(".display");

localStorage.clear();

set_default();
get_back();
//add_prj_lclstrg("prj3","decp3",{});










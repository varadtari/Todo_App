let todoList=[{item:'riyaaz',dueDate:'4/10/2023'}];
displayItems();
function addTodo(){

   let inputElement=document.querySelector('#todo-input');
   let DateElement=document.querySelector('#todo-date');

  let todoItem=inputElement.value;
  let dateItem=DateElement.value;
  todoList.push({item:todoItem,dueDate:dateItem});
  inputElement.value='';

displayItems();
}
function displayItems(){
let containerElement=document.querySelector('.todo-container');
let newHtml='';


for(let i=0;i<todoList.length;i++)
{
     let item=todoList[i].item;
     let dueDate=todoList[i].dueDate;
     // is same as {item,duedate}=todolist[i]
    newHtml+=`
    
    <span>${item}</span>   
    <span>${dueDate}</span>
    <button class="delete-btn" onclick="
    todoList.splice(${i},1);
    displayItems();
    ">Delete</button>
    
    `;
   
}
containerElement.innerHTML=newHtml;
}
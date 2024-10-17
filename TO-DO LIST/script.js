document.querySelector('#push').onclick = function() {
    let taskInput = document.querySelector('#newtask input');
    
    if (taskInput.value.trim().length == 0) {
        alert("Please Enter a Task");
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${taskInput.value.trim()}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        addDeleteFunctionality();
        addToggleTaskCompletion();
        taskInput.value = "";
    }
  };
  
  function addDeleteFunctionality() {
    let deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(button => {
        button.onclick = function() {
            this.parentNode.remove();
        };
    });
  }
  function addToggleTaskCompletion() {
    let tasks = document.querySelectorAll(".task");
    tasks.forEach(task => {
        task.onclick = function() {
            this.classList.toggle('completed');
        };
    });
  }
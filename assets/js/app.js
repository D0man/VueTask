 Vue.component('todo', {
    template: `<div class="container">
                    <div class="container__buttons">
                        <button @click="addTask" class="button button--add">
                        Add
                        </button>
                        <button :disabled="disabled" @click="removeTask" class="button button--remove">
                        Remove
                        </button>
                        <button :disabled="disabled"  @click="clearTasks" class=" button button--clear">
                        Clear
                        </button>
                    </div>
                    <transition-group name="task" tag="ul" class="tasks">
                        <li v-for="(task, index) in taskList" :key="index" class="task">
                        {{ task }} {{ index }}
                        </li>
                    </transition-group>
                </div>`,
        data: function() {
          return {
            taskList: [],
            taskName: 'Task number',
            disabled: true
          }
        },
        methods: {
            addTask(){
            this.taskList.push(this.taskName);
            this.disabled = false;
            },
            removeTask(){
            this.taskList.pop();
            if (this.taskList.length == 0) this.disabled=true;
            },
            clearTasks(){
            this.taskList = [];
            this.disabled = true;
            },
        }
    });

    const app = new Vue({
      el: '#app',
      data: {
        title: 'Simple Vue to do list without to do'
      },
    })
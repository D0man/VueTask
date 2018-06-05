 Vue.component('todo', {
    template: `<div class="container">
                    <div class="container__buttons">
                        <button @click="addTask" class="button button--add">
                        Add
                        </button>
                        <button v-if="taskList.length" @click="removeTask" class="button button--remove">
                        Remove
                        </button>
                        <button v-if="taskList.length"  @click="clearTasks" class=" button button--clear">
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
            taskName: 'Task number'
          }
        },
        methods: {
            addTask(){
            this.taskList.push(this.taskName);
            },
            removeTask(){
            this.taskList.pop();
            },
            clearTasks(){
            this.taskList = [];
            },
        }
    });

    const app = new Vue({
      el: '#app',
      data: {
        title: 'Simple Vue to do list without to do'
      },
    })
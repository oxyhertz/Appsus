export default {
  props: ['note'],
  template: `
          <section class="note-txt-details" >
              <input :style="{'background-color': note.bgColor}"  type="text" class="note-title-input" @input="updateNote" v-model="updatedNote.title" placeholder="Title...">

              <ul>
                <li v-for="(todo,idx) in updatedNote.info.todos" >
                    <input type="text" @change="updateNote" :class="{'done':todo.doneAt}" class="todo-input" v-model="todo.txt" :style="{'background-color': note.bgColor}">
                    <input  @click="done(todo)" :checked="todo.doneAt" type="checkbox" name="" :id="todo.txt">
                    <button @click="removeTodo(todo.id,idx)">X</button> 
                </li>
              </ul>
          
            </section>
      `,
  components: {},
  created() {
    this.updatedNote = this.note;
  },
  data() {
    return {
      updatedNote: null,
    };
  },
  methods: {
    updateNote() {
      this.$emit('updateNote', this.updatedNote);
    },
    done(todo) {
      todo.doneAt ? (todo.doneAt = null) : (todo.doneAt = Date.now());
      this.updateNote();
    },
    removeTodo(id, idx) {
      console.log(id, idx);
      var todos = this.updatedNote.info.todos;
      todos.splice(idx, 1);
      this.updateNote();
    },
  },
  computed: {},
  unmounted() {},
};

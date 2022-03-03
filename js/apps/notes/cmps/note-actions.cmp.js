import colorPicker from './note-color-pick.cmp.js';
import { eventBus } from '../../../services/eventBus-service.js';

export default {
  props: ['note'],
  template: `
        <section class="note-actions">
           
               <div class="color-palette" @click="chooseColor = !chooseColor" > 
                    <i class="fa-solid fa-palette"></i>
                    <color-picker  v-if="chooseColor" @updateColor="updateColor"/>
                </div>
                <div @click="togglePin">
                  <i v-if="note.isPinned"  class="fa-solid fa-thumbtack"></i>
                  <img v-else src="/css/apps/notes/img/thumbtack.png"  alt="">
                </div>

                <div @click="removeNote">
                  <i class="fa-solid fa-trash"></i>
                </div>

                <div @click="duplicateNote">
                  <i class="fa-solid fa-clone"></i>
                </div>

                <div @click="editNote">
                   <i class="fa-solid fa-pen-to-square"></i>
                </div>
        </section>
    `,
  components: {
    colorPicker,
  },
  created() {},
  data() {
    return {
      chooseColor: false,
    };
  },
  methods: {
    updateColor(color) {
      this.$emit('updateColor', color);
    },
    togglePin() {
      this.$emit('togglePin');
    },
    removeNote() {
      this.$emit('removeNote');
    },
    duplicateNote() {
      this.$emit('duplicateNote');
    },
    editNote() {
      this.$emit('editNote');

      eventBus.emit('openEdit', this.note);
      // this.$router.push(`/notes/${this.note.id}`);
    },
  },
  computed: {},
  unmounted() {},
};

import colorPicker from './note-color-pick.cmp.js';
import { eventBus } from '../../../services/eventBus-service.js';

export default {
  props: ['note'],
  template: `
        <section class="note-actions-details">
            
                <div @click="goBack">
                    <i class="fa-solid fa-arrow-left-long"></i>
                </div>

               <div class="color-palette" @click="chooseColor = !chooseColor" > 
                    <i class="fa-solid fa-palette"></i>
                    <color-picker  v-if="chooseColor" @updateColor="updateColor"/>
                </div>
  
                <div @click="removeNote">
                  <i class="fa-solid fa-trash"></i>
                </div>

                <div @click="sendNote">
                  <i class="fa-solid fa-paper-plane"></i>
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
    goBack() {
      eventBus.emit('closeEdit');
    },
    removeNote() {
      this.$emit('removeNote');
    },
    sendNote() {
      console.log('hi');
      this.$emit('sendNote');
    },
  },
  computed: {},
  unmounted() {},
};

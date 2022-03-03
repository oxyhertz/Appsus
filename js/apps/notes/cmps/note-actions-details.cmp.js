import colorPicker from './note-color-pick.cmp.js';

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
      this.$router.push('/notes');
    },
    removeNote() {
      this.$emit('removeNote');
    },
  },
  computed: {},
  unmounted() {},
};

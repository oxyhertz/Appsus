export default {
  template: `
        <section class="notes-filter-container">
                <input ref="vendorInput" 
                    @input="setFilter" 
                    type="text" 
                    v-model="filterBy.title" 
                    placeholder="Search by title"
                />
                <select v-model="filterBy.type">
                    <option disabled value="">Type:</option>
                    <option value="noteImg">Image</option>
                    <option value="noteTxt">Text</option>
                    <option value="noteVid">Video</option>
                    <option value="noteList">Todos</option>
                </select>
           
        </section>
    `,
  components: {},
  created() {},
  data() {
    return {
      filterBy: {
        title: '',
        type: '',
      },
    };
  },
  methods: {
    setFilter() {
      console.log(this.filterBy);
      this.$emit('filtered', { ...this.filterBy });
    },
  },
  computed: {},
  unmounted() {},
};

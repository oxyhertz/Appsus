export default {
    template: `
        <section class="book-filetr">
         <form action="" type="submit">
              <label>
              Find Your Email:
              <input type="text" v-model="filterBy.subject" placeholder="Search..."> 
              </label>
              <label>
              From:
              <input  type="number" min="19" v-model="filterBy.minPrice" placeholder="minimum$"> 
              </label>
              <label>
              Up to:
              <input  type="number" max="186" v-model="filterBy.maxPrice" placeholder="maximum$"> 
              </label>
              <button @click.prevent="setFilter">Search</button>
         </form>
        </section>
    `,
    data() {
        return {
            filterBy: {
                subject: '',
                minPrice: 0,
                maxPrice: Infinity,
            }
        };
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filterBy);
        }
    }
}
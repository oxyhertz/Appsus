export default {
    template: `
        <section class="email-filetr">
            <div>      
                  <input @input="setFilter" type="text" v-model="filterBy.subject" placeholder="Search Your Email.. ">
            </div>
            <div>
                 <label>
                 <i class="fa-solid fa-arrow-down-a-z sort-az"></i>
                 <input type="checkBox" name="sort" style="opacity:0" v-model="filterBy.ABC">
                 </label>
            </div>
            <div>                   
                   <label for="email-choice">
                        <input list="email-choice-list" id="email-choice" name="email-choice" v-model="filterBy.isRead" @change="setFilter"/>
                            <datalist id="email-choice-list">
                                <option value="All">
                                <option value="Read">
                                <option value="Unread">
                            </datalist>
                    </label>
            </div>
        </section>
    `,
    data() {
        return {
            filterBy: {
                subject: null,
                ABC: null,
                isRead: null
            }
        };
    },
    methods: {
        setFilter() {
            this.$emit('filter', this.filterBy);
        }
    }
}
import { eventBus } from '../../../services/eventBus-service.js'

export default {
    props:['show'],
    template: `
        <section class="email-filetr">
            <button @click="compose"class="compose"> 
                <img src="../../../../css/imgs/compose.jpg"> 
                <span class="compose-txt"> Compose </span>
            </button>

            <div v-if="show">      
                  <input @input="setFilter" type="text" v-model="filterBy.subject" placeholder="Search Your Email.." class="main-search">
            </div>
            <div v-if="show">    
            <select v-model="filterBy.isRead" @change="setFilter" class="email-choice-list">
                    <option disabled value="" selected>Type</option>
                    <option value="All">All</option>
                     <option value="Read">Read</option>
                     <option value="Unread">Unread</option>
                </select>
               
            </div >
                <label v-if="show">
                 <i class="fa-solid fa-arrow-down-a-z sort-az"></i>
                 <input type="checkBox" name="sort" style="display:none" v-model="filterBy.ABC">
                </label>
        </section>
    `,
    data() {
        return {
            filterBy: {
                subject: null,
                ABC: null,
                isRead: ''
            }
        };
    },
    methods: {
        compose() {
            eventBus.emit('compose', true)
          },
        setFilter() {
            this.$emit('filter', this.filterBy);
        }
    }
}
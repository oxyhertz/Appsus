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
               <label for="email-choice">
                 <input list="email-choice-list" id="email-choice" class="email-choice-list" v-model="filterBy.isRead" @change="setFilter">
                 <datalist id="email-choice-list">
                     <option value="All">
                     <option value="Read">
                     <option value="Unread">
                 </datalist>
              </label>
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
                isRead: null
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
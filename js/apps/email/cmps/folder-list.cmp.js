import { eventBus } from '../../../services/eventBus-service.js'

export default {
  props: ['count'],
  template: `
        <section>
            <div class="side-nav-bar">
                <button @click="compose"class="compose"> <img src="../../../../css/imgs/compose.jpg">Compose </button>
                <div @click="setFilter('all')"><i class="fa-solid fa-inbox"></i> Inbox {{count}} </div>
                <div  @click="setFilter('isStarred')"><i class="fa-solid fa-star "></i> Starred  </div>
                <div  @click="setFilter('isSent')"> <i class="fa-solid fa-paper-plane"></i> Sent  </div>
                <!-- <div><i class="fa-solid fa-clock"></i> Snoozed  </div> -->
                <div  @click="setFilter('isDeleted')"> <i class="fa-solid fa-trash-can"></i> Deleted  </div>
            </div>
       </section>
    `,

methods: {
  setFilter(filterType) {
      this.$emit('filtered', filterType)
  },
  compose() {
    eventBus.emit('compose', true)
  },

},
  computed: {},
}

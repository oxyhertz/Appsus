import { eventBus } from '../../../services/eventBus-service.js'

export default {
  props: ['email'],
  template: `
     <section class="email-preview" >
       <div class="preview-container " :class="isReadBgc" >
           <i class="fa-solid fa-star preview-star"></i>
          <div class="preview-content">
                <div class="sender-name" :class="isRead">{{Sender}} </div>
                <div class="email-subjuct" :class="isRead"> {{email.subject}} - </div>
                <div class="preview-email-body">{{emailTxt}} </div>
          </div>
           <div class="actions">
                   <i @click.stop="remove(email.id)" class="fa-solid fa-trash-can"></i>
                   <i  class="fa-solid fa-envelope-open"></i>
                   <i class="fa-solid fa-clock"></i>
                </div>
         </div>
     </section>
    `,
  data() {
    return {}
  },
  created() {},
  methods: {
    remove(id){
      eventBus.emit('removeEmail', id );
    }

  },
  computed: {
    isRead() {
      if (!this.email.isRead) return { read: [this.email.to, this.email.subject] }
    },
    isReadBgc() {
      if (!this.email.isRead) return { bgc: [this.email.to, this.email.subject] }
    },
    Sender() {
      return this.email.to.substring(0, [this.email.to.indexOf('@')])
    },
    emailTxt() {
      if (this.email.body.length > 80) return this.email.body.substring(0, 50) + '...'
      else return this.email.body
    },
    // date() {
    //     var t = this.email.sentAt 
    //     return t.toDateString()
    // },
  }
}

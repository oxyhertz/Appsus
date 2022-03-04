import { eventBus } from '../../../services/eventBus-service.js'
import { emailService } from '../services/email-service.js'

export default {
  props: ['noteEmail'],
  template: `
     <section>
         <div class="email-compose" :class="isOpen">
             <div class="compose-header">
                  <div>New Massage</div>
                  <div @click="isModalOpen=false">x</div>
              </div>
                 <form >
                    <div class="compose-inputs"> 
                     To<input type="email" placeholder="example@gmail.com" v-model="email.to" required>
                   </div>            
                   <div class="compose-inputs"> 
                     Subject<input type="text"  v-model="email.subject">
                   </div>            
                   <div> 
                   <textarea rows="10" cols="40"  v-model="email.body"></textarea>
                   </div>     
                   <input type="submit" @click="sendEmail(email)">
                </form>      
             </div> 
    </section>
      `,
  data() {
    return {
      isModalOpen: false,
      email: {
        subject: '',
        body: '',
        isRead: true,
        sentAt: Date.now(),
        to: '',
        isSent: true,
        isStarred: false,
        isDeleted: false,
      },
    }
  },
  created() {
    this.unsubscribe = eventBus.on('compose', this.openModal)
    if (this.noteEmail.subject) this.openNoteEmail()
  },
  methods: {
    openNoteEmail() {
      this.isModalOpen = true
      this.email.subject = this.noteEmail.subject
      this.email.body = this.noteEmail.body
    },
    sendEmail(email) {
      emailService.save(email).then((res) => {
        this.isModalOpen = false
        this.$emit('updateEmails')
      })
    },

    openModal() {
      this.isModalOpen = true
    },
  },
  computed: {
    isOpen() {
      if (this.isModalOpen) return 'open'
    },
  },
}

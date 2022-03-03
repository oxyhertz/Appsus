import { eventBus } from '../../../services/eventBus-service.js'
import { emailService } from '../services/email-service.js'

export default {
  template: `
          <section>
              <div class="email-compose" :class="isOpen">
                  <div class="compose-header">
                      <div>New Massage</div>
                       <div @click="isModalOpen=false">x</div>
                  </div>
                  <form >
                  <div> 
                        To<input type="email" placeholder="example@gmail.com" v-model="email.to" required>
                  </div>            
                  <div> 
                        Subject<input type="text"  v-model="email.subjuct">
                  </div>            
                  <div> 
                  <textarea v-model="" rows="10" cols="40"  v-model="email.body"></textarea>
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
        sentAt: Date.now() ,
        to: '',
        isSent: true,
        isStarred: false,
        isDeleted: false,
      }
    }
  },
  created() {
    this.unsubscribe = eventBus.on('compose', this.openModal)
  },
  methods: {
      sendEmail(email){
        emailService.save(email)
        .then(this.isModalOpen = false)
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

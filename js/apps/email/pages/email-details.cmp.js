import { emailService } from '../services/email-service.js'
// import { eventBus } from '../services/eventBus-service.js'
// import longText from '../cmps/long-text.cmp.js'

export default {
  props: ['email'],
  template: `
        <section  class="email-details">
            <div class="email-details-container">
              <p class="email-subject"> {{email.subject}} </p>
              <p class="contact-details"> <span class="email-sender">{{sender}}</span>  <span class="email-address"><{{email.to}}></span></p>
              <p class="email-txt"> {{email.body}} </p>
            </div>
         <button @click="this.$emit('showList')">Return </button>
         <!-- <router-link to="/email">Return</router-link>  -->
       </section>
    `,
  components: {
    // longText,
  },
  data() {
    return {
      // email: null,
    }
  },
  created() {
    console.log('this.email', this.email)
    // this.getEmail()
  },
  methods: {
    // getEmail() {
    //   const id = this.$route.params.emailId
    //   emailService.get(id).then((email) => (this.email = email))
    // },
  },
    computed: {
      emailId() {
        return this.$route.params.emailId
      },
        sender(){
         return this.email.to.substring(0,[this.email.to.indexOf('@')])
        }
    },

    // watch: {
    //   emailId: {
    //     handler() {
    //       this.getEmail()
    //     },
    //     immediate: true,
    //   },
    // },
  
}

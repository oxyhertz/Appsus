import { emailService } from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'

export default {
  template: `
              <section>
                  All emails:
              <email-list :emails="emails" />
              </section>
          
          `,
  components: {
    emailService,
    emailList,
  },
  data() {
    return {
      emails: emailService.query(),
    //   filterBy: null,
    //   selectedEmail: null,
    }
  },
}

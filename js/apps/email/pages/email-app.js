import { emailService } from '../services/email-service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailDetails from '../pages/email-details.cmp.js'
import folderList from '../cmps/folder-list.cmp.js'

export default {
  template: `
              <section class="email-app">
                  <folder-list />
                  <email-details   :email="selectedEmail" />
                  <email-list :emails="emailsToShow"  @close="emailShow = null" />
              </section>
          
          `,
  components: {
    emailService,
    emailList,
    emailDetails,
    folderList,
  },
  data() {
    return {
      emailId: null,
      emails: null,
      selectedEmail: null,
      filterBy: null,
      show: true,
    }
  },
  created() {
    this.getEmails()
  },
  methods: {
    getId(id) {
        this.emailId = id
    },
    emailShow(email) {
      this.selectedEmail = email
    },
    getEmails() {
      emailService.query().then((emails) => (this.emails = emails))
    },
    removeBook(id) {
      emailService
        .remove(id)
        .then(() => {
          const idx = this.emails.findIndex((email) => email.id === id)
          this.emails.splice(idx, 1)
          // eventBus.emit('show-msg', { txt: 'Deleted succesfully', type: 'success' });
        })
        .catch((err) => {
          console.error(err)
          // eventBus.emit('show-msg', { txt: 'Error - please try again later', type: 'error' });
        })
    },
    selectEmail(email) {
      this.selectedEmail = email
    },
    setFilter(filterBy) {
      this.filterBy = filterBy
    },
  },
  computed: {

    emailsToShow() {
      if (!this.filterBy) return this.emails
      if (this.filterBy.subject) {
        const regex = new RegExp(this.filterBy.subject, 'i')
        return this.emails.filter((email) => regex.test(email.subject))
      }
    },
  },
}

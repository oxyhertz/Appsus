import { emailService } from '../services/email-service.js'
import { eventBus } from '../../../services/eventBus-service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailDetails from '../pages/email-details.cmp.js'
import folderList from '../cmps/folder-list.cmp.js'
import emailCompose from '../cmps/email-compose.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'

export default {
  template: `
              <section >
                  <email-filter @filter="setFilter" @updateEmails="getEmails"/>
                  <div class="email-app">
                  <folder-list class="folder-list-main" :count="unReadEmailsCount" @filtered="setFilter"/>
                  <email-details :email="selectedEmail" />
                  <email-list :emails="emailsToShow"  @close="emailShow = null" @save="saveEmail" />
                  </div>
                  <email-compose/>
              </section>
          
          `,
  components: {
    emailService,
    emailList,
    emailDetails,
    folderList,
    emailCompose,
    emailFilter,
  },
  data() {
    return {
      emailId: null,
      emails: null,
      selectedEmail: null,
      filterBy: null,
      show: true,
      unReadEmailsCount: 0,
    }
  },
  created() {
    this.unsubscribe = eventBus.on('removeEmail', this.removeEmail)
    this.unsubscribe = eventBus.on('starEmail', this.starEmail)
    this.getEmails()
  },
  methods: {
    starEmail(id) {
      const currEmail = this.getEmailById(id)
      currEmail.isStarred = !currEmail.isStarred
      return emailService.save(currEmail).then((this.emails = [...this.emails]))
    },
    getEmailById(id) {
      return this.emails.find((email) => email.id === id)
    },
    emailShow(email) {
      this.selectedEmail = email
    },
    getEmails() {
      emailService.query().then((emails) => {
        this.emails = emails
        this.unReadCount()
      })
    },
    removeEmail(id) {
      const currEmail = this.getEmailById(id)
      if (!currEmail.isDeleted) {
        currEmail.isDeleted = true
        return emailService
          .save(currEmail)
          .then((this.emails = [...this.emails]))
      }
      emailService
        .remove(id)
        .then(() => {
          const idx = this.emails.findIndex((email) => email.id === id)
          this.emails.splice(idx, 1)
          //   this.emails = [...this.emails]
          // eventBus.emit('show-msg', { txt: 'Deleted succesfully', type: 'success' });
        })
        .catch((err) => {
          console.error(err)
          // eventBus.emit('show-msg', { txt: 'Error - please try again later', type: 'error' });
        })
    },
    saveEmail(email) {
      emailService.save(email).then((email) => {
        this.getEmails()
        //   this.emails = [...this.emails]
      })
    },
    selectEmail(email) {
      this.selectedEmail = email
    },
    setFilter(filterBy) {
      this.filterBy = filterBy
    },
    unReadCount() {
      this.unReadEmailsCount = 0
      this.emails.forEach((email) => {
        if (!email.isRead && !email.isDeleted) this.unReadEmailsCount++
      })
    },
  },
  computed: {
    emailsToShow() {
      if (
        !this.filterBy ||
        this.filterBy === 'all' ||
        this.filterBy.isRead === 'All' 
      ) {  return this.emails.filter((email) => !email.isSent && !email.isDeleted)
      }
      if (this.filterBy === 'isSent') {
        return this.emails.filter((email) => email.isSent && !email.isDeleted)
      }
      if (this.filterBy === 'isStarred') {
        return this.emails.filter(
          (email) => email.isStarred && !email.isDeleted
        )
      }
      if (this.filterBy === 'isDeleted') {
        return this.emails.filter((email) => email.isDeleted)
      }

      if (this.filterBy.isRead === 'Unread' || this.filterBy.isRead === 'unread') {
                    return this.emails.filter(
            (email) => !email.isRead && !email.isDeleted && !email.isSent
                    )}
      if (this.filterBy.isRead === 'Read' || this.filterBy.isRead === 'read') {
        return this.emails.filter(
          (email) => email.isRead && !email.isDeleted && !email.isSent
        )
      }
      if (this.filterBy.ABC) {
        return this.emails.sort(
          (email) => !email.isRead && !email.isDeleted && !email.isSent
        )
      }
      if (this.filterBy.subject) {
        const regex = new RegExp(this.filterBy.subject, 'i')
        return this.emails.filter((email) => regex.test(email.subject))
      }
      if (!this.filterBy.subject && !this.filterBy.isRead ){  
        return this.emails.filter((email) => !email.isSent && !email.isDeleted)
        }
    },
  },
  watch: {
    emails: {
      handler() {
        // this.unReadCount()
      },
      immediate: true,
    },
  },
}

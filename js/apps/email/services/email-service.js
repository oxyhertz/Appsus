import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/async-storage-service.js'


const EMAILS_KEY = 'emailsDB';
_createEmails();

export const emailService = {
    query,
    remove,
    save,
    get,
};

function query() {
    return storageService.query(EMAILS_KEY)
}

function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId)
}

function get(emailId) {
    return storageService.get(EMAILS_KEY, emailId)
  }

function save(email) {
  if (email.id) return storageService.put(EMAILS_KEY, email)
   return storageService.post(EMAILS_KEY, email)
}

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY);
    if (!emails || !emails.length) {
        emails=[
            {
                id: utilService.makeId(),
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes  love to catch up sometimeslove to catch up sometimeslove to catch up sometimeslove to catch up sometimesvlove to catch up sometimeslove to catch up sometimeslove to catch up sometimeslove to catch up sometimesvvlove to catch up sometimeslove to catch up sometimeslove to catch up sometimesvlove to catch up sometimeslove to catch up sometimes',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Dima@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Replay ASAP',
                body: 'Dear User, please confirm your payment method...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'AppSus@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Sprint 3 review',
                body: 'Your project looks just fenomenal! nothing to add...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Amir-Coding-Academy@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Dima@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Replay ASAP',
                body: 'Dear User, please confirm your payment method...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'AppSus@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Sprint 3 review',
                body: 'Your project looks just fenomenal! nothing to add...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Amir-Coding-Academy@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Dima@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Replay ASAP',
                body: 'Dear User, please confirm your payment method...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'AppSus@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Sprint 3 review',
                body: 'Your project looks just fenomenal! nothing to add...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Amir-Coding-Academy@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Dima@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Replay ASAP',
                body: 'Dear User, please confirm your payment method...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'AppSus@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Sprint 3 review',
                body: 'Your project looks just fenomenal! nothing to add...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Amir-Coding-Academy@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Dima@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Replay ASAP',
                body: 'Dear User, please confirm your payment method...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'AppSus@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Sprint 3 review',
                body: 'Your project looks just fenomenal! nothing to add...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Amir-Coding-Academy@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Dima@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Replay ASAP',
                body: 'Dear User, please confirm your payment method...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'AppSus@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Sprint 3 review',
                body: 'Your project looks just fenomenal! nothing to add...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Amir-Coding-Academy@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Dima@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Replay ASAP',
                body: 'Dear User, please confirm your payment method...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'AppSus@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Sprint 3 review',
                body: 'Your project looks just fenomenal! nothing to add...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Amir-Coding-Academy@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Dima@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Replay ASAP',
                body: 'Dear User, please confirm your payment method...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'AppSus@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Sprint 3 review',
                body: 'Your project looks just fenomenal! nothing to add...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Amir-Coding-Academy@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Dima@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Replay ASAP',
                body: 'Dear User, please confirm your payment method...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'AppSus@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Sprint 3 review',
                body: 'Your project looks just fenomenal! nothing to add...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Amir-Coding-Academy@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Dima@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Replay ASAP',
                body: 'Dear User, please confirm your payment method...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'AppSus@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Sprint 3 review',
                body: 'Your project looks just fenomenal! nothing to add...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Amir-Coding-Academy@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Dima@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Replay ASAP',
                body: 'Dear User, please confirm your payment method...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'AppSus@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Sprint 3 review',
                body: 'Your project looks just fenomenal! nothing to add...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Amir-Coding-Academy@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Dima@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Replay ASAP',
                body: 'Dear User, please confirm your payment method...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'AppSus@codo.com'
                },
            {
                id: utilService.makeId(),
                subject: 'Sprint 3 review',
                body: 'Your project looks just fenomenal! nothing to add...',
                isRead: false,
                sentAt :  Date.now() + utilService.getRandomInt(1, 100),
                to: 'Amir-Coding-Academy@codo.com'
                },

                
        ]
        utilService.saveToStorage(EMAILS_KEY, emails);
    }
    return emails;
}
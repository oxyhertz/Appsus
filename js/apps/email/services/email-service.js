import { utilService } from '../../../services/util-service.js'


const EMAILS_KEY = 'emailsDB';
_createEmails();

export const emailService = {
    query,
    remove,
    save,
};

function query() {
    return utilService.loadFromStorage(EMAILS_KEY);
}

function remove(emailId) {
    const emails = query();
    const idx = emails.findIndex(email => email.id === emailId);
    emails.splice(idx, 1);
    utilService.saveToStorage(EMAILS_KEY, emails);
}

function save(email) {
    email.id = utilService.makeId();
    const emails = query();
    emails.push(email);
    utilService.saveToStorage(EMAILS_KEY, emails);
    return email;
}

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY);
    if (!emails || !emails.length) {
        emails=[
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

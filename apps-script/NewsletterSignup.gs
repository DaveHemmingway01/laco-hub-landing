const SPREADSHEET_ID = '1EJL2CFFKcR5KfXs4b9cQnZaimbOK5t0HpNLKNLObw5U';
const NEWSLETTER_SHEET = 'Subscribers';
const AVAILABILITY_RECIPIENT = 'lacobusinesshub@gmail.com';

function doPost(e) {
  const fields = e && e.parameter ? e.parameter : {};
  if (fields.formType === 'availability') {
    return submitAvailabilityRequest(fields);
  }

  const email = String(fields.email || '').trim().toLowerCase();
  const consent = fields.consent === 'yes';

  if (fields.website || !consent || !isValidEmail(email)) {
    return response({ ok: false });
  }

  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(NEWSLETTER_SHEET);
  if (!sheet) {
    throw new Error('Subscribers sheet not found.');
  }

  if (!hasEmail(sheet, email)) {
    sheet.appendRow([
      new Date(),
      email,
      'Yes',
      fields.source || 'Laco Hub website',
      fields.language || 'en',
      'Subscribed'
    ]);
  }

  return response({ ok: true });
}

function submitAvailabilityRequest(fields) {
  const name = String(fields.name || '').trim();
  const email = String(fields.email || '').trim().toLowerCase();
  const space = String(fields.space || '').trim();
  const message = String(fields.message || '').trim();
  const language = String(fields.language || 'en').trim();

  if (fields.website || !name || !message || !isValidEmail(email)) {
    return response({ ok: false });
  }

  const body = [
    'New availability request from the Laco Hub website',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Space type: ${space || 'Not specified'}`,
    `Language: ${language}`,
    '',
    'What they need:',
    message
  ].join('\n');

  MailApp.sendEmail({
    to: AVAILABILITY_RECIPIENT,
    replyTo: email,
    subject: `Laco Hub availability request: ${name}`,
    body
  });

  return response({ ok: true });
}

function doGet() {
  return response({ ok: true });
}

function authorizeMail() {
  return MailApp.getRemainingDailyQuota();
}

function hasEmail(sheet, email) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return false;

  const emails = sheet.getRange(2, 2, lastRow - 1, 1).getDisplayValues().flat();
  return emails.some((value) => value.trim().toLowerCase() === email);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function response(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

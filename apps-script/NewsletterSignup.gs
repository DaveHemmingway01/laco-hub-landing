const NEWSLETTER_SHEET = 'Subscribers';

function doPost(e) {
  const fields = e && e.parameter ? e.parameter : {};
  const email = String(fields.email || '').trim().toLowerCase();
  const consent = fields.consent === 'yes';

  if (fields.website || !consent || !isValidEmail(email)) {
    return response({ ok: false });
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(NEWSLETTER_SHEET);
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

function doGet() {
  return response({ ok: true });
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

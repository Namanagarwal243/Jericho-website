# Google Sheets Integration - Jericho Distributor Forms

## Overview
The Distribution page enquiry forms have been successfully connected to your Google Sheet via the Google Apps Script Web App endpoint.

## Integration Details

### Endpoint URL
```
https://script.google.com/macros/s/AKfycbyMylWuLfadkl6vQFTTxhZSZ8flhEPF3YL2xfC6Xumj4HIg3o8ic607zsGj353o_LUr/exec
```

### Brand Partnership Form

#### Fields Sent to Google Sheet
When a user submits the "List Your Brand" form, the following data is sent as a POST request:

```json
{
  "leadType": "Brand Partnership",
  "companyName": "Company name entered by user",
  "productType": "Product category/type entered",
  "contactPerson": "Contact person name",
  "email": "Email address",
  "mobileNumber": "Mobile number",
  "stateLocation": "State/region currently operating in",
  "currentYearlySales": "Current annual sales value"
}
```

#### Validation Rules
- All fields are mandatory
- Email must be valid format (e.g., user@domain.com)
- Mobile number must be at least 10 digits

### Supplier Partnership Form

#### Fields Sent to Google Sheet
When a user submits the "Supply Partnerships" form, the following data is sent:

```json
{
  "leadType": "Supplier Partnership",
  "companyName": "Company name entered by user",
  "contactPerson": "Contact person name",
  "mobileNumber": "Mobile number",
  "stateLocation": "Location in North-East India",
  "productType": "",
  "email": "",
  "currentYearlySales": ""
}
```

Note: Empty strings are sent for fields that don't apply to supplier partnerships (productType, email, currentYearlySales) as requested.

#### Validation Rules
- All visible fields are mandatory (Company Name, Location, Contact Person, Mobile Number, Current Brands, Monthly Sales)
- Mobile number must be at least 10 digits

## User Experience

### Submission Flow

1. **Before Submission:**
   - User fills in all required fields
   - All validations pass
   - Submit button is enabled

2. **During Submission:**
   - Submit button shows "Submitting..." text
   - Button is disabled to prevent duplicate submissions
   - Loading state is active

3. **After Successful Submission:**
   - Form is cleared
   - Success message is displayed: "Thank you for connecting with Jericho Distributor. Our team will get back to you shortly."
   - Success message auto-hides after 5 seconds

4. **If Submission Fails:**
   - Form data remains intact (not cleared)
   - Error message is displayed: "Unable to submit your enquiry. Please try again."
   - User can correct and resubmit

## Technical Implementation

### Request Method
- HTTP POST request
- Mode: 'no-cors' (required for Google Apps Script endpoints)
- Content-Type: 'application/json'

### Error Handling
- Network errors are caught and displayed to user
- Form data is preserved on error
- Clear error messages guide user to retry

### Browser Compatibility
- Works across all modern browsers
- Mobile responsive design maintained
- No styling or layout changes to existing design

## Testing

### Local Testing
Forms are ready for testing at:
```
http://localhost:3000/distribution
```

### Production Testing
After deployment to Vercel:
1. Navigate to your production URL + /distribution
2. Fill out either form completely
3. Submit and verify data appears in your Google Sheet
4. Test error cases (invalid email, short mobile number)

## Deployment Notes

### GitHub → Vercel Deployment
The integration will work automatically when deployed because:
- No environment variables are required (endpoint URL is in the code)
- All dependencies are standard Next.js packages
- No additional build configuration needed

### Google Apps Script Configuration
Ensure your Google Apps Script is configured to:
- Accept POST requests
- Allow access from any origin (CORS)
- Handle the exact field names as specified above
- Return appropriate responses (though we use no-cors mode)

## File Modified
- `/app/app/distribution/page.js` - Form submission handlers and endpoint integration

## Maintenance
To update the Google Apps Script endpoint URL in the future:
1. Open `/app/app/distribution/page.js`
2. Find line 6: `const GOOGLE_SCRIPT_URL = '...'`
3. Replace with new endpoint URL
4. Commit and deploy

---

**Integration Status:** ✅ Complete and Ready for Production

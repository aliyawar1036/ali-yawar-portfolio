# Security Specification (`security_spec.md`)

## 1. Data Invariants

1. **Default Deny Catch-All**: Every path not explicitly matched is denied by `match /{document=**} { allow read, write: if false; }`.
2. **Verified Authentication Requirement**: Every read and write operation requires `request.auth != null` and `request.auth.token.email_verified == true`.
3. **Path Variable Hardening (`isValidId`)**: All document IDs (`{inquiryId}`, `{adminUid}`) on single-document operations (`get`, `create`, `update`, `delete`) must satisfy `id is string && id.size() <= 128 && id.matches('^[a-zA-Z0-9_\\-]+$')`.
4. **Strict Blueprint Key Validation (`hasAll` & `hasOnly`)**:
   - On `create` in `/inquiries/{inquiryId}`, incoming payloads must contain all and only: `['authorUid', 'name', 'email', 'company', 'projectType', 'message', 'status', 'createdAt', 'updatedAt']`.
   - No shadow or undocumented fields are permitted.
5. **Identity Integrity**:
   - On `create`, `incoming().authorUid == request.auth.uid`.
   - Initial `status` on creation must be `'new'`.
6. **Temporal Integrity**:
   - On `create`, `incoming().createdAt == request.time && incoming().updatedAt == request.time`.
   - On `update`, `incoming().createdAt == existing().createdAt && incoming().updatedAt == request.time`.
7. **PII Isolation & Query Enforcer**:
   - `LeadInquiry` contains PII (`email`, `name`, `company`, `message`).
   - `get` and `list` on `/inquiries/{inquiryId}` are strictly restricted to the document owner (`resource.data.authorUid == request.auth.uid`) or a verified administrator (`isAdmin()`).
   - No blanket `isSignedIn()` reads or client-delegated filtering are allowed.
8. **Terminal State & Action-Based Update Locking**:
   - Only `isAdmin()` may update an inquiry status (`affectedKeys().hasOnly(['status', 'updatedAt'])`), and once `existing().status == 'closed'`, non-admins are permanently locked out while `isAdmin()` retains an explicit override.
9. **Admin Collection Lockdown**:
   - `/admins/{adminUid}` is read-only for the matching user or admin and strictly `allow write: if false;` from clients to prevent privilege escalation.

---

## 2. The "Dirty Dozen" Payloads

1. **Payload 01 — Unauthenticated Create**: Attempting to create an inquiry with `request.auth == null`.
2. **Payload 02 — Unverified Email Spoof**: Authenticated user with `email: 'ay9642356@gmail.com'` but `email_verified: false`.
3. **Payload 03 — Identity Spoofing (`authorUid` mismatch)**: Authenticated as `user_A`, setting `authorUid: 'user_B'`.
4. **Payload 04 — Shadow Field Injection**: Adding `isAdmin: true` or `verified: true` alongside required inquiry fields.
5. **Payload 05 — Resource Exhaustion / Value Poisoning**: Sending a `message` string of 10,000 characters (`> 2000` max) or `name` of 500 characters (`> 100` max).
6. **Payload 06 — Invalid Enum Poisoning**: Setting `projectType: 'HackedCategory'` or `status: 'approved'` on creation.
7. **Payload 07 — Timestamp Forgery**: Providing a past or future client timestamp where `createdAt != request.time`.
8. **Payload 08 — ID Poisoning**: Creating a document with malicious ID `bad/id$!@#` or >128 characters.
9. **Payload 09 — Cross-Tenant PII Read (`get`)**: Authenticated `user_B` attempting `get` on `user_A`'s inquiry document.
10. **Payload 10 — Unfiltered List Scraping (`list`)**: Authenticated non-admin user executing an unconstrained `list` query across `/inquiries` without `where('authorUid', '==', uid)`.
11. **Payload 11 — Unauthorized Status Mutation**: Regular user attempting to update `status` from `'new'` to `'contacted'`.
12. **Payload 12 — Self-Assigned Admin Escalation**: Authenticated user attempting `setDoc` on `/admins/{uid}` to grant themselves admin privileges.

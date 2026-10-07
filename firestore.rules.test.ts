/**
 * Firestore Security Rules Test Specification (Dirty Dozen Verification)
 * Verifies that all 12 adversarial payloads in security_spec.md return PERMISSION_DENIED.
 */

export interface SecurityTestCase {
  id: string;
  name: string;
  operation: 'get' | 'list' | 'create' | 'update' | 'delete';
  path: string;
  auth: {
    uid: string;
    email: string;
    email_verified: boolean;
  } | null;
  payload?: Record<string, unknown>;
  expectedResult: 'PERMISSION_DENIED' | 'ALLOWED';
}

export const DIRTY_DOZEN_TESTS: SecurityTestCase[] = [
  {
    id: 'DD-01',
    name: 'Unauthenticated Create',
    operation: 'create',
    path: '/inquiries/inq_001',
    auth: null,
    payload: {
      authorUid: 'anon',
      name: 'Visitor',
      email: 'visitor@example.com',
      company: 'Acme',
      projectType: 'AI Automation',
      message: 'Automate our lead workflow please.',
      status: 'new',
    },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'DD-02',
    name: 'Unverified Email Admin Spoof',
    operation: 'list',
    path: '/inquiries',
    auth: {
      uid: 'spoof_uid',
      email: 'ay9642356@gmail.com',
      email_verified: false,
    },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'DD-03',
    name: 'Identity Spoofing (authorUid mismatch)',
    operation: 'create',
    path: '/inquiries/inq_002',
    auth: {
      uid: 'user_A',
      email: 'usera@example.com',
      email_verified: true,
    },
    payload: {
      authorUid: 'user_B',
      name: 'User A',
      email: 'usera@example.com',
      company: 'Acme',
      projectType: 'AI Agent',
      message: 'Valid length message for testing.',
      status: 'new',
    },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'DD-04',
    name: 'Shadow Field Injection',
    operation: 'create',
    path: '/inquiries/inq_003',
    auth: {
      uid: 'user_A',
      email: 'usera@example.com',
      email_verified: true,
    },
    payload: {
      authorUid: 'user_A',
      name: 'User A',
      email: 'usera@example.com',
      company: 'Acme',
      projectType: 'AI Agent',
      message: 'Valid length message for testing.',
      status: 'new',
      isAdmin: true,
    },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'DD-05',
    name: 'Resource Exhaustion Oversized String',
    operation: 'create',
    path: '/inquiries/inq_004',
    auth: {
      uid: 'user_A',
      email: 'usera@example.com',
      email_verified: true,
    },
    payload: {
      authorUid: 'user_A',
      name: 'A'.repeat(300),
      email: 'usera@example.com',
      company: 'Acme',
      projectType: 'AI Agent',
      message: 'Valid length message for testing.',
      status: 'new',
    },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'DD-06',
    name: 'Invalid Enum Poisoning',
    operation: 'create',
    path: '/inquiries/inq_005',
    auth: {
      uid: 'user_A',
      email: 'usera@example.com',
      email_verified: true,
    },
    payload: {
      authorUid: 'user_A',
      name: 'User A',
      email: 'usera@example.com',
      company: 'Acme',
      projectType: 'Invalid_Category_999',
      message: 'Valid length message for testing.',
      status: 'new',
    },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'DD-07',
    name: 'Forged Client Timestamp',
    operation: 'create',
    path: '/inquiries/inq_006',
    auth: {
      uid: 'user_A',
      email: 'usera@example.com',
      email_verified: true,
    },
    payload: {
      authorUid: 'user_A',
      name: 'User A',
      email: 'usera@example.com',
      company: 'Acme',
      projectType: 'AI Agent',
      message: 'Valid length message for testing.',
      status: 'new',
      createdAt: '1999-01-01T00:00:00Z',
    },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'DD-08',
    name: 'ID Poisoning Attack',
    operation: 'create',
    path: '/inquiries/invalid$id!@#',
    auth: {
      uid: 'user_A',
      email: 'usera@example.com',
      email_verified: true,
    },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'DD-09',
    name: 'Cross-Tenant PII Get',
    operation: 'get',
    path: '/inquiries/inq_owned_by_user_A',
    auth: {
      uid: 'user_B',
      email: 'userb@example.com',
      email_verified: true,
    },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'DD-10',
    name: 'Unfiltered List Query by Non-Owner',
    operation: 'list',
    path: '/inquiries',
    auth: {
      uid: 'user_B',
      email: 'userb@example.com',
      email_verified: true,
    },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'DD-11',
    name: 'Unauthorized Status Update by Non-Admin',
    operation: 'update',
    path: '/inquiries/inq_001',
    auth: {
      uid: 'user_A',
      email: 'usera@example.com',
      email_verified: true,
    },
    payload: {
      status: 'contacted',
    },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 'DD-12',
    name: 'Self-Assigned Admin Privilege Escalation',
    operation: 'create',
    path: '/admins/user_A',
    auth: {
      uid: 'user_A',
      email: 'usera@example.com',
      email_verified: true,
    },
    payload: {
      email: 'usera@example.com',
    },
    expectedResult: 'PERMISSION_DENIED',
  },
];

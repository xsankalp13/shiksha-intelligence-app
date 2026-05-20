# UIS Module API Reference
Contains **50 mapped operational endpoints**.

---

### ALL /api/v1/auth/admin/users/api/v1/auth/admin/users
**Method:** ALL
**Endpoint:** /api/v1/auth/admin/users/api/v1/auth/admin/users
**Description:** REST Controller for admin-level user listing (Students & Staff). <p> All endpoints are restricted to SCHOOL_ADMIN and SUPER_ADMIN roles. Supports pagination, sorting, search, and (for staff) filtering by StaffType. </p> <pre> Base URL: /api/v1/auth/admin/users GET /students → List all students (paginated + searchable) GET /staff → List all staff (paginated + searchable + filterable by type) </pre>

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdminUserQueryController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/admin/users/staff
**Method:** GET
**Endpoint:** /api/v1/auth/admin/users/staff
**Description:** ========================================================================= GET ALL STAFF ========================================================================= Retrieves a paginated list of all staff members in the system. <p><b>Access:</b> SCHOOL_ADMIN, SUPER_ADMIN</p> <p><b>Query Params:</b></p> <ul> <li>{@code search} – optional keyword to filter by name, email, employeeId, or jobTitle</li> <li>{@code staffType} – optional filter: TEACHER | PRINCIPAL | LIBRARIAN | etc.</li> <li>{@code active} – optional filter by linked user status (true = active, false = inactive)</li> <li>{@code page} – zero-based page index (default: 0)</li> <li>{@code size} – number of records per page (default: 20, max: 100)</li> <li>{@code sortBy} – field to sort by (default: "employeeId")</li> <li>{@code sortDir} – "asc" or "desc" (default: "asc")</li> </ul>

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdminUserQueryController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/admin/users/students
**Method:** GET
**Endpoint:** /api/v1/auth/admin/users/students
**Description:** ========================================================================= GET ALL STUDENTS ========================================================================= Retrieves a paginated list of all students in the system. <p><b>Access:</b> SCHOOL_ADMIN, SUPER_ADMIN</p> <p><b>Query Params:</b></p> <ul> <li>{@code search} – optional keyword to filter by name, email, or enrollment number</li> <li>{@code active} – optional filter by linked user status (true = active, false = inactive)</li> <li>{@code page} – zero-based page index (default: 0)</li> <li>{@code size} – number of records per page (default: 20, max: 100)</li> <li>{@code sortBy} – field to sort by (default: "enrollmentNumber")</li> <li>{@code sortDir} – "asc" or "desc" (default: "asc")</li> </ul>

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdminUserQueryController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/admin/bulk-upload/api/v1/auth/admin/bulk-upload
**Method:** ALL
**Endpoint:** /api/v1/auth/admin/bulk-upload/api/v1/auth/admin/bulk-upload
**Description:** REST endpoint to support UIS workflow operations in BulkPhotoUploadController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: BulkPhotoUploadController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/admin/bulk-upload/photos/{userType}
**Method:** POST
**Endpoint:** /api/v1/auth/admin/bulk-upload/photos/{userType}
**Description:** REST endpoint to support UIS workflow operations in BulkPhotoUploadController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: BulkPhotoUploadController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `file` (Query Parameter)
- `userType` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/guardian/dashboard/api/v1/guardian/dashboard
**Method:** ALL
**Endpoint:** /api/v1/guardian/dashboard/api/v1/guardian/dashboard
**Description:** REST endpoint to support UIS workflow operations in GuardianDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GuardianDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/guardian/dashboard/attendance/leave/{childId}
**Method:** POST
**Endpoint:** /api/v1/guardian/dashboard/attendance/leave/{childId}
**Description:** REST endpoint to support UIS workflow operations in GuardianDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GuardianDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `childId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/guardian/dashboard/health/{childId}
**Method:** PUT
**Endpoint:** /api/v1/guardian/dashboard/health/{childId}
**Description:** REST endpoint to support UIS workflow operations in GuardianDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GuardianDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `childId` (Path Variable)
**body ->**
```json
{
  "bloodGroup": "string",
  "medicalRecord": {
    "id": 0,
    "physicianName": "string",
    "physicianPhone": "string",
    "insuranceProvider": "string",
    "insurancePolicyNumber": "string",
    "emergencyContactName": "string",
    "emergencyContactPhone": "string",
    "allergies": [
      {
        "id": 0,
        "allergy": "string",
        "severity": "string",
        "notes": "string"
      }
    ],
    "medications": [
      {
        "medicationName": "string",
        "dosage": "string",
        "frequency": "string"
      }
    ]
  }
}
```
**Request DTO ->** `GuardianChildHealthUpdateRequestDTO` { bloodGroup: `String`, medicalRecord: `StudentMedicalRecordDTO` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/guardian/dashboard/intelligence
**Method:** GET
**Endpoint:** /api/v1/guardian/dashboard/intelligence
**Description:** REST endpoint to support UIS workflow operations in GuardianDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GuardianDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/guardian/dashboard/notifications
**Method:** GET
**Endpoint:** /api/v1/guardian/dashboard/notifications
**Description:** REST endpoint to support UIS workflow operations in GuardianDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GuardianDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/guardian/dashboard/overview
**Method:** GET
**Endpoint:** /api/v1/guardian/dashboard/overview
**Description:** REST endpoint to support UIS workflow operations in GuardianDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GuardianDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/guardian/dashboard/profile/{childId}
**Method:** GET
**Endpoint:** /api/v1/guardian/dashboard/profile/{childId}
**Description:** REST endpoint to support UIS workflow operations in GuardianDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GuardianDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `childId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/guardian/students/api/v1/guardian/students
**Method:** ALL
**Endpoint:** /api/v1/guardian/students/api/v1/guardian/students
**Description:** REST endpoint to support UIS workflow operations in GuardianStudentController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GuardianStudentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/guardian/students/{studentUuid}
**Method:** GET
**Endpoint:** /api/v1/guardian/students/{studentUuid}
**Description:** REST endpoint to support UIS workflow operations in GuardianStudentController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GuardianStudentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/admin/id-cards/api/v1/auth/admin/id-cards
**Method:** ALL
**Endpoint:** /api/v1/auth/admin/id-cards/api/v1/auth/admin/id-cards
**Description:** REST Controller for ID card generation. <p> All endpoints are restricted to SCHOOL_ADMIN and SUPER_ADMIN roles. Supports single card download and batch generation on A4 sheets. Templates: "classic" (default), "modern", "minimal". </p>

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: IdCardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/admin/id-cards/staff/batch
**Method:** GET
**Endpoint:** /api/v1/auth/admin/id-cards/staff/batch
**Description:** REST endpoint to support UIS workflow operations in IdCardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: IdCardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/admin/id-cards/staff/{staffId}
**Method:** GET
**Endpoint:** /api/v1/auth/admin/id-cards/staff/{staffId}
**Description:** REST endpoint to support UIS workflow operations in IdCardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: IdCardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `staffId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/admin/id-cards/student/{studentId}
**Method:** GET
**Endpoint:** /api/v1/auth/admin/id-cards/student/{studentId}
**Description:** ── Single Card Endpoints ────────────────────────────────────────────

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: IdCardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `studentId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/admin/id-cards/students/batch
**Method:** GET
**Endpoint:** /api/v1/auth/admin/id-cards/students/batch
**Description:** ── Batch Endpoints ──────────────────────────────────────────────────

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: IdCardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PATCH /api/v1/auth/admin/id-cards/template
**Method:** PATCH
**Endpoint:** /api/v1/auth/admin/id-cards/template
**Description:** ── Template Config Endpoint ─────────────────────────────────────────

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SCHOOL_ADMIN', 'ROLE_SUPER_ADMIN')
- `Class Context`: IdCardController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/api/v1
**Method:** ALL
**Endpoint:** /api/v1/api/v1
**Description:** REST endpoint to support UIS workflow operations in MessagingController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: MessagingController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/messaging/student/{studentId}/conversation/{otherUserId}
**Method:** GET
**Endpoint:** /api/v1/messaging/student/{studentId}/conversation/{otherUserId}
**Description:** REST endpoint to support UIS workflow operations in MessagingController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('GUARDIAN','TEACHER')
- `Class Context`: MessagingController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `studentId` (Path Variable)
- `otherUserId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/messaging/student/{studentId}/guardians
**Method:** GET
**Endpoint:** /api/v1/messaging/student/{studentId}/guardians
**Description:** REST endpoint to support UIS workflow operations in MessagingController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: MessagingController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `studentId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/messaging/student/{studentId}/messages
**Method:** POST
**Endpoint:** /api/v1/messaging/student/{studentId}/messages
**Description:** REST endpoint to support UIS workflow operations in MessagingController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: MessagingController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `studentId` (Path Variable)
**body ->**
```json
{
  "receiverUserId": 0,
  "content": "string"
}
```
**Request DTO ->** `StudentMessageRequestDTO` { receiverUserId: `Long`, content: `String` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/messaging/student/{studentId}/read/{otherUserId}
**Method:** POST
**Endpoint:** /api/v1/messaging/student/{studentId}/read/{otherUserId}
**Description:** REST endpoint to support UIS workflow operations in MessagingController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: MessagingController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `studentId` (Path Variable)
- `otherUserId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/messaging/student/{studentId}/teachers
**Method:** GET
**Endpoint:** /api/v1/messaging/student/{studentId}/teachers
**Description:** REST endpoint to support UIS workflow operations in MessagingController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('GUARDIAN','TEACHER')
- `Class Context`: MessagingController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `studentId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/profile/api/v1/profile
**Method:** ALL
**Endpoint:** /api/v1/profile/api/v1/profile
**Description:** REST Controller for managing User Profiles. <p> This controller serves two main audiences: 1. The authenticated user managing their own profile (/me endpoints). 2. Administrators managing other users' profiles (/{userId} endpoints). </p>

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ProfileController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/profile/me
**Method:** GET
**Endpoint:** /api/v1/profile/me
**Description:** ================================================================================= SELF-SERVICE ENDPOINTS (/me) ================================================================================= Get the currently logged-in user's comprehensive profile. <p> This returns the "Full Picture" — not just the name/email, but also their specific role details (e.g., if they are a Student, it returns student details; if a Teacher, teacher details). </p> @return The full profile hierarchy for the current user.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ProfileController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/profile/me
**Method:** PUT
**Endpoint:** /api/v1/profile/me
**Description:** Update the currently logged-in user's basic profile information. <p> Allows users to update fields like Bio, Preferred Name, etc. It does NOT allow updating sensitive system fields (like Role or Staff ID). </p> @param updateDto The subset of fields the user is allowed to change. @return The updated profile state.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ProfileController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "firstName": "string",
  "lastName": "string",
  "preferredName": "string",
  "dateOfBirth": "2026-05-20",
  "contactPhone": "string",
  "bio": "string",
  "gender": "string"
}
```
**Request DTO ->** `UserProfileUpdateDTO` { firstName: `String`, lastName: `String`, preferredName: `String`, dateOfBirth: `LocalDate`, contactPhone: `String`, bio: `String`, gender: `String` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/profile/me/addresses
**Method:** POST
**Endpoint:** /api/v1/profile/me/addresses
**Description:** REST endpoint to support UIS workflow operations in ProfileController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ProfileController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "id": 0,
  "addressType": "AddressType",
  "addressLine1": "string",
  "addressLine2": "string",
  "city": "string",
  "state": "string",
  "postalCode": "string",
  "country": "string"
}
```
**Request DTO ->** `AddressDTO` { id: `Long`, addressType: `AddressType`, addressLine1: `String`, addressLine2: `String`, city: `String`, state: `String`, postalCode: `String`, country: `String` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/profile/me/addresses/{id}
**Method:** DELETE
**Endpoint:** /api/v1/profile/me/addresses/{id}
**Description:** REST endpoint to support UIS workflow operations in ProfileController.

**Security Requirement:**
- `Authority / Scope`: hasAuthority('profile:update:own')
- `Class Context`: ProfileController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/profile/me/addresses/{id}
**Method:** PUT
**Endpoint:** /api/v1/profile/me/addresses/{id}
**Description:** REST endpoint to support UIS workflow operations in ProfileController.

**Security Requirement:**
- `Authority / Scope`: hasAuthority('profile:update:own')
- `Class Context`: ProfileController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
```json
{
  "id": 0,
  "addressType": "AddressType",
  "addressLine1": "string",
  "addressLine2": "string",
  "city": "string",
  "state": "string",
  "postalCode": "string",
  "country": "string"
}
```
**Request DTO ->** `AddressDTO` { id: `Long`, addressType: `AddressType`, addressLine1: `String`, addressLine2: `String`, city: `String`, state: `String`, postalCode: `String`, country: `String` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/profile/me/guardians
**Method:** GET
**Endpoint:** /api/v1/profile/me/guardians
**Description:** REST endpoint to support UIS workflow operations in ProfileController.

**Security Requirement:**
- `Authority / Scope`: hasAuthority('profile:update:own')
- `Class Context`: ProfileController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/profile/me/id-card
**Method:** GET
**Endpoint:** /api/v1/profile/me/id-card
**Description:** REST endpoint to support UIS workflow operations in ProfileController.

**Security Requirement:**
- `Authority / Scope`: hasAuthority('profile:read:own')
- `Class Context`: ProfileController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/profile/me/id-card/preview-html
**Method:** GET
**Endpoint:** /api/v1/profile/me/id-card/preview-html
**Description:** REST endpoint to support UIS workflow operations in ProfileController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ProfileController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/profile/me/image/upload-complete
**Method:** POST
**Endpoint:** /api/v1/profile/me/image/upload-complete
**Description:** REST endpoint to support UIS workflow operations in ProfileController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ProfileController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/profile/me/image/upload-init
**Method:** POST
**Endpoint:** /api/v1/profile/me/image/upload-init
**Description:** REST endpoint to support UIS workflow operations in ProfileController.

**Security Requirement:**
- `Authority / Scope`: hasAuthority('profile:update:own')
- `Class Context`: ProfileController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/profile/me/medical
**Method:** GET
**Endpoint:** /api/v1/profile/me/medical
**Description:** REST endpoint to support UIS workflow operations in ProfileController.

**Security Requirement:**
- `Authority / Scope`: hasAuthority('profile:update:own')
- `Class Context`: ProfileController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/profile/me/medical
**Method:** POST
**Endpoint:** /api/v1/profile/me/medical
**Description:** REST endpoint to support UIS workflow operations in ProfileController.

**Security Requirement:**
- `Authority / Scope`: hasAuthority('profile:read:own')
- `Class Context`: ProfileController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "id": 0,
  "physicianName": "string",
  "physicianPhone": "string",
  "insuranceProvider": "string",
  "insurancePolicyNumber": "string",
  "emergencyContactName": "string",
  "emergencyContactPhone": "string",
  "allergies": [
    {
      "id": 0,
      "allergy": "string",
      "severity": "string",
      "notes": "string"
    }
  ],
  "medications": [
    {
      "medicationName": "string",
      "dosage": "string",
      "frequency": "string"
    }
  ]
}
```
**Request DTO ->** `StudentMedicalRecordDTO` { id: `Long`, physicianName: `String`, physicianPhone: `String`, insuranceProvider: `String`, insurancePolicyNumber: `String`, emergencyContactName: `String`, emergencyContactPhone: `String`, allergies: `List<StudentMedicalAllergyDTO>`, medications: `List<StudentMedicalMedicationDTO>` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/profile/me/medical
**Method:** PUT
**Endpoint:** /api/v1/profile/me/medical
**Description:** REST endpoint to support UIS workflow operations in ProfileController.

**Security Requirement:**
- `Authority / Scope`: hasAuthority('profile:update:own')
- `Class Context`: ProfileController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "id": 0,
  "physicianName": "string",
  "physicianPhone": "string",
  "insuranceProvider": "string",
  "insurancePolicyNumber": "string",
  "emergencyContactName": "string",
  "emergencyContactPhone": "string",
  "allergies": [
    {
      "id": 0,
      "allergy": "string",
      "severity": "string",
      "notes": "string"
    }
  ],
  "medications": [
    {
      "medicationName": "string",
      "dosage": "string",
      "frequency": "string"
    }
  ]
}
```
**Request DTO ->** `StudentMedicalRecordDTO` { id: `Long`, physicianName: `String`, physicianPhone: `String`, insuranceProvider: `String`, insurancePolicyNumber: `String`, emergencyContactName: `String`, emergencyContactPhone: `String`, allergies: `List<StudentMedicalAllergyDTO>`, medications: `List<StudentMedicalMedicationDTO>` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/profile/me/medical/allergies
**Method:** POST
**Endpoint:** /api/v1/profile/me/medical/allergies
**Description:** REST endpoint to support UIS workflow operations in ProfileController.

**Security Requirement:**
- `Authority / Scope`: hasAuthority('profile:update:own')
- `Class Context`: ProfileController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "id": 0,
  "allergy": "string",
  "severity": "string",
  "notes": "string"
}
```
**Request DTO ->** `StudentMedicalAllergyDTO` { id: `Long`, allergy: `String`, severity: `String`, notes: `String` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/profile/me/medical/allergies/{id}
**Method:** DELETE
**Endpoint:** /api/v1/profile/me/medical/allergies/{id}
**Description:** REST endpoint to support UIS workflow operations in ProfileController.

**Security Requirement:**
- `Authority / Scope`: hasAuthority('profile:update:own')
- `Class Context`: ProfileController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/profile/{userId}
**Method:** GET
**Endpoint:** /api/v1/profile/{userId}
**Description:** ADMINISTRATIVE ENDPOINTS (/{userId}) ================================================================================= Get ANY user's profile by their User ID. <p> Restricted to Admins/Staff with 'profile:read:all' permission. Used by School Admins to view details of any student, parent, or staff member. </p> @param userId The target user's ID. @return The target user's comprehensive profile.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ProfileController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `userId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/profile/{userId}
**Method:** PUT
**Endpoint:** /api/v1/profile/{userId}
**Description:** Update ANY user's profile by their User ID. <p> Restricted to Admins with 'profile:update:all' permission. Useful for fixing typos in names, updating incorrect birth dates, etc. </p> @param userId The target user's ID. @param updateDto The new data. @return The updated profile.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ProfileController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `userId` (Path Variable)
**body ->**
```json
{
  "firstName": "string",
  "lastName": "string",
  "preferredName": "string",
  "dateOfBirth": "2026-05-20",
  "contactPhone": "string",
  "bio": "string",
  "gender": "string"
}
```
**Request DTO ->** `UserProfileUpdateDTO` { firstName: `String`, lastName: `String`, preferredName: `String`, dateOfBirth: `LocalDate`, contactPhone: `String`, bio: `String`, gender: `String` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/student/dashboard/api/v1/student/dashboard
**Method:** ALL
**Endpoint:** /api/v1/student/dashboard/api/v1/student/dashboard
**Description:** REST endpoint to support UIS workflow operations in StudentDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/student/dashboard/intelligence
**Method:** GET
**Endpoint:** /api/v1/student/dashboard/intelligence
**Description:** REST endpoint to support UIS workflow operations in StudentDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/student/dashboard/overview
**Method:** GET
**Endpoint:** /api/v1/student/dashboard/overview
**Description:** REST endpoint to support UIS workflow operations in StudentDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/student/timetable/api/v1/student/timetable
**Method:** ALL
**Endpoint:** /api/v1/student/timetable/api/v1/student/timetable
**Description:** Student-accessible timetable endpoints. Resolves the student's own section from auth context and returns the published schedule plus read-only access to teacher lecture logs.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentTimetableController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/student/timetable/context
**Method:** GET
**Endpoint:** /api/v1/student/timetable/context
**Description:** Returns the full timetable context (timeslots, subjects, teachers, schedule entries) for the authenticated student's section. Reuses the same EditorContextResponseDto already consumed by the Admin TimetableReader.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentTimetableController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/student/timetable/lecture-log/{scheduleUuid}
**Method:** GET
**Endpoint:** /api/v1/student/timetable/lecture-log/{scheduleUuid}
**Description:** Returns the lecture log saved by the teacher for a given schedule entry UUID. Returns 204 No Content when the teacher has not yet logged this lecture. Students can only read — not modify — logs.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentTimetableController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `scheduleUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---
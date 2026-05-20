# IAM Module API Reference
Contains **47 mapped operational endpoints**.

---

### ALL /api/v1/auth/api/v1/auth
**Method:** ALL
**Endpoint:** /api/v1/auth/api/v1/auth
**Description:** REST endpoint to support IAM workflow operations in AuthController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AuthController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/forgot-password
**Method:** POST
**Endpoint:** /api/v1/auth/forgot-password
**Description:** REST endpoint to support IAM workflow operations in AuthController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AuthController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "required.\"": "is"
}
```
**Request DTO ->** `ForgotPasswordRequest` { required.": `is` }
**Response DTO ->** `ResponseEntity` wrapping `MessageResponse` { message: `String` }

---

### POST /api/v1/auth/login
**Method:** POST
**Endpoint:** /api/v1/auth/login
**Description:** REST endpoint to support IAM workflow operations in AuthController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AuthController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "required.\"": "is"
}
```
**Request DTO ->** `LoginRequest` { required.": `is` }
**Response DTO ->** `ResponseEntity` wrapping `LoginResponse` { accessToken: `String`, refreshToken: `String`, userDetailsDto: `UserDetailsDto`, roles: `Set<String>`, requiresPasswordChange: `boolean` }

---

### POST /api/v1/auth/logout
**Method:** POST
**Endpoint:** /api/v1/auth/logout
**Description:** REST endpoint to support IAM workflow operations in AuthController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AuthController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "out.\"": "log"
}
```
**Request DTO ->** `LogoutRequest` { out.": `log` }
**Response DTO ->** `ResponseEntity` wrapping `MessageResponse` { message: `String` }

---

### GET /api/v1/auth/me
**Method:** GET
**Endpoint:** /api/v1/auth/me
**Description:** REST endpoint to support IAM workflow operations in AuthController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AuthController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `MeResponse` { userId: `Long`, username: `String`, email: `String`, roles: `Set<String>`, profileId: `Long`, firstName: `String`, lastName: `String`, preferredName: `String`, profileUrl: `String`, dateOfBirth: `LocalDate`, gender: `Gender`, addresses: `Set<AddressDTO>` }

---

### POST /api/v1/auth/refresh-token
**Method:** POST
**Endpoint:** /api/v1/auth/refresh-token
**Description:** REST endpoint to support IAM workflow operations in AuthController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AuthController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "required.\"": "is"
}
```
**Request DTO ->** `RefreshTokenRequest` { required.": `is` }
**Response DTO ->** `ResponseEntity` wrapping `RefreshTokenResponse` { accessToken: `String`, refreshToken: `String` }

---

### POST /api/v1/auth/reset-password
**Method:** POST
**Endpoint:** /api/v1/auth/reset-password
**Description:** REST endpoint to support IAM workflow operations in AuthController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AuthController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "required.\"": "is"
}
```
**Request DTO ->** `ResetPasswordRequest` { required.": `is` }
**Response DTO ->** `ResponseEntity` wrapping `MessageResponse` { message: `String` }

---

### ALL /api/v1/auth/iam/rbac/api/v1/auth/iam/rbac
**Method:** ALL
**Endpoint:** /api/v1/auth/iam/rbac/api/v1/auth/iam/rbac
**Description:** REST endpoint to support IAM workflow operations in RbacManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: RbacManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/iam/rbac/permissions
**Method:** GET
**Endpoint:** /api/v1/auth/iam/rbac/permissions
**Description:** REST endpoint to support IAM workflow operations in RbacManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: RbacManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/iam/rbac/permissions
**Method:** POST
**Endpoint:** /api/v1/auth/iam/rbac/permissions
**Description:** REST endpoint to support IAM workflow operations in RbacManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: RbacManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/iam/rbac/roles
**Method:** GET
**Endpoint:** /api/v1/auth/iam/rbac/roles
**Description:** REST endpoint to support IAM workflow operations in RbacManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: RbacManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/iam/rbac/roles/{roleId}/permissions
**Method:** GET
**Endpoint:** /api/v1/auth/iam/rbac/roles/{roleId}/permissions
**Description:** REST endpoint to support IAM workflow operations in RbacManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: RbacManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/iam/rbac/roles/{roleId}/permissions/{permissionId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/iam/rbac/roles/{roleId}/permissions/{permissionId}
**Description:** REST endpoint to support IAM workflow operations in RbacManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: RbacManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/iam/rbac/roles/{roleId}/permissions/{permissionId}
**Method:** POST
**Endpoint:** /api/v1/auth/iam/rbac/roles/{roleId}/permissions/{permissionId}
**Description:** REST endpoint to support IAM workflow operations in RbacManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: RbacManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/teachers/api/v1/auth/teachers
**Method:** ALL
**Endpoint:** /api/v1/auth/teachers/api/v1/auth/teachers
**Description:** REST endpoint to support IAM workflow operations in TeacherSubjectController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TeacherSubjectController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/teachers/bulk-subjects
**Method:** PUT
**Endpoint:** /api/v1/auth/teachers/bulk-subjects
**Description:** REST endpoint to support IAM workflow operations in TeacherSubjectController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TeacherSubjectController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/admin/users/api/v1/auth/admin/users
**Method:** ALL
**Endpoint:** /api/v1/auth/admin/users/api/v1/auth/admin/users
**Description:** Controller for Admin-level User Management. <p> These endpoints serve as the "Hiring" or "Enrollment" portal for the application. They allow privileged users (Super Admin, School Admin) to onboard new users into the system with all their necessary role-specific data (e.g., Medical records for Students, Certifications for Teachers). </p> * <p>Security: All endpoints are protected by Role-Based Access Control (RBAC).</p>

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/admin/users/check-username
**Method:** GET
**Endpoint:** /api/v1/auth/admin/users/check-username
**Description:** Checks if a specific username is available. Called live from the staff creation form when overriding username. @param username Requested username @return JSON: { "username": "john.doe", "available": true/false }

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `username` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/admin/users/generate-username
**Method:** GET
**Endpoint:** /api/v1/auth/admin/users/generate-username
**Description:** ================================================================================= 0. USERNAME UTILITY ================================================================================= Suggests a unique, available username derived from firstName + lastName. Called live from the staff creation form as the admin types. @param firstName Staff first name (required) @param lastName Staff last name (required) @return JSON: { "username": "john.doe", "available": true }

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `firstName` (Query Parameter)
- `lastName` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/admin/users/guardian/{guardianId}/linked-students
**Method:** GET
**Endpoint:** /api/v1/auth/admin/users/guardian/{guardianId}/linked-students
**Description:** REST endpoint to support IAM workflow operations in UserManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/admin/users/school-admin
**Method:** POST
**Endpoint:** /api/v1/auth/admin/users/school-admin
**Description:** ================================================================================= 1. SCHOOL ADMIN MANAGEMENT ================================================================================= Create a new School Admin. RESTRICTED TO: Super Admin only.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/admin/users/staff/auditor
**Method:** POST
**Endpoint:** /api/v1/auth/admin/users/staff/auditor
**Description:** Hire a new Auditor.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/admin/users/staff/finance-admin
**Method:** POST
**Endpoint:** /api/v1/auth/admin/users/staff/finance-admin
**Description:** Hire a new Finance Admin.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/admin/users/staff/librarian
**Method:** POST
**Endpoint:** /api/v1/auth/admin/users/staff/librarian
**Description:** Hire a new Librarian. ACCESSIBLE BY: Super Admin, School Admin.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/admin/users/staff/principal
**Method:** POST
**Endpoint:** /api/v1/auth/admin/users/staff/principal
**Description:** Appoint a new Principal. RESTRICTED TO: Super Admin only (typically).

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/admin/users/staff/security-guard
**Method:** POST
**Endpoint:** /api/v1/auth/admin/users/staff/security-guard
**Description:** Hire a new Security Guard. ACCESSIBLE BY: Super Admin, School Admin.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/admin/users/staff/teacher
**Method:** POST
**Endpoint:** /api/v1/auth/admin/users/staff/teacher
**Description:** ================================================================================= 3. STAFF HIRING (Role Specific) ================================================================================= Hire a new Teacher. ACCESSIBLE BY: Super Admin, School Admin.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/admin/users/staff/{staffId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/admin/users/staff/{staffId}
**Description:** REST endpoint to support IAM workflow operations in UserManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/admin/users/staff/{staffId}
**Method:** PUT
**Endpoint:** /api/v1/auth/admin/users/staff/{staffId}
**Description:** Edit an existing Staff's details. ACCESSIBLE BY: Super Admin, School Admin.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PATCH /api/v1/auth/admin/users/staff/{staffId}/activation
**Method:** PATCH
**Endpoint:** /api/v1/auth/admin/users/staff/{staffId}/activation
**Description:** REST endpoint to support IAM workflow operations in UserManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/admin/users/staff/{staffId}/demote-hr-admin
**Method:** DELETE
**Endpoint:** /api/v1/auth/admin/users/staff/{staffId}/demote-hr-admin
**Description:** REST endpoint to support IAM workflow operations in UserManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/admin/users/staff/{staffId}/details
**Method:** GET
**Endpoint:** /api/v1/auth/admin/users/staff/{staffId}/details
**Description:** REST endpoint to support IAM workflow operations in UserManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/admin/users/staff/{staffId}/kpi-metrics
**Method:** GET
**Endpoint:** /api/v1/auth/admin/users/staff/{staffId}/kpi-metrics
**Description:** REST endpoint to support IAM workflow operations in UserManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/admin/users/staff/{staffId}/promote-hr-admin
**Method:** POST
**Endpoint:** /api/v1/auth/admin/users/staff/{staffId}/promote-hr-admin
**Description:** ================================================================================= 7. HR ADMIN PROMOTION / DEMOTION =================================================================================

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/admin/users/student
**Method:** POST
**Endpoint:** /api/v1/auth/admin/users/student
**Description:** ================================================================================= 2. STUDENT ENROLLMENT ================================================================================= Enroll a new Student. ACCESSIBLE BY: Super Admin, School Admin. This creates the User, Profile, Student record, Demographics, and Medical record in one go.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/admin/users/student/{studentId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/admin/users/student/{studentId}
**Description:** ================================================================================= 5. SOFT DELETE STUDENT / STAFF =================================================================================

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/admin/users/student/{studentId}
**Method:** PUT
**Endpoint:** /api/v1/auth/admin/users/student/{studentId}
**Description:** ================================================================================= 4. EDIT STUDENT / STAFF ================================================================================= Edit an existing Student's details. ACCESSIBLE BY: Super Admin, School Admin.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PATCH /api/v1/auth/admin/users/student/{studentId}/activation
**Method:** PATCH
**Endpoint:** /api/v1/auth/admin/users/student/{studentId}/activation
**Description:** REST endpoint to support IAM workflow operations in UserManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/admin/users/student/{studentId}/details
**Method:** GET
**Endpoint:** /api/v1/auth/admin/users/student/{studentId}/details
**Description:** ================================================================================= 6. FULL DETAILS (ADMIN) =================================================================================

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/admin/users/student/{studentId}/guardian
**Method:** POST
**Endpoint:** /api/v1/auth/admin/users/student/{studentId}/guardian
**Description:** REST endpoint to support IAM workflow operations in UserManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/admin/users/student/{studentId}/guardian/link
**Method:** POST
**Endpoint:** /api/v1/auth/admin/users/student/{studentId}/guardian/link
**Description:** REST endpoint to support IAM workflow operations in UserManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/admin/users/student/{studentId}/guardian/{guardianId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/admin/users/student/{studentId}/guardian/{guardianId}
**Description:** REST endpoint to support IAM workflow operations in UserManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/admin/users/student/{studentId}/guardian/{guardianId}
**Method:** PUT
**Endpoint:** /api/v1/auth/admin/users/student/{studentId}/guardian/{guardianId}
**Description:** REST endpoint to support IAM workflow operations in UserManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PATCH /api/v1/auth/admin/users/student/{studentId}/guardian/{guardianId}/activation
**Method:** PATCH
**Endpoint:** /api/v1/auth/admin/users/student/{studentId}/guardian/{guardianId}/activation
**Description:** REST endpoint to support IAM workflow operations in UserManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/admin/users/student/{studentId}/guardian/{guardianId}/unlink
**Method:** DELETE
**Endpoint:** /api/v1/auth/admin/users/student/{studentId}/guardian/{guardianId}/unlink
**Description:** REST endpoint to support IAM workflow operations in UserManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/admin/users/student/{studentId}/guardians
**Method:** GET
**Endpoint:** /api/v1/auth/admin/users/student/{studentId}/guardians
**Description:** REST endpoint to support IAM workflow operations in UserManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/admin/users/student/{studentId}/kpi-metrics
**Method:** GET
**Endpoint:** /api/v1/auth/admin/users/student/{studentId}/kpi-metrics
**Description:** REST endpoint to support IAM workflow operations in UserManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: UserManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---
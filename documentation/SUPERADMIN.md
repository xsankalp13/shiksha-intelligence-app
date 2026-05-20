# SUPERADMIN Module API Reference
Contains **9 mapped operational endpoints**.

---

### ALL /api/v1/super/api/v1/super
**Method:** ALL
**Endpoint:** /api/v1/super/api/v1/super
**Description:** REST endpoint to support SUPERADMIN workflow operations in AuditLogController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AuditLogController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/super/audit-logs
**Method:** GET
**Endpoint:** /api/v1/super/audit-logs
**Description:** REST endpoint to support SUPERADMIN workflow operations in AuditLogController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AuditLogController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `actor` (Query Parameter)
- `action` (Query Parameter)
- `entityType` (Query Parameter)
- `page` (Query Parameter)
- `size` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/super/api/v1/super
**Method:** ALL
**Endpoint:** /api/v1/super/api/v1/super
**Description:** REST endpoint to support SUPERADMIN workflow operations in SuperAdminLogController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: SuperAdminLogController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/super/logs
**Method:** GET
**Endpoint:** /api/v1/super/logs
**Description:** REST endpoint to support SUPERADMIN workflow operations in SuperAdminLogController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: SuperAdminLogController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `lines` (Query Parameter)
- `level` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/super/api/v1/super
**Method:** ALL
**Endpoint:** /api/v1/super/api/v1/super
**Description:** REST endpoint to support SUPERADMIN workflow operations in SuperAdminUserController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: SuperAdminUserController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/super/sessions/invalidate-all
**Method:** POST
**Endpoint:** /api/v1/super/sessions/invalidate-all
**Description:** REST endpoint to support SUPERADMIN workflow operations in SuperAdminUserController.

**Security Requirement:**
- `Authority / Scope`: hasRole('SUPER_ADMIN')
- `Class Context`: SuperAdminUserController
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

### GET /api/v1/super/users/guardians
**Method:** GET
**Endpoint:** /api/v1/super/users/guardians
**Description:** REST endpoint to support SUPERADMIN workflow operations in SuperAdminUserController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: SuperAdminUserController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `search` (Query Parameter)
- `page` (Query Parameter)
- `size` (Query Parameter)
- `sortBy` (Query Parameter)
- `sortDir` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/super/users/{staffUuid}/force-logout
**Method:** POST
**Endpoint:** /api/v1/super/users/{staffUuid}/force-logout
**Description:** REST endpoint to support SUPERADMIN workflow operations in SuperAdminUserController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: SuperAdminUserController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `staffUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/super/users/{staffUuid}/reset-password
**Method:** POST
**Endpoint:** /api/v1/super/users/{staffUuid}/reset-password
**Description:** REST endpoint to support SUPERADMIN workflow operations in SuperAdminUserController.

**Security Requirement:**
- `Authority / Scope`: hasRole('SUPER_ADMIN')
- `Class Context`: SuperAdminUserController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `staffUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---
# DASHBOARD Module API Reference
Contains **5 mapped operational endpoints**.

---

### ALL /api/v1/auth/dashboard/api/v1/auth/dashboard
**Method:** ALL
**Endpoint:** /api/v1/auth/dashboard/api/v1/auth/dashboard
**Description:** REST endpoint to support DASHBOARD workflow operations in DashboardEventController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DashboardEventController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/dashboard/events
**Method:** GET
**Endpoint:** /api/v1/auth/dashboard/events
**Description:** REST endpoint to support DASHBOARD workflow operations in DashboardEventController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DashboardEventController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `page` (Query Parameter)
- `size` (Query Parameter)
- `since` (Query Parameter)
- `type` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<Page<DashboardEventDTO>>`

---

### PATCH /api/v1/auth/dashboard/events/read
**Method:** PATCH
**Endpoint:** /api/v1/auth/dashboard/events/read
**Description:** REST endpoint to support DASHBOARD workflow operations in DashboardEventController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DashboardEventController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
[
  "3fa85f64-5717-4562-b3fc-2c963f66afa6"
]
```
**Request DTO ->** `List<UUID>`
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### GET /api/v1/auth/dashboard/events/stream
**Method:** GET
**Endpoint:** /api/v1/auth/dashboard/events/stream
**Description:** REST endpoint to support DASHBOARD workflow operations in DashboardEventController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DashboardEventController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `SseEmitter`

---

### GET /api/v1/auth/dashboard/events/unread-count
**Method:** GET
**Endpoint:** /api/v1/auth/dashboard/events/unread-count
**Description:** REST endpoint to support DASHBOARD workflow operations in DashboardEventController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DashboardEventController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<Map<String, Integer>>`

---
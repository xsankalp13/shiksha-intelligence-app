# COMMON Module API Reference
Contains **3 mapped operational endpoints**.

---

### GET /api/v1/public/settings/whitelabel
**Method:** GET
**Endpoint:** /api/v1/public/settings/whitelabel
**Description:** REST endpoint to support COMMON workflow operations in AppSettingController.

**Security Requirement:**
- `Authority / Scope`: hasRole('SUPER_ADMIN')
- `Class Context`: AppSettingController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/super/settings
**Method:** GET
**Endpoint:** /api/v1/super/settings
**Description:** REST endpoint to support COMMON workflow operations in AppSettingController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AppSettingController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `group` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PATCH /api/v1/super/settings
**Method:** PATCH
**Endpoint:** /api/v1/super/settings
**Description:** REST endpoint to support COMMON workflow operations in AppSettingController.

**Security Requirement:**
- `Authority / Scope`: hasRole('SUPER_ADMIN')
- `Class Context`: AppSettingController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** `List<`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---
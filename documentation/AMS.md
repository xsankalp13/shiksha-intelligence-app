# AMS Module API Reference
Contains **40 mapped operational endpoints**.

---

### ALL ${api.url:/api/v1}/auth/ams/excuses/${api.url:/api/v1}/auth/ams/excuses
**Method:** ALL
**Endpoint:** ${api.url:/api/v1}/auth/ams/excuses/${api.url:/api/v1}/auth/ams/excuses
**Description:** Controller for Absence / Excuse workflow. Base path uses testing-friendly ${api.url:/api/v1}/auth/ams/excuses

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AbsenceDocumentationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET ${api.url:/api/v1}/auth/ams/excuses/pending
**Method:** GET
**Endpoint:** ${api.url:/api/v1}/auth/ams/excuses/pending
**Description:** List pending documentation entries (paginated). GET /auth/ams/excuses/pending

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AbsenceDocumentationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `page` (Query Parameter)
- `size` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST ${api.url:/api/v1}/auth/ams/excuses/submit
**Method:** POST
**Endpoint:** ${api.url:/api/v1}/auth/ams/excuses/submit
**Description:** Submit an excuse documentation for an attendance record. POST /auth/ams/excuses/submit

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AbsenceDocumentationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{}
```
**Request DTO ->** `SubmitExcuseRequestDTO` {  }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET ${api.url:/api/v1}/auth/ams/excuses/{docUuid}
**Method:** GET
**Endpoint:** ${api.url:/api/v1}/auth/ams/excuses/{docUuid}
**Description:** Get documentation by id. GET /auth/ams/excuses/{docUuid}

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AbsenceDocumentationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `docUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST ${api.url:/api/v1}/auth/ams/excuses/{docUuid}/approve
**Method:** POST
**Endpoint:** ${api.url:/api/v1}/auth/ams/excuses/{docUuid}/approve
**Description:** Approve a pending documentation (marks StudentDailyAttendance to Excused). POST /auth/ams/excuses/{docUuid}/approve

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AbsenceDocumentationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `docUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST ${api.url:/api/v1}/auth/ams/excuses/{docUuid}/reject
**Method:** POST
**Endpoint:** ${api.url:/api/v1}/auth/ams/excuses/{docUuid}/reject
**Description:** Reject a pending documentation with optional reason in the body. POST /auth/ams/excuses/{docUuid}/reject

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AbsenceDocumentationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `docUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/ams/types/api/v1/auth/ams/types
**Method:** ALL
**Endpoint:** /api/v1/auth/ams/types/api/v1/auth/ams/types
**Description:** REST endpoint to support AMS workflow operations in AttendanceTypeController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AttendanceTypeController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/ams/types/{typeUuid}
**Method:** DELETE
**Endpoint:** /api/v1/auth/ams/types/{typeUuid}
**Description:** DELETE /api/v1/ams/types/{typeUuid} Soft deletes (archives) an attendance type by setting isActive=false. Returns 204 No Content on successful soft deletion. Permission: ams:config:delete Note: We handle the specific exceptions in a centralized @ControllerAdvice but define the expected behavior here.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AttendanceTypeController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `typeUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/ams/types/{typeUuid}
**Method:** GET
**Endpoint:** /api/v1/auth/ams/types/{typeUuid}
**Description:** GET /api/v1/ams/types/{typeUuid} Retrieves details for a specific active attendance type. Permission: ams:config:read

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AttendanceTypeController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `typeUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/ams/types/{typeUuid}
**Method:** PUT
**Endpoint:** /api/v1/auth/ams/types/{typeUuid}
**Description:** PUT /api/v1/ams/types/{typeUuid} Updates an existing attendance type configuration. Permission: ams:config:update

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AttendanceTypeController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `typeUuid` (Path Variable)
**body ->**
```json
{}
```
**Request DTO ->** `AttendanceTypeRequestDTO` {  }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v2/ams/roster/api/v2/ams/roster
**Method:** ALL
**Endpoint:** /api/v2/ams/roster/api/v2/ams/roster
**Description:** REST endpoint to support AMS workflow operations in DailyRosterController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DailyRosterController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v2/ams/roster/{classId}
**Method:** GET
**Endpoint:** /api/v2/ams/roster/{classId}
**Description:** REST endpoint to support AMS workflow operations in DailyRosterController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DailyRosterController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `date` (Query Parameter)
- `classId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<DailyRosterResponseDTO>` { studentId: `Long`, name: `String`, hasApprovedLeave: `boolean` }

---

### ALL /${api.url:/api/v1}/auth/ams/late-clockin
**Method:** ALL
**Endpoint:** /${api.url:/api/v1}/auth/ams/late-clockin
**Description:** REST endpoint to support AMS workflow operations in LateClockInController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: LateClockInController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /pending-count
**Method:** GET
**Endpoint:** /pending-count
**Description:** REST endpoint to support AMS workflow operations in LateClockInController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ROLE_SUPER_ADMIN','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_HR_ADMIN')
- `Class Context`: LateClockInController
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

### PUT /{uuid}/review
**Method:** PUT
**Endpoint:** /{uuid}/review
**Description:** REST endpoint to support AMS workflow operations in LateClockInController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ROLE_SUPER_ADMIN','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_HR_ADMIN')
- `Class Context`: LateClockInController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
```json
{
  "action": "string",
  "remarks": "string"
}
```
**Request DTO ->** `LateClockInReviewDTO` { action: `String`, remarks: `String` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL ${api.url:/api/v1}/auth/ams/shifts/${api.url:/api/v1}/auth/ams/shifts
**Method:** ALL
**Endpoint:** ${api.url:/api/v1}/auth/ams/shifts/${api.url:/api/v1}/auth/ams/shifts
**Description:** REST endpoint to support AMS workflow operations in ShiftManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ShiftManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST ${api.url:/api/v1}/auth/ams/shifts/map
**Method:** POST
**Endpoint:** ${api.url:/api/v1}/auth/ams/shifts/map
**Description:** REST endpoint to support AMS workflow operations in ShiftManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ShiftManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "staffUuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "shiftUuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "effectiveFrom": "2026-05-20"
}
```
**Request DTO ->** `StaffShiftMapRequestDTO` { staffUuid: `UUID`, shiftUuid: `UUID`, effectiveFrom: `LocalDate` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST ${api.url:/api/v1}/auth/ams/shifts/map/bulk
**Method:** POST
**Endpoint:** ${api.url:/api/v1}/auth/ams/shifts/map/bulk
**Description:** REST endpoint to support AMS workflow operations in ShiftManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ShiftManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "staffUuids": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ],
  "shiftUuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "effectiveFrom": "2026-05-20"
}
```
**Request DTO ->** `BulkStaffShiftMapRequestDTO` { staffUuids: `List<UUID>`, shiftUuid: `UUID`, effectiveFrom: `LocalDate` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET ${api.url:/api/v1}/auth/ams/shifts/mappings
**Method:** GET
**Endpoint:** ${api.url:/api/v1}/auth/ams/shifts/mappings
**Description:** REST endpoint to support AMS workflow operations in ShiftManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ShiftManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `page` (Query Parameter)
- `size` (Query Parameter)
- `sort` (Query Parameter)
- `shiftUuid` (Query Parameter)
- `staffCategory` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET ${api.url:/api/v1}/auth/ams/shifts/mappings/staff/{staffUuid}
**Method:** GET
**Endpoint:** ${api.url:/api/v1}/auth/ams/shifts/mappings/staff/{staffUuid}
**Description:** REST endpoint to support AMS workflow operations in ShiftManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ShiftManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `staffUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE ${api.url:/api/v1}/auth/ams/shifts/mappings/{mappingUuid}
**Method:** DELETE
**Endpoint:** ${api.url:/api/v1}/auth/ams/shifts/mappings/{mappingUuid}
**Description:** REST endpoint to support AMS workflow operations in ShiftManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ShiftManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `mappingUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE ${api.url:/api/v1}/auth/ams/shifts/{shiftUuid}
**Method:** DELETE
**Endpoint:** ${api.url:/api/v1}/auth/ams/shifts/{shiftUuid}
**Description:** REST endpoint to support AMS workflow operations in ShiftManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ShiftManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `shiftUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET ${api.url:/api/v1}/auth/ams/shifts/{shiftUuid}
**Method:** GET
**Endpoint:** ${api.url:/api/v1}/auth/ams/shifts/{shiftUuid}
**Description:** REST endpoint to support AMS workflow operations in ShiftManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ShiftManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `shiftUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT ${api.url:/api/v1}/auth/ams/shifts/{shiftUuid}
**Method:** PUT
**Endpoint:** ${api.url:/api/v1}/auth/ams/shifts/{shiftUuid}
**Description:** REST endpoint to support AMS workflow operations in ShiftManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ShiftManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `shiftUuid` (Path Variable)
**body ->**
```json
{
  "shiftName": "string",
  "startTime": "2026-05-20",
  "endTime": "2026-05-20",
  "graceMinutes": 0,
  "applicableDays": [
    0
  ],
  "isDefault": true
}
```
**Request DTO ->** `ShiftCreateDTO` { shiftName: `String`, startTime: `LocalTime`, endTime: `LocalTime`, graceMinutes: `Integer`, applicableDays: `List<Integer>`, isDefault: `Boolean` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /
**Method:** POST
**Endpoint:** /
**Description:** REST endpoint to support AMS workflow operations in StaffAttendanceController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffAttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{}
```
**Request DTO ->** `StaffAttendanceRequestDTO` {  }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /${api.url:/api/v1}/auth/ams/staff
**Method:** ALL
**Endpoint:** /${api.url:/api/v1}/auth/ams/staff
**Description:** REST endpoint to support AMS workflow operations in StaffAttendanceController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffAttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /attendance-completion
**Method:** GET
**Endpoint:** /attendance-completion
**Description:** REST endpoint to support AMS workflow operations in StaffAttendanceController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffAttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `month` (Query Parameter)
- `year` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /bulk
**Method:** POST
**Endpoint:** /bulk
**Description:** REST endpoint to support AMS workflow operations in StaffAttendanceController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffAttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
[
  {}
]
```
**Request DTO ->** `List<StaffAttendanceRequestDTO>` {  }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /mark-all-absent
**Method:** POST
**Endpoint:** /mark-all-absent
**Description:** REST endpoint to support AMS workflow operations in StaffAttendanceController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffAttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `date` (Query Parameter)
- `testMode` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /mark-all-present
**Method:** POST
**Endpoint:** /mark-all-present
**Description:** REST endpoint to support AMS workflow operations in StaffAttendanceController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffAttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `date` (Query Parameter)
- `testMode` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /stats/daily
**Method:** GET
**Endpoint:** /stats/daily
**Description:** REST endpoint to support AMS workflow operations in StaffAttendanceController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffAttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `dateStr` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /unmarked
**Method:** GET
**Endpoint:** /unmarked
**Description:** REST endpoint to support AMS workflow operations in StaffAttendanceController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffAttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `date` (Query Parameter)
- `category` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /{recordUuid}
**Method:** DELETE
**Endpoint:** /{recordUuid}
**Description:** REST endpoint to support AMS workflow operations in StaffAttendanceController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffAttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `recordUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /{recordUuid}
**Method:** GET
**Endpoint:** /{recordUuid}
**Description:** REST endpoint to support AMS workflow operations in StaffAttendanceController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffAttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `recordUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /{recordUuid}
**Method:** PUT
**Endpoint:** /{recordUuid}
**Description:** REST endpoint to support AMS workflow operations in StaffAttendanceController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffAttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `recordUuid` (Path Variable)
**body ->**
```json
{}
```
**Request DTO ->** `StaffAttendanceRequestDTO` {  }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/ams/records/api/v1/auth/ams/records
**Method:** ALL
**Endpoint:** /api/v1/auth/ams/records/api/v1/auth/ams/records
**Description:** Controller for Student Attendance endpoints using attendance short code. Base path is configured in application properties and includes /auth/ so JWT is not required for testing (WebSecurityConfig already permits /{apiVersion}/auth/**). NOTE: This controller intentionally **does not throw** when staff id is missing. It passes the nullable performedByStaffId to the service which chooses between the header/principal and the per-row takenByStaffId in the DTO (service preference: performedByStaffId -> dto.takenByStaffId).

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentAttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/ams/records/completion
**Method:** GET
**Endpoint:** /api/v1/auth/ams/records/completion
**Description:** REST endpoint to support AMS workflow operations in StudentAttendanceController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentAttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `classUuid` (Query Parameter)
- `sectionUuid` (Query Parameter)
- `fromDate` (Query Parameter)
- `toDate` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/ams/records/{recordUuid}
**Method:** DELETE
**Endpoint:** /api/v1/auth/ams/records/{recordUuid}
**Description:** DELETE soft-delete

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentAttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `recordUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/ams/records/{recordUuid}
**Method:** GET
**Endpoint:** /api/v1/auth/ams/records/{recordUuid}
**Description:** GET single record

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentAttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `recordUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/ams/records/{recordUuid}
**Method:** PUT
**Endpoint:** /api/v1/auth/ams/records/{recordUuid}
**Description:** PUT update

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentAttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `recordUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---
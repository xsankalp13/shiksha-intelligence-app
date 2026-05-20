# TEACHER Module API Reference
Contains **33 mapped operational endpoints**.

---

### GET /api/admin/proxy/absent-staff
**Method:** GET
**Endpoint:** /api/admin/proxy/absent-staff
**Description:** GET /api/admin/proxy/absent-staff?date=YYYY-MM-DD Returns staff members marked absent on the given date with proxy coverage flag. Defaults to today if date is omitted.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: AdminProxyController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<AbsentStaffDto>` { staffUserUuid: `UUID`, staffName: `String`, designation: `String`, absentDate: `LocalDate`, proxyCovered: `boolean` }

---

### ALL /api/admin/proxy/api/admin/proxy
**Method:** ALL
**Endpoint:** /api/admin/proxy/api/admin/proxy
**Description:** Admin-facing proxy management endpoints. Base path: /api/admin/proxy All endpoints require ROLE_SUPER_ADMIN, ROLE_SCHOOL_ADMIN, or ROLE_ADMIN.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: AdminProxyController
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

### POST /api/admin/proxy/assign
**Method:** POST
**Endpoint:** /api/admin/proxy/assign
**Description:** POST /api/admin/proxy/assign Admin directly assigns a proxy teacher for an absent teacher.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: AdminProxyController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "required\"": "is"
}
```
**Request DTO ->** `AdminAssignProxyDto` { required": `is` }
**Response DTO ->** `ResponseEntity` wrapping `ProxyRequestResponseDto` { id: `Long`, uuid: `UUID`, teacher: `requesting` }

---

### GET /api/admin/proxy/load-stats
**Method:** GET
**Endpoint:** /api/admin/proxy/load-stats
**Description:** GET /api/admin/proxy/load-stats?date=YYYY-MM-DD Returns proxy load statistics (weekly + monthly counts) for every teacher. Defaults to today if date is omitted.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: AdminProxyController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<ProxyLoadStatsDto>` { staffUserUuid: `UUID`, staffName: `String`, proxiesThisWeek: `int`, proxiesThisMonth: `int` }

---

### DELETE /api/admin/proxy/{requestId}
**Method:** DELETE
**Endpoint:** /api/admin/proxy/{requestId}
**Description:** DELETE /api/admin/proxy/{requestId} Admin cancels / removes a proxy request.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: AdminProxyController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `requestId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `ProxyRequestResponseDto` { id: `Long`, uuid: `UUID`, teacher: `requesting` }

---

### PUT /api/admin/proxy/{requestId}/reassign
**Method:** PUT
**Endpoint:** /api/admin/proxy/{requestId}/reassign
**Description:** PUT /api/admin/proxy/{requestId}/reassign Reassigns an existing proxy request to a different teacher. Body: { "newProxyUserUuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" }

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: AdminProxyController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `requestId` (Path Variable)
**body ->**
None
**Request DTO ->** `Map<String`
**Response DTO ->** `ResponseEntity` wrapping `ProxyRequestResponseDto` { id: `Long`, uuid: `UUID`, teacher: `requesting` }

---

### ALL /api/teacher/attendance/api/teacher/attendance
**Method:** ALL
**Endpoint:** /api/teacher/attendance/api/teacher/attendance
**Description:** REST endpoint to support TEACHER workflow operations in AttendanceController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/teacher/attendance/date/{date}
**Method:** GET
**Endpoint:** /api/teacher/attendance/date/{date}
**Description:** REST endpoint to support TEACHER workflow operations in AttendanceController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `teacherUsername` (Query Parameter)
- `date` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<TeacherAttendanceResponseDto>` {  }

---

### POST /api/teacher/attendance/mark
**Method:** POST
**Endpoint:** /api/teacher/attendance/mark
**Description:** REST endpoint to support TEACHER workflow operations in AttendanceController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AttendanceController
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
**Request DTO ->** `List<TeacherAttendanceMarkRequestDto>` {  }
**Response DTO ->** `ResponseEntity` wrapping `List<TeacherAttendanceResponseDto>` {  }

---

### ALL /api/teacher/incident/api/teacher/incident
**Method:** ALL
**Endpoint:** /api/teacher/incident/api/teacher/incident
**Description:** REST endpoint to support TEACHER workflow operations in IncidentController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: IncidentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/teacher/incident/log
**Method:** POST
**Endpoint:** /api/teacher/incident/log
**Description:** REST endpoint to support TEACHER workflow operations in IncidentController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: IncidentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** `Incident`
**Response DTO ->** `ResponseEntity<Incident>`

---

### GET /api/teacher/incident/student/{studentId}
**Method:** GET
**Endpoint:** /api/teacher/incident/student/{studentId}
**Description:** REST endpoint to support TEACHER workflow operations in IncidentController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: IncidentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `studentId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<List<Incident>>`

---

### ALL /api/teacher/lesson-plan/api/teacher/lesson-plan
**Method:** ALL
**Endpoint:** /api/teacher/lesson-plan/api/teacher/lesson-plan
**Description:** REST endpoint to support TEACHER workflow operations in LessonPlanController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: LessonPlanController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/teacher/proxy-request/accept/{requestId}
**Method:** POST
**Endpoint:** /api/teacher/proxy-request/accept/{requestId}
**Description:** POST /api/teacher/proxy-request/accept/{requestId} Accepts a proxy request addressed to the authenticated teacher.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ProxyRequestController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `requestId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `ProxyRequestResponseDto` { id: `Long`, uuid: `UUID`, teacher: `requesting` }

---

### ALL /api/teacher/proxy-request/api/teacher/proxy-request
**Method:** ALL
**Endpoint:** /api/teacher/proxy-request/api/teacher/proxy-request
**Description:** Teacher-facing proxy request endpoints. Base path: /api/teacher/proxy-request All endpoints require authentication. Access is derived from the JWT — no teacher-id parameter is needed or accepted (prevents horizontal privilege escalation).

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ProxyRequestController
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

### POST /api/teacher/proxy-request/decline/{requestId}
**Method:** POST
**Endpoint:** /api/teacher/proxy-request/decline/{requestId}
**Description:** POST /api/teacher/proxy-request/decline/{requestId} Declines a proxy request addressed to the authenticated teacher.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ProxyRequestController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `requestId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `ProxyRequestResponseDto` { id: `Long`, uuid: `UUID`, teacher: `requesting` }

---

### GET /api/teacher/proxy-request/today
**Method:** GET
**Endpoint:** /api/teacher/proxy-request/today
**Description:** GET /api/teacher/proxy-request/today Returns accepted proxy classes the authenticated teacher is covering today.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ProxyRequestController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<ProxyRequestResponseDto>` { id: `Long`, uuid: `UUID`, teacher: `requesting` }

---

### DELETE /api/teacher/proxy-request/{requestId}
**Method:** DELETE
**Endpoint:** /api/teacher/proxy-request/{requestId}
**Description:** DELETE /api/teacher/proxy-request/{requestId} Cancels a proxy request the authenticated teacher originally sent.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ProxyRequestController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `requestId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `ProxyRequestResponseDto` { id: `Long`, uuid: `UUID`, teacher: `requesting` }

---

### ALL /api/v1/teacher/api/v1/teacher
**Method:** ALL
**Endpoint:** /api/v1/teacher/api/v1/teacher
**Description:** REST endpoint to support TEACHER workflow operations in TeacherDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TeacherDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/teacher/attendance/export
**Method:** GET
**Endpoint:** /api/v1/teacher/attendance/export
**Description:** REST endpoint to support TEACHER workflow operations in TeacherDashboardController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: TeacherDashboardController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `sectionUuid` (Query Parameter)
- `date` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/teacher/class-teacher/class
**Method:** GET
**Endpoint:** /api/v1/teacher/class-teacher/class
**Description:** REST endpoint to support TEACHER workflow operations in TeacherDashboardController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: TeacherDashboardController
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

### GET /api/v1/teacher/class-teacher/students
**Method:** GET
**Endpoint:** /api/v1/teacher/class-teacher/students
**Description:** REST endpoint to support TEACHER workflow operations in TeacherDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TeacherDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `sectionUuid` (Query Parameter)
- `search` (Query Parameter)
- `page` (Query Parameter)
- `size` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/teacher/dashboard-summary
**Method:** GET
**Endpoint:** /api/v1/teacher/dashboard-summary
**Description:** REST endpoint to support TEACHER workflow operations in TeacherDashboardController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: TeacherDashboardController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `date` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/teacher/my-classes
**Method:** GET
**Endpoint:** /api/v1/teacher/my-classes
**Description:** REST endpoint to support TEACHER workflow operations in TeacherDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TeacherDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/teacher/my-homeroom
**Method:** GET
**Endpoint:** /api/v1/teacher/my-homeroom
**Description:** REST endpoint to support TEACHER workflow operations in TeacherDashboardController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: TeacherDashboardController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `date` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/teacher/my-schedule
**Method:** GET
**Endpoint:** /api/v1/teacher/my-schedule
**Description:** REST endpoint to support TEACHER workflow operations in TeacherDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TeacherDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `date` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/teacher/my-students
**Method:** GET
**Endpoint:** /api/v1/teacher/my-students
**Description:** REST endpoint to support TEACHER workflow operations in TeacherDashboardController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: TeacherDashboardController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `classUuid` (Query Parameter)
- `sectionUuid` (Query Parameter)
- `search` (Query Parameter)
- `page` (Query Parameter)
- `size` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/teacher/lecture-logs/api/v1/teacher/lecture-logs
**Method:** ALL
**Endpoint:** /api/v1/teacher/lecture-logs/api/v1/teacher/lecture-logs
**Description:** REST endpoint to support TEACHER workflow operations in TeacherLectureLogController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TeacherLectureLogController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/teacher/lecture-logs/schedule/{scheduleUuid}
**Method:** GET
**Endpoint:** /api/v1/teacher/lecture-logs/schedule/{scheduleUuid}
**Description:** REST endpoint to support TEACHER workflow operations in TeacherLectureLogController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TeacherLectureLogController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `scheduleUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/teacher/lecture-logs/upload-init
**Method:** POST
**Endpoint:** /api/v1/teacher/lecture-logs/upload-init
**Description:** REST endpoint to support TEACHER workflow operations in TeacherLectureLogController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: TeacherLectureLogController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "fileName": "string",
  "contentType": "string",
  "sizeBytes": 0
}
```
**Request DTO ->** `LectureLogUploadInitRequestDto` { fileName: `String`, contentType: `String`, sizeBytes: `Long` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/teacher/schedule/api/v1/teacher/schedule
**Method:** ALL
**Endpoint:** /api/v1/teacher/schedule/api/v1/teacher/schedule
**Description:** REST endpoint to support TEACHER workflow operations in TeacherScheduleController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TeacherScheduleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/teacher/schedule/section/{sectionId}
**Method:** GET
**Endpoint:** /api/v1/teacher/schedule/section/{sectionId}
**Description:** REST endpoint to support TEACHER workflow operations in TeacherScheduleController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TeacherScheduleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `sectionId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<ScheduleResponseDto>` { uuid: `UUID`, section: `NestedSectionResponseDto`, subject: `NestedSubjectResponseDto`, teacher: `NestedTeacherResponseDto`, room: `NestedRoomResponseDto`, timeslot: `NestedTimeslotResponseDto`, uuid: `UUID`, sectionName: `String`, className: `String`, defaultRoom: `RoomBasicResponseDto`, classTeacherUuid: `UUID`, classTeacherName: `String`, uuid: `UUID`, name: `String`, subjectCode: `String`, id: `Long`, name: `String`, uuid: `UUID`, name: `String`, roomType: `String`, totalCapacity: `Integer`, uuid: `UUID`, dayOfWeek: `Short`, startTime: `LocalTime`, endTime: `LocalTime`, slotLabel: `String` }

---

### GET /api/v1/teacher/schedule/{staffId}
**Method:** GET
**Endpoint:** /api/v1/teacher/schedule/{staffId}
**Description:** REST endpoint to support TEACHER workflow operations in TeacherScheduleController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TeacherScheduleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `staffId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<ScheduleResponseDto>` { uuid: `UUID`, section: `NestedSectionResponseDto`, subject: `NestedSubjectResponseDto`, teacher: `NestedTeacherResponseDto`, room: `NestedRoomResponseDto`, timeslot: `NestedTimeslotResponseDto`, uuid: `UUID`, sectionName: `String`, className: `String`, defaultRoom: `RoomBasicResponseDto`, classTeacherUuid: `UUID`, classTeacherName: `String`, uuid: `UUID`, name: `String`, subjectCode: `String`, id: `Long`, name: `String`, uuid: `UUID`, name: `String`, roomType: `String`, totalCapacity: `Integer`, uuid: `UUID`, dayOfWeek: `Short`, startTime: `LocalTime`, endTime: `LocalTime`, slotLabel: `String` }

---
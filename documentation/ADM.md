# ADM Module API Reference
Contains **59 mapped operational endpoints**.

---

### ALL /api/v1/auth/api/v1/auth
**Method:** ALL
**Endpoint:** /api/v1/auth/api/v1/auth
**Description:** REST Controller for managing Academic Classes and their Sections. All responses are wrapped in ResponseEntity for full control over the HTTP response.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AcademicClassController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/classes
**Method:** GET
**Endpoint:** /api/v1/auth/classes
**Description:** REST endpoint to support ADM workflow operations in AcademicClassController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AcademicClassController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<AcademicClassResponseDto>` { classId: `UUID`, name: `String`, sections: `Set<SectionResponseDto>` }

---

### POST /api/v1/auth/classes
**Method:** POST
**Endpoint:** /api/v1/auth/classes
**Description:** REST endpoint to support ADM workflow operations in AcademicClassController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AcademicClassController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "name": "string"
}
```
**Request DTO ->** `AcademicClassRequestDto` { name: `String` }
**Response DTO ->** `ResponseEntity` wrapping `AcademicClassResponseDto` { classId: `UUID`, name: `String`, sections: `Set<SectionResponseDto>` }

---

### DELETE /api/v1/auth/classes/{classId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/classes/{classId}
**Description:** REST endpoint to support ADM workflow operations in AcademicClassController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AcademicClassController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `classId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### GET /api/v1/auth/classes/{classId}
**Method:** GET
**Endpoint:** /api/v1/auth/classes/{classId}
**Description:** REST endpoint to support ADM workflow operations in AcademicClassController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AcademicClassController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `classId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `AcademicClassResponseDto` { classId: `UUID`, name: `String`, sections: `Set<SectionResponseDto>` }

---

### PUT /api/v1/auth/classes/{classId}
**Method:** PUT
**Endpoint:** /api/v1/auth/classes/{classId}
**Description:** REST endpoint to support ADM workflow operations in AcademicClassController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AcademicClassController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `classId` (Path Variable)
**body ->**
```json
{
  "name": "string"
}
```
**Request DTO ->** `AcademicClassRequestDto` { name: `String` }
**Response DTO ->** `ResponseEntity` wrapping `AcademicClassResponseDto` { classId: `UUID`, name: `String`, sections: `Set<SectionResponseDto>` }

---

### GET /api/v1/auth/classes/{classId}/sections
**Method:** GET
**Endpoint:** /api/v1/auth/classes/{classId}/sections
**Description:** REST endpoint to support ADM workflow operations in AcademicClassController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AcademicClassController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `classId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<SectionResponseDto>` { uuid: `UUID`, sectionName: `String`, defaultRoom: `RoomBasicResponseDto`, classTeacherUuid: `UUID`, classTeacherName: `String` }

---

### POST /api/v1/auth/classes/{classId}/sections
**Method:** POST
**Endpoint:** /api/v1/auth/classes/{classId}/sections
**Description:** REST endpoint to support ADM workflow operations in AcademicClassController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AcademicClassController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `classId` (Path Variable)
**body ->**
```json
{
  "sectionName": "string",
  "defaultRoomId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "classTeacherUuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```
**Request DTO ->** `SectionRequestDto` { sectionName: `String`, defaultRoomId: `UUID`, classTeacherUuid: `UUID` }
**Response DTO ->** `ResponseEntity` wrapping `SectionResponseDto` { uuid: `UUID`, sectionName: `String`, defaultRoom: `RoomBasicResponseDto`, classTeacherUuid: `UUID`, classTeacherName: `String` }

---

### DELETE /api/v1/auth/sections/{sectionId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/sections/{sectionId}
**Description:** REST endpoint to support ADM workflow operations in AcademicClassController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AcademicClassController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `sectionId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### GET /api/v1/auth/sections/{sectionId}
**Method:** GET
**Endpoint:** /api/v1/auth/sections/{sectionId}
**Description:** REST endpoint to support ADM workflow operations in AcademicClassController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AcademicClassController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `sectionId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `SectionResponseDto` { uuid: `UUID`, sectionName: `String`, defaultRoom: `RoomBasicResponseDto`, classTeacherUuid: `UUID`, classTeacherName: `String` }

---

### PUT /api/v1/auth/sections/{sectionId}
**Method:** PUT
**Endpoint:** /api/v1/auth/sections/{sectionId}
**Description:** REST endpoint to support ADM workflow operations in AcademicClassController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AcademicClassController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `sectionId` (Path Variable)
**body ->**
```json
{
  "sectionName": "string",
  "defaultRoomId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "classTeacherUuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```
**Request DTO ->** `SectionRequestDto` { sectionName: `String`, defaultRoomId: `UUID`, classTeacherUuid: `UUID` }
**Response DTO ->** `ResponseEntity` wrapping `SectionResponseDto` { uuid: `UUID`, sectionName: `String`, defaultRoom: `RoomBasicResponseDto`, classTeacherUuid: `UUID`, classTeacherName: `String` }

---

### ALL /api/v1/auth/buildings/api/v1/auth/buildings
**Method:** ALL
**Endpoint:** /api/v1/auth/buildings/api/v1/auth/buildings
**Description:** REST endpoint to support ADM workflow operations in BuildingController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: BuildingController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/buildings/{buildingId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/buildings/{buildingId}
**Description:** REST endpoint to support ADM workflow operations in BuildingController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: BuildingController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/buildings/{buildingId}
**Method:** PUT
**Endpoint:** /api/v1/auth/buildings/{buildingId}
**Description:** REST endpoint to support ADM workflow operations in BuildingController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: BuildingController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/curriculum/api/v1/auth/curriculum
**Method:** ALL
**Endpoint:** /api/v1/auth/curriculum/api/v1/auth/curriculum
**Description:** REST endpoint to support ADM workflow operations in CurriculumController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: CurriculumController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/curriculum/classes/{classId}
**Method:** GET
**Endpoint:** /api/v1/auth/curriculum/classes/{classId}
**Description:** REST endpoint to support ADM workflow operations in CurriculumController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: CurriculumController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/curriculum/classes/{classId}/subjects
**Method:** POST
**Endpoint:** /api/v1/auth/curriculum/classes/{classId}/subjects
**Description:** REST endpoint to support ADM workflow operations in CurriculumController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: CurriculumController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/curriculum/overview
**Method:** GET
**Endpoint:** /api/v1/auth/curriculum/overview
**Description:** REST endpoint to support ADM workflow operations in CurriculumController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: CurriculumController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/curriculum/{curriculumMapId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/curriculum/{curriculumMapId}
**Description:** REST endpoint to support ADM workflow operations in CurriculumController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: CurriculumController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/curriculum/{curriculumMapId}
**Method:** PUT
**Endpoint:** /api/v1/auth/curriculum/{curriculumMapId}
**Description:** REST endpoint to support ADM workflow operations in CurriculumController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: CurriculumController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/data-fetch/api/v1/auth/data-fetch
**Method:** ALL
**Endpoint:** /api/v1/auth/data-fetch/api/v1/auth/data-fetch
**Description:** REST Controller for fetching supporting data for UI dropdowns.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DataFetchController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/data-fetch/rooms/available
**Method:** GET
**Endpoint:** /api/v1/auth/data-fetch/rooms/available
**Description:** Finds rooms not scheduled at a timeslot, with optional type filtering.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DataFetchController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `timeslotId` (Query Parameter)
- `roomType` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<AvailableRoomDto>` { uuid: `UUID`, name: `String` }

---

### GET /api/v1/auth/data-fetch/subjects/available
**Method:** GET
**Endpoint:** /api/v1/auth/data-fetch/subjects/available
**Description:** Finds the subjects that are assigned to a specific section's class.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DataFetchController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `sectionId` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<AvailableSubjectDto>` { uuid: `UUID`, name: `String`, subjectCode: `String`, color: `String` }

---

### GET /api/v1/auth/data-fetch/teachers/available
**Method:** GET
**Endpoint:** /api/v1/auth/data-fetch/teachers/available
**Description:** Finds teachers who are qualified for a subject.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DataFetchController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `subjectId` (Query Parameter)
- `timeslotId` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<AvailableTeacherDto>` { id: `Long`, name: `String` }

---

### ALL /api/v1/adm/pickups/api/v1/adm/pickups
**Method:** ALL
**Endpoint:** /api/v1/adm/pickups/api/v1/adm/pickups
**Description:** REST endpoint to support ADM workflow operations in PickupRequestController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PickupRequestController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/adm/pickups/generate
**Method:** POST
**Endpoint:** /api/v1/adm/pickups/generate
**Description:** REST endpoint to support ADM workflow operations in PickupRequestController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PickupRequestController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "studentUuid": "string",
  "studentId": 0
}
```
**Request DTO ->** `PickupRequestGenerateDto` { studentUuid: `String`, studentId: `Long` }
**Response DTO ->** `ResponseEntity` wrapping `PickupRequestResponseDto` { uuid: `String`, studentUuid: `String`, studentName: `String`, studentClassInfo: `String`, generatedByName: `String`, qrToken: `String`, status: `PickupStatus`, generatedAt: `LocalDateTime`, expiresAt: `LocalDateTime`, verifiedAt: `LocalDateTime` }

---

### GET /api/v1/adm/pickups/history
**Method:** GET
**Endpoint:** /api/v1/adm/pickups/history
**Description:** REST endpoint to support ADM workflow operations in PickupRequestController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PickupRequestController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<PickupRequestResponseDto>` { uuid: `String`, studentUuid: `String`, studentName: `String`, studentClassInfo: `String`, generatedByName: `String`, qrToken: `String`, status: `PickupStatus`, generatedAt: `LocalDateTime`, expiresAt: `LocalDateTime`, verifiedAt: `LocalDateTime` }

---

### POST /api/v1/adm/pickups/verify
**Method:** POST
**Endpoint:** /api/v1/adm/pickups/verify
**Description:** REST endpoint to support ADM workflow operations in PickupRequestController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PickupRequestController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "qrToken": "string"
}
```
**Request DTO ->** `PickupVerifyDto` { qrToken: `String` }
**Response DTO ->** `ResponseEntity` wrapping `PickupRequestResponseDto` { uuid: `String`, studentUuid: `String`, studentName: `String`, studentClassInfo: `String`, generatedByName: `String`, qrToken: `String`, status: `PickupStatus`, generatedAt: `LocalDateTime`, expiresAt: `LocalDateTime`, verifiedAt: `LocalDateTime` }

---

### ALL /api/v1/auth/api/v1/auth
**Method:** ALL
**Endpoint:** /api/v1/auth/api/v1/auth
**Description:** REST Controller for managing Rooms. All responses are wrapped in ResponseEntity for full control over the HTTP response.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: RoomController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/rooms
**Method:** GET
**Endpoint:** /api/v1/auth/rooms
**Description:** Retrieves a list of all active rooms. HTTP 200 OK on success.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: RoomController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/rooms
**Method:** POST
**Endpoint:** /api/v1/auth/rooms
**Description:** Creates a new room (e.g., "Room 101"). HTTP 201 Created on success.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: RoomController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/rooms/{roomId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/rooms/{roomId}
**Description:** Soft deletes a room by its UUID. HTTP 204 No Content on success.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: RoomController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/rooms/{roomId}
**Method:** GET
**Endpoint:** /api/v1/auth/rooms/{roomId}
**Description:** Retrieves details for a single room by its UUID. HTTP 200 OK on success.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: RoomController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/rooms/{roomId}
**Method:** PUT
**Endpoint:** /api/v1/auth/rooms/{roomId}
**Description:** Updates a room's details by its UUID. HTTP 200 OK on success.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: RoomController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/api/v1/auth
**Method:** ALL
**Endpoint:** /api/v1/auth/api/v1/auth
**Description:** REST Controller for managing the Timetable Schedule.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScheduleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/schedules
**Method:** POST
**Endpoint:** /api/v1/auth/schedules
**Description:** Creates a new Schedule entry. HTTP 201 Created on success. HTTP 409 Conflict if there is a double booking.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScheduleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/schedules/overview
**Method:** GET
**Endpoint:** /api/v1/auth/schedules/overview
**Description:** REST endpoint to support ADM workflow operations in ScheduleController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScheduleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/schedules/{scheduleId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/schedules/{scheduleId}
**Description:** Soft deletes a Schedule entry by its UUID. HTTP 204 No Content on success.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScheduleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/schedules/{scheduleId}
**Method:** PUT
**Endpoint:** /api/v1/auth/schedules/{scheduleId}
**Description:** Updates an existing Schedule entry by its UUID. HTTP 200 OK on success. HTTP 409 Conflict if there is a double booking.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScheduleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PATCH /api/v1/auth/schedules/{sectionId}/status/{statusType}
**Method:** PATCH
**Endpoint:** /api/v1/auth/schedules/{sectionId}/status/{statusType}
**Description:** REST endpoint to support ADM workflow operations in ScheduleController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScheduleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/sections/{sectionId}/editor-context
**Method:** GET
**Endpoint:** /api/v1/auth/sections/{sectionId}/editor-context
**Description:** REST endpoint to support ADM workflow operations in ScheduleController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScheduleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/sections/{sectionId}/schedule
**Method:** DELETE
**Endpoint:** /api/v1/auth/sections/{sectionId}/schedule
**Description:** REST endpoint to support ADM workflow operations in ScheduleController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScheduleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/sections/{sectionId}/schedule
**Method:** GET
**Endpoint:** /api/v1/auth/sections/{sectionId}/schedule
**Description:** Fetches all existing Schedule entries for a specific section. HTTP 200 OK on success.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScheduleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/sections/{sectionId}/schedule/bulk
**Method:** PUT
**Endpoint:** /api/v1/auth/sections/{sectionId}/schedule/bulk
**Description:** REST endpoint to support ADM workflow operations in ScheduleController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScheduleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/sections/api/v1/auth/sections
**Method:** ALL
**Endpoint:** /api/v1/auth/sections/api/v1/auth/sections
**Description:** REST endpoint to support ADM workflow operations in ScheduleSSEController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScheduleSSEController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/sections/{sectionId}/auto-generate/stream
**Method:** GET
**Endpoint:** /api/v1/auth/sections/{sectionId}/auto-generate/stream
**Description:** REST endpoint to support ADM workflow operations in ScheduleSSEController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScheduleSSEController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `sectionId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/api/v1/auth
**Method:** ALL
**Endpoint:** /api/v1/auth/api/v1/auth
**Description:** REST Controller for managing Subjects. All responses are wrapped in ResponseEntity for full control over the HTTP response.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: SubjectController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/subjects
**Method:** GET
**Endpoint:** /api/v1/auth/subjects
**Description:** Retrieves a list of all active subjects. HTTP 200 OK on success.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: SubjectController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<SubjectResponseDto>` { uuid: `UUID`, name: `String`, subjectCode: `String`, requiresSpecialRoomType: `String`, color: `String` }

---

### POST /api/v1/auth/subjects
**Method:** POST
**Endpoint:** /api/v1/auth/subjects
**Description:** Creates a new subject (e.g., "Physics"). HTTP 201 Created on success.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: SubjectController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "name": "string",
  "subjectCode": "string",
  "requiresSpecialRoomType": "string",
  "color": "string"
}
```
**Request DTO ->** `SubjectRequestDto` { name: `String`, subjectCode: `String`, requiresSpecialRoomType: `String`, color: `String` }
**Response DTO ->** `ResponseEntity` wrapping `SubjectResponseDto` { uuid: `UUID`, name: `String`, subjectCode: `String`, requiresSpecialRoomType: `String`, color: `String` }

---

### DELETE /api/v1/auth/subjects/{subjectId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/subjects/{subjectId}
**Description:** Soft deletes a subject by its UUID. HTTP 204 No Content on success.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: SubjectController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `subjectId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### GET /api/v1/auth/subjects/{subjectId}
**Method:** GET
**Endpoint:** /api/v1/auth/subjects/{subjectId}
**Description:** Retrieves details for a single subject by its UUID. HTTP 200 OK on success.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: SubjectController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `subjectId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `SubjectResponseDto` { uuid: `UUID`, name: `String`, subjectCode: `String`, requiresSpecialRoomType: `String`, color: `String` }

---

### PUT /api/v1/auth/subjects/{subjectId}
**Method:** PUT
**Endpoint:** /api/v1/auth/subjects/{subjectId}
**Description:** Updates a subject's details by its UUID. HTTP 200 OK on success.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: SubjectController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `subjectId` (Path Variable)
**body ->**
```json
{
  "name": "string",
  "subjectCode": "string",
  "requiresSpecialRoomType": "string",
  "color": "string"
}
```
**Request DTO ->** `SubjectRequestDto` { name: `String`, subjectCode: `String`, requiresSpecialRoomType: `String`, color: `String` }
**Response DTO ->** `ResponseEntity` wrapping `SubjectResponseDto` { uuid: `UUID`, name: `String`, subjectCode: `String`, requiresSpecialRoomType: `String`, color: `String` }

---

### ALL /api/v1/auth/api/v1/auth
**Method:** ALL
**Endpoint:** /api/v1/auth/api/v1/auth
**Description:** REST Controller for managing Timeslots. All responses are wrapped in ResponseEntity for full control over the HTTP response.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TimeslotController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/timeslots
**Method:** GET
**Endpoint:** /api/v1/auth/timeslots
**Description:** Retrieves all active timeslots. Supports filtering by day of the week. HTTP 200 OK on success.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TimeslotController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `dayOfWeek` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<TimeslotResponseDto>` { uuid: `UUID`, dayOfWeek: `Short`, startTime: `LocalTime`, endTime: `LocalTime`, slotLabel: `String`, isBreak: `Boolean`, isNonTeachingSlot: `Boolean` }

---

### POST /api/v1/auth/timeslots
**Method:** POST
**Endpoint:** /api/v1/auth/timeslots
**Description:** Creates a new timeslot (e.g., "Monday, 09:00-09:40"). HTTP 201 Created on success.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TimeslotController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "dayOfWeek": "Short",
  "startTime": "2026-05-20",
  "endTime": "2026-05-20",
  "slotLabel": "string",
  "isBreak": true,
  "isNonTeachingSlot": true
}
```
**Request DTO ->** `TimeslotRequestDto` { dayOfWeek: `Short`, startTime: `LocalTime`, endTime: `LocalTime`, slotLabel: `String`, isBreak: `Boolean`, isNonTeachingSlot: `Boolean` }
**Response DTO ->** `ResponseEntity` wrapping `TimeslotResponseDto` { uuid: `UUID`, dayOfWeek: `Short`, startTime: `LocalTime`, endTime: `LocalTime`, slotLabel: `String`, isBreak: `Boolean`, isNonTeachingSlot: `Boolean` }

---

### DELETE /api/v1/auth/timeslots/{timeslotId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/timeslots/{timeslotId}
**Description:** Soft deletes a timeslot by its UUID. HTTP 204 No Content on success.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TimeslotController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `timeslotId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### GET /api/v1/auth/timeslots/{timeslotId}
**Method:** GET
**Endpoint:** /api/v1/auth/timeslots/{timeslotId}
**Description:** Retrieves details for a single timeslot by its UUID. HTTP 200 OK on success.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TimeslotController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `timeslotId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `TimeslotResponseDto` { uuid: `UUID`, dayOfWeek: `Short`, startTime: `LocalTime`, endTime: `LocalTime`, slotLabel: `String`, isBreak: `Boolean`, isNonTeachingSlot: `Boolean` }

---

### PUT /api/v1/auth/timeslots/{timeslotId}
**Method:** PUT
**Endpoint:** /api/v1/auth/timeslots/{timeslotId}
**Description:** Updates a timeslot's details by its UUID. HTTP 200 OK on success.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TimeslotController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `timeslotId` (Path Variable)
**body ->**
```json
{
  "dayOfWeek": "Short",
  "startTime": "2026-05-20",
  "endTime": "2026-05-20",
  "slotLabel": "string",
  "isBreak": true,
  "isNonTeachingSlot": true
}
```
**Request DTO ->** `TimeslotRequestDto` { dayOfWeek: `Short`, startTime: `LocalTime`, endTime: `LocalTime`, slotLabel: `String`, isBreak: `Boolean`, isNonTeachingSlot: `Boolean` }
**Response DTO ->** `ResponseEntity` wrapping `TimeslotResponseDto` { uuid: `UUID`, dayOfWeek: `Short`, startTime: `LocalTime`, endTime: `LocalTime`, slotLabel: `String`, isBreak: `Boolean`, isNonTeachingSlot: `Boolean` }

---

### ALL /api/v1/adm/visitors/api/v1/adm/visitors
**Method:** ALL
**Endpoint:** /api/v1/adm/visitors/api/v1/adm/visitors
**Description:** REST endpoint to support ADM workflow operations in VisitorLogController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: VisitorLogController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---
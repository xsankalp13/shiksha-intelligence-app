# DISCIPLINE Module API Reference
Contains **4 mapped operational endpoints**.

---

### GET /api/v1/auth/discipline/remarks
**Method:** GET
**Endpoint:** /api/v1/auth/discipline/remarks
**Description:** ─── Admin Endpoint ────────────────────────────────────────────────── GET /api/v1/auth/discipline/remarks Admin views all remarks, with optional filters and pagination/sorting. Query params: - fromDate, toDate (yyyy-MM-dd) - classUuid, sectionUuid, teacherUuid, studentUuid - tag (EXCELLENT, GOOD, OKAY, BAD, NEEDS_IMPROVEMENT) - page, size, sort (Spring Pageable)

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DisciplineRemarkController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `fromDate` (Query Parameter)
- `toDate` (Query Parameter)
- `classUuid` (Query Parameter)
- `sectionUuid` (Query Parameter)
- `tag` (Query Parameter)
- `teacherUuid` (Query Parameter)
- `studentUuid` (Query Parameter)
- `search` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<Page<AdminRemarkDTO>>`

---

### GET /api/v1/student/discipline/remarks
**Method:** GET
**Endpoint:** /api/v1/student/discipline/remarks
**Description:** ─── Student Endpoint ──────────────────────────────────────────────── GET /api/v1/student/discipline/remarks Student views remarks about themselves.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DisciplineRemarkController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<StudentRemarkDTO>` { uuid: `UUID`, message: `String`, tag: `RemarkTag`, remarkDate: `LocalDate`, teacherName: `String` }

---

### GET /api/v1/teacher/discipline/remarks
**Method:** GET
**Endpoint:** /api/v1/teacher/discipline/remarks
**Description:** GET /api/v1/teacher/discipline/remarks Teacher views their own previous remarks.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DisciplineRemarkController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<StudentRemarkDTO>` { uuid: `UUID`, message: `String`, tag: `RemarkTag`, remarkDate: `LocalDate`, teacherName: `String` }

---

### POST /api/v1/teacher/discipline/remarks
**Method:** POST
**Endpoint:** /api/v1/teacher/discipline/remarks
**Description:** ─── Teacher Endpoints ─────────────────────────────────────────────── POST /api/v1/teacher/discipline/remarks Teacher creates a remark about a student.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DisciplineRemarkController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "studentUuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "message": "string",
  "tag": "RemarkTag",
  "remarkDate": "2026-05-20"
}
```
**Request DTO ->** `CreateRemarkRequest` { studentUuid: `UUID`, message: `String`, tag: `RemarkTag`, remarkDate: `LocalDate` }
**Response DTO ->** `ResponseEntity` wrapping `StudentRemarkDTO` { uuid: `UUID`, message: `String`, tag: `RemarkTag`, remarkDate: `LocalDate`, teacherName: `String` }

---
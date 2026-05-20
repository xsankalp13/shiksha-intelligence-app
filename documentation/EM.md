# EM Module API Reference
Contains **132 mapped operational endpoints**.

---

### ALL /api/v1/admin/admit-cards/api/v1/admin/admit-cards
**Method:** ALL
**Endpoint:** /api/v1/admin/admit-cards/api/v1/admin/admit-cards
**Description:** REST endpoint to support EM workflow operations in AdmitCardAdminController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: AdmitCardAdminController
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

### POST /api/v1/admin/admit-cards/generate
**Method:** POST
**Endpoint:** /api/v1/admin/admit-cards/generate
**Description:** REST endpoint to support EM workflow operations in AdmitCardAdminController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: AdmitCardAdminController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "examId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "scheduleId": 0
}
```
**Request DTO ->** `AdmitCardGenerateRequestDTO` { examId: `UUID`, scheduleId: `Long` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/admin/admit-cards/generate-batch
**Method:** POST
**Endpoint:** /api/v1/admin/admit-cards/generate-batch
**Description:** REST endpoint to support EM workflow operations in AdmitCardAdminController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessSchedule(#scheduleId)
- `Class Context`: AdmitCardAdminController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "examId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "scheduleId": 0
}
```
**Request DTO ->** `AdmitCardGenerateRequestDTO` { examId: `UUID`, scheduleId: `Long` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/admin/admit-cards/generate/schedule/{scheduleId}
**Method:** POST
**Endpoint:** /api/v1/admin/admit-cards/generate/schedule/{scheduleId}
**Description:** REST endpoint to support EM workflow operations in AdmitCardAdminController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessExamUuid(#requestDTO.examId)
- `Class Context`: AdmitCardAdminController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `scheduleId` (Path Variable)
**body ->**
```json
{
  "examId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "scheduleId": 0
}
```
**Request DTO ->** `AdmitCardGenerateRequestDTO` { examId: `UUID`, scheduleId: `Long` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/admin/admit-cards/status/{examUuid}
**Method:** GET
**Endpoint:** /api/v1/admin/admit-cards/status/{examUuid}
**Description:** REST endpoint to support EM workflow operations in AdmitCardAdminController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessExamUuid(#requestDTO.examId)
- `Class Context`: AdmitCardAdminController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `examUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/admin/admit-cards/status/{examUuid}/progress
**Method:** GET
**Endpoint:** /api/v1/admin/admit-cards/status/{examUuid}/progress
**Description:** REST endpoint to support EM workflow operations in AdmitCardAdminController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessExamUuid(#examUuid)
- `Class Context`: AdmitCardAdminController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `examUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/student/admit-card/api/v1/student/admit-card
**Method:** ALL
**Endpoint:** /api/v1/student/admit-card/api/v1/student/admit-card
**Description:** REST endpoint to support EM workflow operations in AdmitCardStudentController.

**Security Requirement:**
- `Authority / Scope`: hasAuthority('ROLE_STUDENT')
- `Class Context`: AdmitCardStudentController
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

### GET /api/v1/student/admit-card/{examUuid}
**Method:** GET
**Endpoint:** /api/v1/student/admit-card/{examUuid}
**Description:** REST endpoint to support EM workflow operations in AdmitCardStudentController.

**Security Requirement:**
- `Authority / Scope`: hasAuthority('ROLE_STUDENT')
- `Class Context`: AdmitCardStudentController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `examUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `AdmitCardResponseDTO` { admitCardId: `Long`, examId: `Long`, examName: `String`, studentId: `UUID`, studentName: `String`, enrollmentNumber: `String`, generatedAt: `LocalDateTime`, status: `String`, pdfUrl: `String`, publishedBy: `String`, publishedAt: `LocalDateTime`, entries: `List<AdmitCardEntryResponseDTO>` }

---

### ALL /api/v1/auth/examination/evaluation/api/v1/auth/examination/evaluation
**Method:** ALL
**Endpoint:** /api/v1/auth/examination/evaluation/api/v1/auth/examination/evaluation
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationAdminController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN','ROLE_EXAM_CONTROLLER')
- `Class Context`: AnswerEvaluationAdminController
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

### POST /api/v1/auth/examination/evaluation/assign
**Method:** POST
**Endpoint:** /api/v1/auth/examination/evaluation/assign
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationAdminController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN','ROLE_EXAM_CONTROLLER')
- `Class Context`: AnswerEvaluationAdminController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "examScheduleId": 0,
  "teacherId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "dueDate": "2026-05-20",
  "role": "EvaluationAssignmentRole"
}
```
**Request DTO ->** `EvaluationAssignmentCreateRequestDTO` { examScheduleId: `Long`, teacherId: `UUID`, dueDate: `LocalDate`, role: `EvaluationAssignmentRole` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/evaluation/assignments
**Method:** GET
**Endpoint:** /api/v1/auth/examination/evaluation/assignments
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationAdminController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessSchedule(#requestDTO.examScheduleId)
- `Class Context`: AnswerEvaluationAdminController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `teacherId` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<EvaluationAssignmentResponseDTO>` { assignmentId: `Long`, examScheduleId: `Long`, examUuid: `UUID`, examName: `String`, subjectName: `String`, examDate: `LocalDate`, teacherId: `UUID`, teacherName: `String`, role: `String`, status: `EvaluationAssignmentStatus`, uploadStatus: `String`, assignedAt: `LocalDateTime`, dueDate: `LocalDate` }

---

### DELETE /api/v1/auth/examination/evaluation/assignments/{assignmentId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/examination/evaluation/assignments/{assignmentId}
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationAdminController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN','ROLE_EXAM_CONTROLLER')
- `Class Context`: AnswerEvaluationAdminController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `assignmentId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/admin/results/api/v1/admin/results
**Method:** ALL
**Endpoint:** /api/v1/admin/results/api/v1/admin/results
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationResultAdminController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN','ROLE_EXAM_CONTROLLER')
- `Class Context`: AnswerEvaluationResultAdminController
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

### POST /api/v1/admin/results/approve-class
**Method:** POST
**Endpoint:** /api/v1/admin/results/approve-class
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationResultAdminController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessExamUuid(#examId)
- `Class Context`: AnswerEvaluationResultAdminController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `classId` (Query Parameter)
- `examId` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/admin/results/mark-absent
**Method:** POST
**Endpoint:** /api/v1/admin/results/mark-absent
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationResultAdminController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessExamUuid(#examId)
- `Class Context`: AnswerEvaluationResultAdminController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `scheduleId` (Query Parameter)
- `studentId` (Query Parameter)
- `isAbsent` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/admin/results/publish-bulk
**Method:** POST
**Endpoint:** /api/v1/admin/results/publish-bulk
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationResultAdminController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessEvaluationResult(#resultId)
- `Class Context`: AnswerEvaluationResultAdminController
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

### POST /api/v1/admin/results/publish-class
**Method:** POST
**Endpoint:** /api/v1/admin/results/publish-class
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationResultAdminController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessExamUuid(#examId)
- `Class Context`: AnswerEvaluationResultAdminController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `classId` (Query Parameter)
- `examId` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/admin/results/summary
**Method:** GET
**Endpoint:** /api/v1/admin/results/summary
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationResultAdminController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessEvaluationResults(#resultIds)
- `Class Context`: AnswerEvaluationResultAdminController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `classId` (Query Parameter)
- `examId` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/admin/results/{id}/approve
**Method:** POST
**Endpoint:** /api/v1/admin/results/{id}/approve
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationResultAdminController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN','ROLE_EXAM_CONTROLLER')
- `Class Context`: AnswerEvaluationResultAdminController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `resultId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/admin/results/{id}/publish
**Method:** POST
**Endpoint:** /api/v1/admin/results/{id}/publish
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationResultAdminController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessEvaluationResult(#resultId)
- `Class Context`: AnswerEvaluationResultAdminController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `resultId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/admin/results/{id}/reject
**Method:** POST
**Endpoint:** /api/v1/admin/results/{id}/reject
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationResultAdminController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessEvaluationResult(#resultId)
- `Class Context`: AnswerEvaluationResultAdminController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `resultId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/student/results/api/v1/student/results
**Method:** ALL
**Endpoint:** /api/v1/student/results/api/v1/student/results
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationStudentController.

**Security Requirement:**
- `Authority / Scope`: hasAuthority('ROLE_STUDENT')
- `Class Context`: AnswerEvaluationStudentController
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

### GET /api/v1/student/results/{id}
**Method:** GET
**Endpoint:** /api/v1/student/results/{id}
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationStudentController.

**Security Requirement:**
- `Authority / Scope`: hasAuthority('ROLE_STUDENT')
- `Class Context`: AnswerEvaluationStudentController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `resultId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StudentResultDetailResponseDTO` { resultId: `Long`, scheduleId: `Long`, examName: `String`, subjectName: `String`, examDate: `LocalDate`, totalMarks: `BigDecimal`, maxMarks: `Integer`, publishedAt: `LocalDateTime`, subjectMarks: `List<SubjectMarkDTO>`, subjectName: `String`, marksObtained: `BigDecimal`, maxMarks: `Integer` }

---

### GET /api/v1/student/results/{id}/pdf
**Method:** GET
**Endpoint:** /api/v1/student/results/{id}/pdf
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationStudentController.

**Security Requirement:**
- `Authority / Scope`: hasAuthority('ROLE_STUDENT')
- `Class Context`: AnswerEvaluationStudentController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `resultId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<byte[]>`

---

### POST /api/v1/teacher/answer-sheets/images/complete
**Method:** POST
**Endpoint:** /api/v1/teacher/answer-sheets/images/complete
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationTeacherController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: AnswerEvaluationTeacherController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `scheduleId` (Query Parameter)
- `studentId` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `AnswerSheetImageGroupResponseDTO` { answerSheetId: `Long`, studentId: `UUID`, examScheduleId: `Long`, status: `AnswerSheetStatus`, updatedAt: `LocalDateTime`, pages: `List<AnswerSheetImagePageResponseDTO>` }

---

### POST /api/v1/teacher/answer-sheets/images/upload
**Method:** POST
**Endpoint:** /api/v1/teacher/answer-sheets/images/upload
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationTeacherController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: AnswerEvaluationTeacherController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `scheduleId` (Query Parameter)
- `studentId` (Query Parameter)
- `pageNumbers` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `AnswerSheetImageGroupResponseDTO` { answerSheetId: `Long`, studentId: `UUID`, examScheduleId: `Long`, status: `AnswerSheetStatus`, updatedAt: `LocalDateTime`, pages: `List<AnswerSheetImagePageResponseDTO>` }

---

### POST /api/v1/teacher/answer-sheets/upload
**Method:** POST
**Endpoint:** /api/v1/teacher/answer-sheets/upload
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationTeacherController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: AnswerEvaluationTeacherController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `scheduleId` (Query Parameter)
- `studentId` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `AnswerSheetUploadResponseDTO` { answerSheetId: `Long`, fileUrl: `String`, status: `AnswerSheetStatus`, createdAt: `LocalDateTime` }

---

### GET /api/v1/teacher/answer-sheets/{id}/annotations
**Method:** GET
**Endpoint:** /api/v1/teacher/answer-sheets/{id}/annotations
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationTeacherController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: AnswerEvaluationTeacherController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `answerSheetId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<AnnotationResponseDTO>` { id: `Long`, pageNumber: `Integer`, x: `Double`, y: `Double`, type: `AnnotationType`, metadata: `Map<String, Object>` }

---

### POST /api/v1/teacher/answer-sheets/{id}/annotations
**Method:** POST
**Endpoint:** /api/v1/teacher/answer-sheets/{id}/annotations
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationTeacherController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: AnswerEvaluationTeacherController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `answerSheetId` (Path Variable)
**body ->**
```json
{
  "pageNumber": 0,
  "x": 0,
  "y": 0,
  "type": "AnnotationType",
  "metadata": "Map<String, Object>"
}
```
**Request DTO ->** `AnnotationRequestDTO` { pageNumber: `Integer`, x: `Double`, y: `Double`, type: `AnnotationType`, metadata: `Map<String, Object>` }
**Response DTO ->** `ResponseEntity` wrapping `AnnotationResponseDTO` { id: `Long`, pageNumber: `Integer`, x: `Double`, y: `Double`, type: `AnnotationType`, metadata: `Map<String, Object>` }

---

### GET /api/v1/teacher/answer-sheets/{id}/file
**Method:** GET
**Endpoint:** /api/v1/teacher/answer-sheets/{id}/file
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationTeacherController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: AnswerEvaluationTeacherController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `token` (Query Parameter)
- `expires` (Query Parameter)
- `answerSheetId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/teacher/answer-sheets/{id}/signed-url
**Method:** GET
**Endpoint:** /api/v1/teacher/answer-sheets/{id}/signed-url
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationTeacherController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: AnswerEvaluationTeacherController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `answerSheetId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<String>`

---

### GET /api/v1/teacher/answer-sheets/{studentId}/{scheduleId}
**Method:** GET
**Endpoint:** /api/v1/teacher/answer-sheets/{studentId}/{scheduleId}
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationTeacherController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: AnswerEvaluationTeacherController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `studentId` (Path Variable)
- `scheduleId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `AnswerSheetImageGroupResponseDTO` { answerSheetId: `Long`, studentId: `UUID`, examScheduleId: `Long`, status: `AnswerSheetStatus`, updatedAt: `LocalDateTime`, pages: `List<AnswerSheetImagePageResponseDTO>` }

---

### ALL /api/v1/teacher/api/v1/teacher
**Method:** ALL
**Endpoint:** /api/v1/teacher/api/v1/teacher
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationTeacherController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: AnswerEvaluationTeacherController
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

### GET /api/v1/teacher/evaluation/assignments
**Method:** GET
**Endpoint:** /api/v1/teacher/evaluation/assignments
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationTeacherController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: AnswerEvaluationTeacherController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<EvaluationAssignmentResponseDTO>` { assignmentId: `Long`, examScheduleId: `Long`, examUuid: `UUID`, examName: `String`, subjectName: `String`, examDate: `LocalDate`, teacherId: `UUID`, teacherName: `String`, role: `String`, status: `EvaluationAssignmentStatus`, uploadStatus: `String`, assignedAt: `LocalDateTime`, dueDate: `LocalDate` }

---

### POST /api/v1/teacher/evaluation/{answerSheetId}/marks
**Method:** POST
**Endpoint:** /api/v1/teacher/evaluation/{answerSheetId}/marks
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationTeacherController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: AnswerEvaluationTeacherController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `answerSheetId` (Path Variable)
**body ->**
```json
{
  "questionMarks": [
    {
      "sectionName": "string",
      "questionNumber": 0,
      "optionLabel": "string",
      "marksObtained": 0,
      "annotationType": "AnnotationType"
    }
  ]
}
```
**Request DTO ->** `SaveEvaluationMarksRequestDTO` { questionMarks: `List<SaveQuestionMarkRequestDTO>` }
**Response DTO ->** `ResponseEntity` wrapping `EvaluationResultResponseDTO` { resultId: `Long`, answerSheetId: `Long`, totalMarks: `BigDecimal`, status: `String`, evaluatedAt: `LocalDateTime`, submittedAt: `LocalDateTime`, approvedAt: `LocalDateTime`, publishedAt: `LocalDateTime`, approvedBy: `String`, sectionTotals: `Map<String, BigDecimal>`, selectedQuestions: `Map<String, List<String>>` }

---

### POST /api/v1/teacher/evaluation/{answerSheetId}/publish
**Method:** POST
**Endpoint:** /api/v1/teacher/evaluation/{answerSheetId}/publish
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationTeacherController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: AnswerEvaluationTeacherController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `answerSheetId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `EvaluationResultResponseDTO` { resultId: `Long`, answerSheetId: `Long`, totalMarks: `BigDecimal`, status: `String`, evaluatedAt: `LocalDateTime`, submittedAt: `LocalDateTime`, approvedAt: `LocalDateTime`, publishedAt: `LocalDateTime`, approvedBy: `String`, sectionTotals: `Map<String, BigDecimal>`, selectedQuestions: `Map<String, List<String>>` }

---

### GET /api/v1/teacher/evaluation/{answerSheetId}/structure
**Method:** GET
**Endpoint:** /api/v1/teacher/evaluation/{answerSheetId}/structure
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationTeacherController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: AnswerEvaluationTeacherController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `answerSheetId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `AnswerEvaluationStructureResponseDTO` { answerSheetId: `Long`, totalQuestions: `Integer`, totalMaxMarks: `Integer`, resultStatus: `String`, sections: `List<SectionDTO>`, sectionName: `String`, totalQuestions: `Integer`, attemptQuestions: `Integer`, sectionType: `TemplateSectionType`, helperText: `String`, questions: `List<QuestionDTO>`, questionNumber: `Integer`, maxMarks: `BigDecimal`, type: `TemplateQuestionType`, options: `List<OptionDTO>`, marksObtained: `BigDecimal`, annotationType: `AnnotationType`, label: `String`, maxMarks: `BigDecimal`, marksObtained: `BigDecimal`, annotationType: `AnnotationType` }

---

### POST /api/v1/teacher/evaluation/{answerSheetId}/submit
**Method:** POST
**Endpoint:** /api/v1/teacher/evaluation/{answerSheetId}/submit
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationTeacherController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: AnswerEvaluationTeacherController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `answerSheetId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `EvaluationResultResponseDTO` { resultId: `Long`, answerSheetId: `Long`, totalMarks: `BigDecimal`, status: `String`, evaluatedAt: `LocalDateTime`, submittedAt: `LocalDateTime`, approvedAt: `LocalDateTime`, publishedAt: `LocalDateTime`, approvedBy: `String`, sectionTotals: `Map<String, BigDecimal>`, selectedQuestions: `Map<String, List<String>>` }

---

### GET /api/v1/teacher/evaluation/{scheduleId}/answer-sheets
**Method:** GET
**Endpoint:** /api/v1/teacher/evaluation/{scheduleId}/answer-sheets
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationTeacherController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: AnswerEvaluationTeacherController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `page` (Query Parameter)
- `size` (Query Parameter)
- `scheduleId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<Page<AnswerSheetUploadResponseDTO>>`

---

### GET /api/v1/teacher/evaluation/{scheduleId}/students
**Method:** GET
**Endpoint:** /api/v1/teacher/evaluation/{scheduleId}/students
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationTeacherController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: AnswerEvaluationTeacherController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `scheduleId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<TeacherEvaluationStudentResponseDTO>` { studentId: `UUID`, studentName: `String`, enrollmentNumber: `String`, answerSheetId: `Long`, answerSheetStatus: `AnswerSheetStatus`, malpracticeReported: `boolean` }

---

### GET /api/v1/teacher/evaluation/{scheduleId}/students/paged
**Method:** GET
**Endpoint:** /api/v1/teacher/evaluation/{scheduleId}/students/paged
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationTeacherController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: AnswerEvaluationTeacherController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `page` (Query Parameter)
- `size` (Query Parameter)
- `scheduleId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<Page<TeacherEvaluationStudentResponseDTO>>`

---

### POST /api/v1/teacher/evaluation/{scheduleId}/upload-complete
**Method:** POST
**Endpoint:** /api/v1/teacher/evaluation/{scheduleId}/upload-complete
**Description:** REST endpoint to support EM workflow operations in AnswerEvaluationTeacherController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: AnswerEvaluationTeacherController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `scheduleId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `EvaluationAssignmentResponseDTO` { assignmentId: `Long`, examScheduleId: `Long`, examUuid: `UUID`, examName: `String`, subjectName: `String`, examDate: `LocalDate`, teacherId: `UUID`, teacherName: `String`, role: `String`, status: `EvaluationAssignmentStatus`, uploadStatus: `String`, assignedAt: `LocalDateTime`, dueDate: `LocalDate` }

---

### ALL /api/v1/auth/examination/api/v1/auth/examination
**Method:** ALL
**Endpoint:** /api/v1/auth/examination/api/v1/auth/examination
**Description:** REST endpoint to support EM workflow operations in ExamAttendanceController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ExamAttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/examination/exam-attendance/finalize
**Method:** POST
**Endpoint:** /api/v1/auth/examination/exam-attendance/finalize
**Description:** REST endpoint to support EM workflow operations in ExamAttendanceController.

**Security Requirement:**
- `Authority / Scope`: hasRole('TEACHER') or @examControllerAccess.canAccessSchedule(#request.examScheduleId)
- `Class Context`: ExamAttendanceController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "examScheduleId": 0,
  "roomId": 0
}
```
**Request DTO ->** `ExamAttendanceFinalizeRequestDTO` { examScheduleId: `Long`, roomId: `Long` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/examination/exam-attendance/mark
**Method:** POST
**Endpoint:** /api/v1/auth/examination/exam-attendance/mark
**Description:** REST endpoint to support EM workflow operations in ExamAttendanceController.

**Security Requirement:**
- `Authority / Scope`: hasRole('TEACHER') or @examControllerAccess.canAccessSchedule(#examScheduleId)
- `Class Context`: ExamAttendanceController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "examScheduleId": 0,
  "roomId": 0,
  "attendances": [
    {
      "studentId": 0,
      "status": "ExamAttendanceStatus",
      "malpractice": true
    }
  ]
}
```
**Request DTO ->** `ExamAttendanceMarkRequestDTO` { examScheduleId: `Long`, roomId: `Long`, attendances: `List<ExamAttendanceMarkEntryDTO>` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/exam-attendance/room/{roomId}
**Method:** GET
**Endpoint:** /api/v1/auth/examination/exam-attendance/room/{roomId}
**Description:** REST endpoint to support EM workflow operations in ExamAttendanceController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('TEACHER','ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: ExamAttendanceController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `examScheduleId` (Query Parameter)
- `roomId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/invigilator/rooms
**Method:** GET
**Endpoint:** /api/v1/auth/examination/invigilator/rooms
**Description:** REST endpoint to support EM workflow operations in ExamAttendanceController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ExamAttendanceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/examination/exams/api/v1/auth/examination/exams
**Method:** ALL
**Endpoint:** /api/v1/auth/examination/exams/api/v1/auth/examination/exams
**Description:** REST endpoint to support EM workflow operations in ExamController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: ExamController
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

### GET /api/v1/auth/examination/exams/upcoming
**Method:** GET
**Endpoint:** /api/v1/auth/examination/exams/upcoming
**Description:** REST endpoint to support EM workflow operations in ExamController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessExamUuid(#uuid)
- `Class Context`: ExamController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<ExamResponseDTO>` { id: `Long`, uuid: `UUID`, name: `String`, academicYear: `String`, examType: `ExamType`, startDate: `LocalDate`, endDate: `LocalDate`, templateId: `UUID`, templateName: `String`, isPublished: `boolean`, timetablePublished: `boolean`, createdAt: `LocalDateTime`, updatedAt: `LocalDateTime`, createdBy: `String`, updatedBy: `String`, assignedControllerId: `Long`, assignedControllerName: `String`, remainingAttempts: `Integer` }

---

### DELETE /api/v1/auth/examination/exams/{uuid}
**Method:** DELETE
**Endpoint:** /api/v1/auth/examination/exams/{uuid}
**Description:** REST endpoint to support EM workflow operations in ExamController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessExamUuid(#uuid)
- `Class Context`: ExamController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/exams/{uuid}
**Method:** GET
**Endpoint:** /api/v1/auth/examination/exams/{uuid}
**Description:** REST endpoint to support EM workflow operations in ExamController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: ExamController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/examination/exams/{uuid}
**Method:** PUT
**Endpoint:** /api/v1/auth/examination/exams/{uuid}
**Description:** REST endpoint to support EM workflow operations in ExamController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: ExamController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
```json
{
  "name": "string",
  "academicYear": "string",
  "examType": "ExamType",
  "startDate": "2026-05-20",
  "endDate": "2026-05-20"
}
```
**Request DTO ->** `ExamRequestDTO` { name: `String`, academicYear: `String`, examType: `ExamType`, startDate: `LocalDate`, endDate: `LocalDate` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PATCH /api/v1/auth/examination/exams/{uuid}/publish
**Method:** PATCH
**Endpoint:** /api/v1/auth/examination/exams/{uuid}/publish
**Description:** REST endpoint to support EM workflow operations in ExamController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessExamUuid(#uuid)
- `Class Context`: ExamController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** `Map<String`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PATCH /api/v1/auth/examination/exams/{uuid}/publish-timetable
**Method:** PATCH
**Endpoint:** /api/v1/auth/examination/exams/{uuid}/publish-timetable
**Description:** REST endpoint to support EM workflow operations in ExamController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessExamUuid(#uuid)
- `Class Context`: ExamController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/examination/exam-controller/api/v1/auth/examination/exam-controller
**Method:** ALL
**Endpoint:** /api/v1/auth/examination/exam-controller/api/v1/auth/examination/exam-controller
**Description:** REST endpoint to support EM workflow operations in ExamControllerManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ExamControllerManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/examination/exam-controller/assignments
**Method:** POST
**Endpoint:** /api/v1/auth/examination/exam-controller/assignments
**Description:** REST endpoint to support EM workflow operations in ExamControllerManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ExamControllerManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "examId": 0,
  "staffId": 0
}
```
**Request DTO ->** `ExamControllerAssignmentRequestDTO` { examId: `Long`, staffId: `Long` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/exam-controller/dashboard
**Method:** GET
**Endpoint:** /api/v1/auth/examination/exam-controller/dashboard
**Description:** REST endpoint to support EM workflow operations in ExamControllerManagementController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN')
- `Class Context`: ExamControllerManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `examId` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/exam-controller/dashboard/class-view
**Method:** GET
**Endpoint:** /api/v1/auth/examination/exam-controller/dashboard/class-view
**Description:** REST endpoint to support EM workflow operations in ExamControllerManagementController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessExam(#examId)
- `Class Context`: ExamControllerManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `examId` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/exam-controller/dashboard/room-view
**Method:** GET
**Endpoint:** /api/v1/auth/examination/exam-controller/dashboard/room-view
**Description:** REST endpoint to support EM workflow operations in ExamControllerManagementController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessExam(#examId)
- `Class Context`: ExamControllerManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `examId` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/examination/exam-controller/defaulters/decision
**Method:** POST
**Endpoint:** /api/v1/auth/examination/exam-controller/defaulters/decision
**Description:** REST endpoint to support EM workflow operations in ExamControllerManagementController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessExam(#examId)
- `Class Context`: ExamControllerManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "examScheduleId": 0,
  "studentId": 0,
  "allowed": true,
  "reason": "string"
}
```
**Request DTO ->** `ExamEntryDecisionRequestDTO` { examScheduleId: `Long`, studentId: `Long`, allowed: `Boolean`, reason: `String` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/examination/api/v1/auth/examination
**Method:** ALL
**Endpoint:** /api/v1/auth/examination/api/v1/auth/examination
**Description:** REST endpoint to support EM workflow operations in ExamScheduleController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: ExamScheduleController
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

### GET /api/v1/auth/examination/exams/{examUuid}/schedules
**Method:** GET
**Endpoint:** /api/v1/auth/examination/exams/{examUuid}/schedules
**Description:** Get all schedule entries for a specific exam. GET /api/v1/examination/exams/{examUuid}/schedules

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: ExamScheduleController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `examUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/examination/exams/{examUuid}/schedules
**Method:** POST
**Endpoint:** /api/v1/auth/examination/exams/{examUuid}/schedules
**Description:** Create a new schedule entry for a specific exam. POST /api/v1/examination/exams/{examUuid}/schedules

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: ExamScheduleController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `examUuid` (Path Variable)
**body ->**
```json
{
  "academicClassId": 0,
  "timeslotId": 0,
  "subjectId": 0,
  "examDate": "2026-05-20",
  "duration": 0,
  "maxMarks": 0,
  "passingMarks": 0,
  "maxStudentsPerSeat": 0
}
```
**Request DTO ->** `ExamScheduleRequestDTO` { academicClassId: `Long`, timeslotId: `Long`, subjectId: `Long`, examDate: `LocalDate`, duration: `Integer`, maxMarks: `Integer`, passingMarks: `Integer`, maxStudentsPerSeat: `Integer` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/examination/schedules/{scheduleId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/examination/schedules/{scheduleId}
**Description:** Delete a schedule entry. DELETE /api/v1/examination/schedules/{scheduleId}

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: ExamScheduleController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `scheduleId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/schedules/{scheduleId}
**Method:** GET
**Endpoint:** /api/v1/auth/examination/schedules/{scheduleId}
**Description:** Get a specific schedule entry by its ID. GET /api/v1/examination/schedules/{scheduleId}

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessExamUuid(#examUuid)
- `Class Context`: ExamScheduleController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `scheduleId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/examination/schedules/{scheduleId}
**Method:** PUT
**Endpoint:** /api/v1/auth/examination/schedules/{scheduleId}
**Description:** Update a specific schedule entry. PUT /api/v1/examination/schedules/{scheduleId}

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessSchedule(#scheduleId)
- `Class Context`: ExamScheduleController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `scheduleId` (Path Variable)
**body ->**
```json
{
  "academicClassId": 0,
  "timeslotId": 0,
  "subjectId": 0,
  "examDate": "2026-05-20",
  "duration": 0,
  "maxMarks": 0,
  "passingMarks": 0,
  "maxStudentsPerSeat": 0
}
```
**Request DTO ->** `ExamScheduleRequestDTO` { academicClassId: `Long`, timeslotId: `Long`, subjectId: `Long`, examDate: `LocalDate`, duration: `Integer`, maxMarks: `Integer`, passingMarks: `Integer`, maxStudentsPerSeat: `Integer` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/schedules/{scheduleId}/evaluation-structure
**Method:** GET
**Endpoint:** /api/v1/auth/examination/schedules/{scheduleId}/evaluation-structure
**Description:** REST endpoint to support EM workflow operations in ExamScheduleController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessSchedule(#scheduleId)
- `Class Context`: ExamScheduleController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `scheduleId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/examination/templates/api/v1/auth/examination/templates
**Method:** ALL
**Endpoint:** /api/v1/auth/examination/templates/api/v1/auth/examination/templates
**Description:** REST endpoint to support EM workflow operations in ExamTemplateController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: ExamTemplateController
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

### DELETE /api/v1/auth/examination/templates/{templateId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/examination/templates/{templateId}
**Description:** REST endpoint to support EM workflow operations in ExamTemplateController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: ExamTemplateController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `templateId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### GET /api/v1/auth/examination/templates/{templateId}
**Method:** GET
**Endpoint:** /api/v1/auth/examination/templates/{templateId}
**Description:** REST endpoint to support EM workflow operations in ExamTemplateController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: ExamTemplateController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `templateId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `ExamTemplateResponseDTO` { id: `UUID`, name: `String`, totalMarks: `Integer`, totalQuestions: `Integer`, inUse: `boolean`, createdAt: `LocalDateTime`, sections: `List<TemplateSectionResponseDTO>` }

---

### PUT /api/v1/auth/examination/templates/{templateId}
**Method:** PUT
**Endpoint:** /api/v1/auth/examination/templates/{templateId}
**Description:** REST endpoint to support EM workflow operations in ExamTemplateController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: ExamTemplateController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `templateId` (Path Variable)
**body ->**
```json
{
  "name": "string",
  "sections": [
    {
      "sectionName": "string",
      "sectionOrder": 0,
      "questionCount": 0,
      "totalQuestions": 0,
      "attemptQuestions": 0,
      "sectionType": "TemplateSectionType",
      "internalChoiceEnabled": true,
      "marksPerQuestion": 0,
      "questions": [
        {
          "questionNo": 0,
          "marks": 0,
          "type": "TemplateQuestionType",
          "options": [
            "string"
          ]
        }
      ],
      "isObjective": true,
      "isSubjective": true
    }
  ]
}
```
**Request DTO ->** `ExamTemplateRequestDTO` { name: `String`, sections: `List<TemplateSectionRequestDTO>` }
**Response DTO ->** `ResponseEntity` wrapping `ExamTemplateResponseDTO` { id: `UUID`, name: `String`, totalMarks: `Integer`, totalQuestions: `Integer`, inUse: `boolean`, createdAt: `LocalDateTime`, sections: `List<TemplateSectionResponseDTO>` }

---

### GET /api/v1/auth/examination/templates/{templateId}/preview
**Method:** GET
**Endpoint:** /api/v1/auth/examination/templates/{templateId}/preview
**Description:** REST endpoint to support EM workflow operations in ExamTemplateController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: ExamTemplateController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `templateId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `EvaluationStructureResponseDTO` { sections: `List<EvaluationSectionDTO>`, name: `String`, totalQuestions: `Integer`, attemptQuestions: `Integer`, sectionType: `TemplateSectionType`, helperText: `String`, questions: `List<EvaluationQuestionDTO>`, qNo: `Integer`, maxMarks: `Integer`, type: `TemplateQuestionType`, options: `List<String>` }

---

### ALL /api/v1/auth/examination/api/v1/auth/examination
**Method:** ALL
**Endpoint:** /api/v1/auth/examination/api/v1/auth/examination
**Description:** REST endpoint to support EM workflow operations in GradeScaleController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GradeScaleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/examination/grade-scales/{scaleId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/examination/grade-scales/{scaleId}
**Description:** Delete a specific scale rule. DELETE /api/v1/examination/grade-scales/{scaleId}

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GradeScaleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `scaleId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/grade-scales/{scaleId}
**Method:** GET
**Endpoint:** /api/v1/auth/examination/grade-scales/{scaleId}
**Description:** Get a specific scale by its ID. GET /api/v1/examination/grade-scales/{scaleId}

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GradeScaleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `scaleId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/examination/grade-scales/{scaleId}
**Method:** PUT
**Endpoint:** /api/v1/auth/examination/grade-scales/{scaleId}
**Description:** Update a specific scale rule. PUT /api/v1/examination/grade-scales/{scaleId}

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GradeScaleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `scaleId` (Path Variable)
**body ->**
```json
{
  "gradeName": "string",
  "minPercentage": 0,
  "maxPercentage": 0,
  "gradePoints": 0
}
```
**Request DTO ->** `GradeScaleRequestDTO` { gradeName: `String`, minPercentage: `BigDecimal`, maxPercentage: `BigDecimal`, gradePoints: `BigDecimal` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/grade-systems/{systemUuid}/scales
**Method:** GET
**Endpoint:** /api/v1/auth/examination/grade-systems/{systemUuid}/scales
**Description:** Get all scales for a specific Grade System. GET /api/v1/examination/grade-systems/{systemUuid}/scales

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GradeScaleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `systemUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/examination/grade-systems/{systemUuid}/scales
**Method:** POST
**Endpoint:** /api/v1/auth/examination/grade-systems/{systemUuid}/scales
**Description:** Add a new scale rule to a specific Grade System. POST /api/v1/examination/grade-systems/{systemUuid}/scales

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: GradeScaleController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `systemUuid` (Path Variable)
**body ->**
```json
{
  "gradeName": "string",
  "minPercentage": 0,
  "maxPercentage": 0,
  "gradePoints": 0
}
```
**Request DTO ->** `GradeScaleRequestDTO` { gradeName: `String`, minPercentage: `BigDecimal`, maxPercentage: `BigDecimal`, gradePoints: `BigDecimal` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/examination/grade-systems/api/v1/auth/examination/grade-systems
**Method:** ALL
**Endpoint:** /api/v1/auth/examination/grade-systems/api/v1/auth/examination/grade-systems
**Description:** REST endpoint to support EM workflow operations in GradeSystemController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GradeSystemController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/examination/grade-systems/{uuid}
**Method:** DELETE
**Endpoint:** /api/v1/auth/examination/grade-systems/{uuid}
**Description:** REST endpoint to support EM workflow operations in GradeSystemController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GradeSystemController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/grade-systems/{uuid}
**Method:** GET
**Endpoint:** /api/v1/auth/examination/grade-systems/{uuid}
**Description:** REST endpoint to support EM workflow operations in GradeSystemController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GradeSystemController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/examination/grade-systems/{uuid}
**Method:** PUT
**Endpoint:** /api/v1/auth/examination/grade-systems/{uuid}
**Description:** REST endpoint to support EM workflow operations in GradeSystemController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GradeSystemController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
```json
{
  "systemName": "string",
  "description": "string",
  "isActive": true,
  "gradeScales": [
    {
      "gradeName": "string",
      "minPercentage": 0,
      "maxPercentage": 0,
      "gradePoints": 0
    }
  ]
}
```
**Request DTO ->** `GradeSystemRequestDTO` { systemName: `String`, description: `String`, isActive: `Boolean`, gradeScales: `Set<GradeScaleRequestDTO>` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/examination/invigilations/api/v1/auth/examination/invigilations
**Method:** ALL
**Endpoint:** /api/v1/auth/examination/invigilations/api/v1/auth/examination/invigilations
**Description:** REST endpoint to support EM workflow operations in InvigilationController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: InvigilationController
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

### POST /api/v1/auth/examination/invigilations/bulk-assign-pool
**Method:** POST
**Endpoint:** /api/v1/auth/examination/invigilations/bulk-assign-pool
**Description:** REST endpoint to support EM workflow operations in InvigilationController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessSchedule(#dto.examScheduleId)
- `Class Context`: InvigilationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** `com`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/invigilations/exam/{examScheduleId}
**Method:** GET
**Endpoint:** /api/v1/auth/examination/invigilations/exam/{examScheduleId}
**Description:** REST endpoint to support EM workflow operations in InvigilationController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessExamUuid(#dto.examUuid)
- `Class Context`: InvigilationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `examScheduleId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/invigilations/staff/{staffId}
**Method:** GET
**Endpoint:** /api/v1/auth/examination/invigilations/staff/{staffId}
**Description:** REST endpoint to support EM workflow operations in InvigilationController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessSchedule(#examScheduleId)
- `Class Context`: InvigilationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `staffId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/examination/invigilations/{id}
**Method:** DELETE
**Endpoint:** /api/v1/auth/examination/invigilations/{id}
**Description:** REST endpoint to support EM workflow operations in InvigilationController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: InvigilationController
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

### ALL /api/v1/auth/examination/api/v1/auth/examination
**Method:** ALL
**Endpoint:** /api/v1/auth/examination/api/v1/auth/examination
**Description:** REST endpoint to support EM workflow operations in PaperQuestionMapController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PaperQuestionMapController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/examination/paper-mappings/{mappingId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/examination/paper-mappings/{mappingId}
**Description:** Remove a question from a paper. DELETE /api/v1/examination/paper-mappings/{mappingId}

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PaperQuestionMapController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `mappingId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/examination/paper-mappings/{mappingId}
**Method:** PUT
**Endpoint:** /api/v1/auth/examination/paper-mappings/{mappingId}
**Description:** Update details of a specific mapping (e.g., change its number or marks). PUT /api/v1/examination/paper-mappings/{mappingId}

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PaperQuestionMapController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `mappingId` (Path Variable)
**body ->**
```json
{
  "questionUuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "questionNumber": "string",
  "marksForQuestion": 0
}
```
**Request DTO ->** `PaperQuestionMapRequestDTO` { questionUuid: `UUID`, questionNumber: `String`, marksForQuestion: `BigDecimal` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/examination/papers/{paperId}/questions
**Method:** POST
**Endpoint:** /api/v1/auth/examination/papers/{paperId}/questions
**Description:** Add a new question to an existing paper. POST /api/v1/examination/papers/{paperId}/questions

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: PaperQuestionMapController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `paperId` (Path Variable)
**body ->**
```json
{
  "questionUuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "questionNumber": "string",
  "marksForQuestion": 0
}
```
**Request DTO ->** `PaperQuestionMapRequestDTO` { questionUuid: `UUID`, questionNumber: `String`, marksForQuestion: `BigDecimal` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/examination/past-papers
**Method:** POST
**Endpoint:** /api/v1/auth/examination/past-papers
**Description:** Upload a new past paper. Expects multipart/form-data with 'metadata' (JSON) and 'file' (binary).

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PastPaperController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/examination/past-papers/api/v1/auth/examination/past-papers
**Method:** ALL
**Endpoint:** /api/v1/auth/examination/past-papers/api/v1/auth/examination/past-papers
**Description:** REST endpoint to support EM workflow operations in PastPaperController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PastPaperController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/examination/past-papers/{uuid}
**Method:** DELETE
**Endpoint:** /api/v1/auth/examination/past-papers/{uuid}
**Description:** REST endpoint to support EM workflow operations in PastPaperController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('STUDENT','TEACHER','ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: PastPaperController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/past-papers/{uuid}
**Method:** GET
**Endpoint:** /api/v1/auth/examination/past-papers/{uuid}
**Description:** REST endpoint to support EM workflow operations in PastPaperController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('STUDENT','TEACHER','ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: PastPaperController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/examination/questions/api/v1/auth/examination/questions
**Method:** ALL
**Endpoint:** /api/v1/auth/examination/questions/api/v1/auth/examination/questions
**Description:** REST endpoint to support EM workflow operations in QuestionBankController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: QuestionBankController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/examination/questions/{uuid}
**Method:** DELETE
**Endpoint:** /api/v1/auth/examination/questions/{uuid}
**Description:** REST endpoint to support EM workflow operations in QuestionBankController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: QuestionBankController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/questions/{uuid}
**Method:** GET
**Endpoint:** /api/v1/auth/examination/questions/{uuid}
**Description:** REST endpoint to support EM workflow operations in QuestionBankController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: QuestionBankController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/examination/questions/{uuid}
**Method:** PUT
**Endpoint:** /api/v1/auth/examination/questions/{uuid}
**Description:** REST endpoint to support EM workflow operations in QuestionBankController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: QuestionBankController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
```json
{
  "subjectId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "classId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "topic": "string",
  "questionType": "QuestionType",
  "difficultyLevel": "DifficultyLevel",
  "questionText": "string",
  "optionA": "string",
  "optionB": "string",
  "optionC": "string",
  "optionD": "string",
  "correctAnswer": "string",
  "marks": 0
}
```
**Request DTO ->** `QuestionBankRequestDTO` { subjectId: `UUID`, classId: `UUID`, topic: `String`, questionType: `QuestionType`, difficultyLevel: `DifficultyLevel`, questionText: `String`, optionA: `String`, optionB: `String`, optionC: `String`, optionD: `String`, correctAnswer: `String`, marks: `BigDecimal` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/examination/papers/api/v1/auth/examination/papers
**Method:** ALL
**Endpoint:** /api/v1/auth/examination/papers/api/v1/auth/examination/papers
**Description:** REST endpoint to support EM workflow operations in QuestionPaperController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: QuestionPaperController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/papers/by-schedule/{scheduleId}
**Method:** GET
**Endpoint:** /api/v1/auth/examination/papers/by-schedule/{scheduleId}
**Description:** REST endpoint to support EM workflow operations in QuestionPaperController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: QuestionPaperController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `scheduleId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/examination/papers/generate
**Method:** POST
**Endpoint:** /api/v1/auth/examination/papers/generate
**Description:** REST endpoint to support EM workflow operations in QuestionPaperController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: QuestionPaperController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "scheduleId": 0,
  "paperName": "string",
  "totalMarks": 0,
  "durationMinutes": 0,
  "instructions": "string",
  "questionMappings": [
    {
      "questionUuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "questionNumber": "string",
      "marksForQuestion": 0
    }
  ]
}
```
**Request DTO ->** `QuestionPaperRequestDTO` { scheduleId: `Long`, paperName: `String`, totalMarks: `BigDecimal`, durationMinutes: `Integer`, instructions: `String`, questionMappings: `Set<PaperQuestionMapRequestDTO>` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/examination/papers/{uuid}
**Method:** DELETE
**Endpoint:** /api/v1/auth/examination/papers/{uuid}
**Description:** REST endpoint to support EM workflow operations in QuestionPaperController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: QuestionPaperController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/papers/{uuid}
**Method:** GET
**Endpoint:** /api/v1/auth/examination/papers/{uuid}
**Description:** REST endpoint to support EM workflow operations in QuestionPaperController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: QuestionPaperController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/admin/examination/seat-allocation/api/v1/admin/examination/seat-allocation
**Method:** ALL
**Endpoint:** /api/v1/admin/examination/seat-allocation/api/v1/admin/examination/seat-allocation
**Description:** REST endpoint to support EM workflow operations in SeatAllocationAdminController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: SeatAllocationAdminController
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

### POST /api/v1/auth/examination/seat-allocation/allocate
**Method:** POST
**Endpoint:** /api/v1/auth/examination/seat-allocation/allocate
**Description:** REST endpoint to support EM workflow operations in SeatAllocationController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessSchedule(#examScheduleId)
- `Class Context`: SeatAllocationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "examScheduleId": 0,
  "studentId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "roomId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "seatId": 0
}
```
**Request DTO ->** `SingleSeatAllocationRequestDTO` { examScheduleId: `Long`, studentId: `UUID`, roomId: `UUID`, seatId: `Long` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/examination/seat-allocation/api/v1/auth/examination/seat-allocation
**Method:** ALL
**Endpoint:** /api/v1/auth/examination/seat-allocation/api/v1/auth/examination/seat-allocation
**Description:** REST endpoint to support EM workflow operations in SeatAllocationController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: SeatAllocationController
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

### POST /api/v1/auth/examination/seat-allocation/auto-allocate
**Method:** POST
**Endpoint:** /api/v1/auth/examination/seat-allocation/auto-allocate
**Description:** REST endpoint to support EM workflow operations in SeatAllocationController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessSchedule(#dto.examScheduleId)
- `Class Context`: SeatAllocationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "examScheduleId": 0,
  "roomId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```
**Request DTO ->** `BulkSeatAllocationRequestDTO` { examScheduleId: `Long`, roomId: `UUID` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/examination/seat-allocation/bulk
**Method:** DELETE
**Endpoint:** /api/v1/auth/examination/seat-allocation/bulk
**Description:** REST endpoint to support EM workflow operations in SeatAllocationController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessSchedule(#examScheduleId)
- `Class Context`: SeatAllocationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
[
  0
]
```
**Request DTO ->** `List<Long>`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/examination/seat-allocation/exam/{examUuid}
**Method:** DELETE
**Endpoint:** /api/v1/auth/examination/seat-allocation/exam/{examUuid}
**Description:** REST endpoint to support EM workflow operations in SeatAllocationController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessSeatAllocation(#id)
- `Class Context`: SeatAllocationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `examUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/examination/seat-allocation/global-allocate
**Method:** POST
**Endpoint:** /api/v1/auth/examination/seat-allocation/global-allocate
**Description:** REST endpoint to support EM workflow operations in SeatAllocationController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessExamUuid(#examUuid)
- `Class Context`: SeatAllocationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "examUuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "selectedRoomUuids": [
    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  ]
}
```
**Request DTO ->** `GlobalSeatAllocationRequestDTO` { examUuid: `UUID`, selectedRoomUuids: `java.util.List<UUID>` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/seat-allocation/global-capacity-info
**Method:** GET
**Endpoint:** /api/v1/auth/examination/seat-allocation/global-capacity-info
**Description:** REST endpoint to support EM workflow operations in SeatAllocationController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessSchedule(#dto.examScheduleId)
- `Class Context`: SeatAllocationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `examUuid` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/seat-allocation/roll/{rollNo}
**Method:** GET
**Endpoint:** /api/v1/auth/examination/seat-allocation/roll/{rollNo}
**Description:** REST endpoint to support EM workflow operations in SeatAllocationController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessSchedule(#examScheduleId)
- `Class Context`: SeatAllocationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `examScheduleId` (Query Parameter)
- `rollNo` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/seat-allocation/rooms
**Method:** GET
**Endpoint:** /api/v1/auth/examination/seat-allocation/rooms
**Description:** REST endpoint to support EM workflow operations in SeatAllocationController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: SeatAllocationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `examScheduleId` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/examination/seat-allocation/rooms/seats/bulk
**Method:** POST
**Endpoint:** /api/v1/auth/examination/seat-allocation/rooms/seats/bulk
**Description:** REST endpoint to support EM workflow operations in SeatAllocationController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessSchedule(#examScheduleId)
- `Class Context`: SeatAllocationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `examScheduleId` (Query Parameter)
**body ->**
```json
[
  "3fa85f64-5717-4562-b3fc-2c963f66afa6"
]
```
**Request DTO ->** `List<UUID>`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/seat-allocation/rooms/{roomUuid}/seats
**Method:** GET
**Endpoint:** /api/v1/auth/examination/seat-allocation/rooms/{roomUuid}/seats
**Description:** REST endpoint to support EM workflow operations in SeatAllocationController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessSchedule(#examScheduleId)
- `Class Context`: SeatAllocationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `examScheduleId` (Query Parameter)
- `roomUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/examination/seat-allocation/schedule/{examScheduleId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/examination/seat-allocation/schedule/{examScheduleId}
**Description:** REST endpoint to support EM workflow operations in SeatAllocationController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessExamUuid(#examUuid)
- `Class Context`: SeatAllocationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `examScheduleId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/seat-allocation/schedule/{examScheduleId}
**Method:** GET
**Endpoint:** /api/v1/auth/examination/seat-allocation/schedule/{examScheduleId}
**Description:** REST endpoint to support EM workflow operations in SeatAllocationController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessExamUuid(#dto.examUuid)
- `Class Context`: SeatAllocationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `examScheduleId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/examination/seat-allocation/{id}
**Method:** DELETE
**Endpoint:** /api/v1/auth/examination/seat-allocation/{id}
**Description:** REST endpoint to support EM workflow operations in SeatAllocationController.

**Security Requirement:**
- `Authority / Scope`: @examControllerAccess.canAccessSchedule(#examScheduleId)
- `Class Context`: SeatAllocationController
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

### ALL /api/v1/public/examination/seat-allocation/api/v1/public/examination/seat-allocation
**Method:** ALL
**Endpoint:** /api/v1/public/examination/seat-allocation/api/v1/public/examination/seat-allocation
**Description:** REST endpoint to support EM workflow operations in SeatAllocationPublicController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: SeatAllocationPublicController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/public/examination/seat-allocation/global-print/{examUuid}
**Method:** GET
**Endpoint:** /api/v1/public/examination/seat-allocation/global-print/{examUuid}
**Description:** REST endpoint to support EM workflow operations in SeatAllocationPublicController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: SeatAllocationPublicController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `examUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<byte[]>`

---

### GET /api/v1/public/examination/seat-allocation/schedule/{examScheduleId}/print
**Method:** GET
**Endpoint:** /api/v1/public/examination/seat-allocation/schedule/{examScheduleId}/print
**Description:** REST endpoint to support EM workflow operations in SeatAllocationPublicController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: SeatAllocationPublicController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `format` (Query Parameter)
- `examScheduleId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<byte[]>`

---

### ALL /api/v1/auth/examination/sitting-plans/api/v1/auth/examination/sitting-plans
**Method:** ALL
**Endpoint:** /api/v1/auth/examination/sitting-plans/api/v1/auth/examination/sitting-plans
**Description:** REST endpoint to support EM workflow operations in SittingPlanController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: SittingPlanController
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

### POST /api/v1/auth/examination/sitting-plans/auto-allocate
**Method:** POST
**Endpoint:** /api/v1/auth/examination/sitting-plans/auto-allocate
**Description:** REST endpoint to support EM workflow operations in SittingPlanController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: SittingPlanController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "examScheduleId": 0,
  "roomId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "seatPrefix": "string",
  "startNumber": 0
}
```
**Request DTO ->** `AutoAllocationRequestDTO` { examScheduleId: `Long`, roomId: `UUID`, seatPrefix: `String`, startNumber: `Integer` }
**Response DTO ->** `ResponseEntity` wrapping `List<SittingPlanResponseDTO>` { id: `Long`, studentName: `String`, roomName: `String`, seatNumber: `String`, examScheduleId: `Long` }

---

### DELETE /api/v1/auth/examination/sitting-plans/bulk
**Method:** DELETE
**Endpoint:** /api/v1/auth/examination/sitting-plans/bulk
**Description:** REST endpoint to support EM workflow operations in SittingPlanController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: SittingPlanController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
[
  0
]
```
**Request DTO ->** `List<Long>`
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### GET /api/v1/auth/examination/sitting-plans/exam/{examScheduleId}
**Method:** GET
**Endpoint:** /api/v1/auth/examination/sitting-plans/exam/{examScheduleId}
**Description:** REST endpoint to support EM workflow operations in SittingPlanController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: SittingPlanController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `examScheduleId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<SittingPlanResponseDTO>` { id: `Long`, studentName: `String`, roomName: `String`, seatNumber: `String`, examScheduleId: `Long` }

---

### GET /api/v1/auth/examination/sitting-plans/room/{roomId}
**Method:** GET
**Endpoint:** /api/v1/auth/examination/sitting-plans/room/{roomId}
**Description:** REST endpoint to support EM workflow operations in SittingPlanController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: SittingPlanController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `roomId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<SittingPlanResponseDTO>` { id: `Long`, studentName: `String`, roomName: `String`, seatNumber: `String`, examScheduleId: `Long` }

---

### DELETE /api/v1/auth/examination/sitting-plans/{id}
**Method:** DELETE
**Endpoint:** /api/v1/auth/examination/sitting-plans/{id}
**Description:** REST endpoint to support EM workflow operations in SittingPlanController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER')
- `Class Context`: SittingPlanController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### ALL /api/v1/auth/examination/api/v1/auth/examination
**Method:** ALL
**Endpoint:** /api/v1/auth/examination/api/v1/auth/examination
**Description:** REST endpoint to support EM workflow operations in StudentMarkController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentMarkController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/examination/marks/{markUuid}
**Method:** PUT
**Endpoint:** /api/v1/auth/examination/marks/{markUuid}
**Description:** Update a single mark entry by its UUID. Useful for quick corrections without resubmitting the whole list.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentMarkController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `markUuid` (Path Variable)
**body ->**
```json
{
  "studentId": 0,
  "marksObtained": 0,
  "attendanceStatus": "StudentAttendanceStatus",
  "remarks": "string"
}
```
**Request DTO ->** `StudentMarkRequestDTO` { studentId: `Long`, marksObtained: `BigDecimal`, attendanceStatus: `StudentAttendanceStatus`, remarks: `String` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/examination/schedules/{scheduleId}/marks
**Method:** GET
**Endpoint:** /api/v1/auth/examination/schedules/{scheduleId}/marks
**Description:** Get all marks entered for a specific schedule.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentMarkController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `scheduleId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/examination/schedules/{scheduleId}/marks
**Method:** POST
**Endpoint:** /api/v1/auth/examination/schedules/{scheduleId}/marks
**Description:** Bulk record or update marks for a specific exam schedule. Ideal for teachers submitting grades for an entire class.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('ADMIN','SCHOOL_ADMIN','SUPER_ADMIN','EXAM_CONTROLLER','TEACHER')
- `Class Context`: StudentMarkController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `scheduleId` (Path Variable)
**body ->**
```json
{
  "marks": [
    {
      "studentId": 0,
      "marksObtained": 0,
      "attendanceStatus": "StudentAttendanceStatus",
      "remarks": "string"
    }
  ]
}
```
**Request DTO ->** `BulkMarkRequestDTO` { marks: `List<StudentMarkRequestDTO>` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---
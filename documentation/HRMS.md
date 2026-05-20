# HRMS Module API Reference
Contains **192 mapped operational endpoints**.

---

### ALL /api/v1/auth/hrms/calendar/api/v1/auth/hrms/calendar
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/calendar/api/v1/auth/hrms/calendar
**Description:** REST endpoint to support HRMS workflow operations in AcademicCalendarController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AcademicCalendarController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/calendar/events
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/calendar/events
**Description:** REST endpoint to support HRMS workflow operations in AcademicCalendarController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AcademicCalendarController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `academicYear` (Query Parameter)
- `month` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/calendar/events
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/calendar/events
**Description:** REST endpoint to support HRMS workflow operations in AcademicCalendarController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AcademicCalendarController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "academicYear": "string",
  "date": "2026-05-20",
  "dayType": "DayType",
  "150": "="
}
```
**Request DTO ->** `CalendarEventCreateDTO` { academicYear: `String`, date: `LocalDate`, dayType: `DayType`, 150: `=` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/calendar/events/bulk
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/calendar/events/bulk
**Description:** REST endpoint to support HRMS workflow operations in AcademicCalendarController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: AcademicCalendarController
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

### DELETE /api/v1/auth/hrms/calendar/events/{identifier}
**Method:** DELETE
**Endpoint:** /api/v1/auth/hrms/calendar/events/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in AcademicCalendarController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: AcademicCalendarController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/hrms/calendar/events/{identifier}
**Method:** PUT
**Endpoint:** /api/v1/auth/hrms/calendar/events/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in AcademicCalendarController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: AcademicCalendarController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
```json
{
  "academicYear": "string",
  "date": "2026-05-20",
  "dayType": "DayType",
  "150": "="
}
```
**Request DTO ->** `CalendarEventUpdateDTO` { academicYear: `String`, date: `LocalDate`, dayType: `DayType`, 150: `=` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/calendar/summary
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/calendar/summary
**Description:** REST endpoint to support HRMS workflow operations in AcademicCalendarController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: AcademicCalendarController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `academicYear` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/appraisals/api/v1/auth/hrms/appraisals
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/appraisals/api/v1/auth/hrms/appraisals
**Description:** REST endpoint to support HRMS workflow operations in AppraisalController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AppraisalController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/appraisals/cycles
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/appraisals/cycles
**Description:** REST endpoint to support HRMS workflow operations in AppraisalController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: AppraisalController
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

### POST /api/v1/auth/hrms/appraisals/cycles
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/appraisals/cycles
**Description:** REST endpoint to support HRMS workflow operations in AppraisalController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AppraisalController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** `CycleCreateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/appraisals/cycles/{uuid}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/appraisals/cycles/{uuid}
**Description:** REST endpoint to support HRMS workflow operations in AppraisalController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: AppraisalController
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

### GET /api/v1/auth/hrms/appraisals/cycles/{uuid}/goals
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/appraisals/cycles/{uuid}/goals
**Description:** REST endpoint to support HRMS workflow operations in AppraisalController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: AppraisalController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `staffRef` (Query Parameter)
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/appraisals/cycles/{uuid}/goals
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/appraisals/cycles/{uuid}/goals
**Description:** REST endpoint to support HRMS workflow operations in AppraisalController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: AppraisalController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** `GoalCreateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/appraisals/cycles/{uuid}/manager-review
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/appraisals/cycles/{uuid}/manager-review
**Description:** REST endpoint to support HRMS workflow operations in AppraisalController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: AppraisalController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** `ManagerReviewCreateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/appraisals/cycles/{uuid}/self-review
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/appraisals/cycles/{uuid}/self-review
**Description:** REST endpoint to support HRMS workflow operations in AppraisalController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: AppraisalController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** `SelfReviewCreateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PATCH /api/v1/auth/hrms/appraisals/cycles/{uuid}/status
**Method:** PATCH
**Endpoint:** /api/v1/auth/hrms/appraisals/cycles/{uuid}/status
**Description:** REST endpoint to support HRMS workflow operations in AppraisalController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: AppraisalController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `status` (Query Parameter)
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/approval-chains/api/v1/auth/hrms/approval-chains
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/approval-chains/api/v1/auth/hrms/approval-chains
**Description:** REST endpoint to support HRMS workflow operations in ApprovalChainController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ApprovalChainController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/hrms/approval-chains/{uuid}
**Method:** DELETE
**Endpoint:** /api/v1/auth/hrms/approval-chains/{uuid}
**Description:** REST endpoint to support HRMS workflow operations in ApprovalChainController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: ApprovalChainController
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

### PUT /api/v1/auth/hrms/approval-chains/{uuid}
**Method:** PUT
**Endpoint:** /api/v1/auth/hrms/approval-chains/{uuid}
**Description:** REST endpoint to support HRMS workflow operations in ApprovalChainController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: ApprovalChainController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
```json
{
  "chainName": "string",
  "actionType": "ApprovalActionType",
  "steps": [
    {}
  ]
}
```
**Request DTO ->** `ApprovalChainConfigCreateDTO` { chainName: `String`, actionType: `ApprovalActionType`, steps: `List<ApprovalChainStepDTO>` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/approval-requests/api/v1/auth/hrms/approval-requests
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/approval-requests/api/v1/auth/hrms/approval-requests
**Description:** REST endpoint to support HRMS workflow operations in ApprovalRequestController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ApprovalRequestController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/approval-requests/{uuid}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/approval-requests/{uuid}
**Description:** REST endpoint to support HRMS workflow operations in ApprovalRequestController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ApprovalRequestController
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

### POST /api/v1/auth/hrms/approval-requests/{uuid}/approve
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/approval-requests/{uuid}/approve
**Description:** REST endpoint to support HRMS workflow operations in ApprovalRequestController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ApprovalRequestController
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

### POST /api/v1/auth/hrms/approval-requests/{uuid}/reject
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/approval-requests/{uuid}/reject
**Description:** REST endpoint to support HRMS workflow operations in ApprovalRequestController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ApprovalRequestController
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

### ALL /api/v1/auth/hrms/exit/api/v1/auth/hrms/exit
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/exit/api/v1/auth/hrms/exit
**Description:** REST endpoint to support HRMS workflow operations in ExitManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ExitManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/exit/requests
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/exit/requests
**Description:** REST endpoint to support HRMS workflow operations in ExitManagementController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: ExitManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `status` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/exit/requests
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/exit/requests
**Description:** REST endpoint to support HRMS workflow operations in ExitManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ExitManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** `ExitRequestCreateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/exit/requests/{uuid}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/exit/requests/{uuid}
**Description:** REST endpoint to support HRMS workflow operations in ExitManagementController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: ExitManagementController
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

### GET /api/v1/auth/hrms/exit/requests/{uuid}/clearance
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/exit/requests/{uuid}/clearance
**Description:** REST endpoint to support HRMS workflow operations in ExitManagementController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: ExitManagementController
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

### POST /api/v1/auth/hrms/exit/requests/{uuid}/clearance
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/exit/requests/{uuid}/clearance
**Description:** REST endpoint to support HRMS workflow operations in ExitManagementController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: ExitManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** `ClearanceItemCreateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/exit/requests/{uuid}/clearance/{itemId}/complete
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/exit/requests/{uuid}/clearance/{itemId}/complete
**Description:** REST endpoint to support HRMS workflow operations in ExitManagementController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ExitManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `completedByName` (Query Parameter)
- `remarks` (Query Parameter)
- `uuid` (Path Variable)
- `itemId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PATCH /api/v1/auth/hrms/exit/requests/{uuid}/clearance/{itemId}/waive
**Method:** PATCH
**Endpoint:** /api/v1/auth/hrms/exit/requests/{uuid}/clearance/{itemId}/waive
**Description:** REST endpoint to support HRMS workflow operations in ExitManagementController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: ExitManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `uuid` (Path Variable)
- `itemId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/exit/requests/{uuid}/fnf
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/exit/requests/{uuid}/fnf
**Description:** REST endpoint to support HRMS workflow operations in ExitManagementController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: ExitManagementController
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

### POST /api/v1/auth/hrms/exit/requests/{uuid}/fnf
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/exit/requests/{uuid}/fnf
**Description:** REST endpoint to support HRMS workflow operations in ExitManagementController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: ExitManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** `FnFCreateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PATCH /api/v1/auth/hrms/exit/requests/{uuid}/fnf/status
**Method:** PATCH
**Endpoint:** /api/v1/auth/hrms/exit/requests/{uuid}/fnf/status
**Description:** REST endpoint to support HRMS workflow operations in ExitManagementController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ExitManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
```json
"2026-05-20"
```
**Request DTO ->** `FnFStatusUpdateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PATCH /api/v1/auth/hrms/exit/requests/{uuid}/status
**Method:** PATCH
**Endpoint:** /api/v1/auth/hrms/exit/requests/{uuid}/status
**Description:** REST endpoint to support HRMS workflow operations in ExitManagementController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ExitManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
```json
"2026-05-20"
```
**Request DTO ->** `ExitStatusUpdateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/expense-claims/api/v1/auth/hrms/expense-claims
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/expense-claims/api/v1/auth/hrms/expense-claims
**Description:** REST endpoint to support HRMS workflow operations in ExpenseClaimController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ExpenseClaimController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/expense-claims/self/claims
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/expense-claims/self/claims
**Description:** REST endpoint to support HRMS workflow operations in ExpenseClaimController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ExpenseClaimController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `status` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/expense-claims/self/claims
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/expense-claims/self/claims
**Description:** REST endpoint to support HRMS workflow operations in ExpenseClaimController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ExpenseClaimController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** `ClaimCreateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/expense-claims/self/claims/receipt/upload-init
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/expense-claims/self/claims/receipt/upload-init
**Description:** REST endpoint to support HRMS workflow operations in ExpenseClaimController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ExpenseClaimController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** `ReceiptUploadInitRequestDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/expense-claims/self/claims/{uuid}/items
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/expense-claims/self/claims/{uuid}/items
**Description:** REST endpoint to support HRMS workflow operations in ExpenseClaimController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ExpenseClaimController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** `ClaimItemCreateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PATCH /api/v1/auth/hrms/expense-claims/self/claims/{uuid}/submit
**Method:** PATCH
**Endpoint:** /api/v1/auth/hrms/expense-claims/self/claims/{uuid}/submit
**Description:** REST endpoint to support HRMS workflow operations in ExpenseClaimController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ExpenseClaimController
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

### GET /api/v1/auth/hrms/expense-claims/{uuid}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/expense-claims/{uuid}
**Description:** REST endpoint to support HRMS workflow operations in ExpenseClaimController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ExpenseClaimController
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

### POST /api/v1/auth/hrms/expense-claims/{uuid}/items
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/expense-claims/{uuid}/items
**Description:** REST endpoint to support HRMS workflow operations in ExpenseClaimController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: ExpenseClaimController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** `ClaimItemCreateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/hrms/expense-claims/{uuid}/items/{itemId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/hrms/expense-claims/{uuid}/items/{itemId}
**Description:** REST endpoint to support HRMS workflow operations in ExpenseClaimController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ExpenseClaimController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `uuid` (Path Variable)
- `itemId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/hrms/expense-claims/{uuid}/items/{itemId}
**Method:** PUT
**Endpoint:** /api/v1/auth/hrms/expense-claims/{uuid}/items/{itemId}
**Description:** REST endpoint to support HRMS workflow operations in ExpenseClaimController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ExpenseClaimController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
- `itemId` (Path Variable)
**body ->**
```json
"2026-05-20"
```
**Request DTO ->** `ClaimItemUpdateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PATCH /api/v1/auth/hrms/expense-claims/{uuid}/status
**Method:** PATCH
**Endpoint:** /api/v1/auth/hrms/expense-claims/{uuid}/status
**Description:** REST endpoint to support HRMS workflow operations in ExpenseClaimController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: ExpenseClaimController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
```json
"2026-05-20"
```
**Request DTO ->** `ClaimStatusUpdateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/dashboard/api/v1/auth/hrms/dashboard
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/dashboard/api/v1/auth/hrms/dashboard
**Description:** REST endpoint to support HRMS workflow operations in HrmsDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: HrmsDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/dashboard/attendance-heatmap
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/dashboard/attendance-heatmap
**Description:** REST endpoint to support HRMS workflow operations in HrmsDashboardController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: HrmsDashboardController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `year` (Query Parameter)
- `month` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/dashboard/summary
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/dashboard/summary
**Description:** REST endpoint to support HRMS workflow operations in HrmsDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: HrmsDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/leaves/api/v1/auth/hrms/leaves
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/leaves/api/v1/auth/hrms/leaves
**Description:** REST endpoint to support HRMS workflow operations in LeaveManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: LeaveManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/leaves/applications
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/leaves/applications
**Description:** REST endpoint to support HRMS workflow operations in LeaveManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: LeaveManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `staffIdentifier` (Query Parameter)
- `status` (Query Parameter)
- `leaveTypeCode` (Query Parameter)
- `fromDate` (Query Parameter)
- `toDate` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/leaves/applications
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/leaves/applications
**Description:** REST endpoint to support HRMS workflow operations in LeaveManagementController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN','ROLE_PRINCIPAL','ROLE_TEACHER','ROLE_LIBRARIAN')
- `Class Context`: LeaveManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "leaveTypeRef": "string",
  "fromDate": "2026-05-20",
  "toDate": "2026-05-20",
  "isHalfDay": true,
  "halfDayType": "HalfDayType",
  "500": "="
}
```
**Request DTO ->** `LeaveApplicationCreateDTO` { leaveTypeRef: `String`, fromDate: `LocalDate`, toDate: `LocalDate`, isHalfDay: `Boolean`, halfDayType: `HalfDayType`, 500: `=` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/leaves/applications/{identifier}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/leaves/applications/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in LeaveManagementController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: LeaveManagementController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/leaves/applications/{identifier}/approve
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/leaves/applications/{identifier}/approve
**Description:** REST endpoint to support HRMS workflow operations in LeaveManagementController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_PRINCIPAL','ROLE_LIBRARIAN','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: LeaveManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/leaves/applications/{identifier}/cancel
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/leaves/applications/{identifier}/cancel
**Description:** REST endpoint to support HRMS workflow operations in LeaveManagementController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN','ROLE_PRINCIPAL')
- `Class Context`: LeaveManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/leaves/applications/{identifier}/reject
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/leaves/applications/{identifier}/reject
**Description:** REST endpoint to support HRMS workflow operations in LeaveManagementController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN','ROLE_PRINCIPAL')
- `Class Context`: LeaveManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/leaves/balance/all
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/leaves/balance/all
**Description:** REST endpoint to support HRMS workflow operations in LeaveManagementController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN','ROLE_PRINCIPAL')
- `Class Context`: LeaveManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `academicYear` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/leaves/balance/initialize
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/leaves/balance/initialize
**Description:** REST endpoint to support HRMS workflow operations in LeaveManagementController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN','ROLE_PRINCIPAL')
- `Class Context`: LeaveManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "academicYear": "string",
  "carryForwardFromYear": "string"
}
```
**Request DTO ->** `LeaveBalanceInitRequestDTO` { academicYear: `String`, carryForwardFromYear: `String` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/leaves/balance/me
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/leaves/balance/me
**Description:** REST endpoint to support HRMS workflow operations in LeaveManagementController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_PRINCIPAL','ROLE_LIBRARIAN','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: LeaveManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `academicYear` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/leaves/balance/{staffIdentifier}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/leaves/balance/{staffIdentifier}
**Description:** REST endpoint to support HRMS workflow operations in LeaveManagementController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_PRINCIPAL','ROLE_LIBRARIAN','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: LeaveManagementController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `academicYear` (Query Parameter)
- `staffIdentifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/leave-templates/api/v1/auth/hrms/leave-templates
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/leave-templates/api/v1/auth/hrms/leave-templates
**Description:** REST endpoint to support HRMS workflow operations in LeaveTemplateController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: LeaveTemplateController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/leave-templates/staff/{staffRef}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/leave-templates/staff/{staffRef}
**Description:** REST endpoint to support HRMS workflow operations in LeaveTemplateController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('SUPER_ADMIN', 'ADMIN', 'SCHOOL_ADMIN', 'HR_ADMIN')
- `Class Context`: LeaveTemplateController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `staffRef` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/hrms/leave-templates/{ref}
**Method:** DELETE
**Endpoint:** /api/v1/auth/hrms/leave-templates/{ref}
**Description:** REST endpoint to support HRMS workflow operations in LeaveTemplateController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('SUPER_ADMIN', 'ADMIN', 'SCHOOL_ADMIN', 'HR_ADMIN')
- `Class Context`: LeaveTemplateController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `ref` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/leave-templates/{ref}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/leave-templates/{ref}
**Description:** REST endpoint to support HRMS workflow operations in LeaveTemplateController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('SUPER_ADMIN', 'ADMIN', 'SCHOOL_ADMIN', 'HR_ADMIN')
- `Class Context`: LeaveTemplateController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `ref` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/hrms/leave-templates/{ref}
**Method:** PUT
**Endpoint:** /api/v1/auth/hrms/leave-templates/{ref}
**Description:** REST endpoint to support HRMS workflow operations in LeaveTemplateController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('SUPER_ADMIN', 'ADMIN', 'SCHOOL_ADMIN', 'HR_ADMIN')
- `Class Context`: LeaveTemplateController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `ref` (Path Variable)
**body ->**
```json
{
  "150": "="
}
```
**Request DTO ->** `LeaveTemplateUpdateDTO` { 150: `=` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/leave-templates/{ref}/assign
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/leave-templates/{ref}/assign
**Description:** REST endpoint to support HRMS workflow operations in LeaveTemplateController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('SUPER_ADMIN', 'ADMIN', 'SCHOOL_ADMIN', 'HR_ADMIN')
- `Class Context`: LeaveTemplateController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `ref` (Path Variable)
**body ->**
```json
{
  "staffRef": "string",
  "20": "="
}
```
**Request DTO ->** `StaffLeaveTemplateMappingRequestDTO` { staffRef: `String`, 20: `=` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/leave-templates/{ref}/assign-by-designation
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/leave-templates/{ref}/assign-by-designation
**Description:** REST endpoint to support HRMS workflow operations in LeaveTemplateController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('SUPER_ADMIN', 'ADMIN', 'SCHOOL_ADMIN', 'HR_ADMIN')
- `Class Context`: LeaveTemplateController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `ref` (Path Variable)
**body ->**
```json
{
  "designationRef": "string",
  "20": "="
}
```
**Request DTO ->** `BulkAssignByDesignationDTO` { designationRef: `String`, 20: `=` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/leaves/types/api/v1/auth/hrms/leaves/types
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/leaves/types/api/v1/auth/hrms/leaves/types
**Description:** REST endpoint to support HRMS workflow operations in LeaveTypeConfigController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: LeaveTypeConfigController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/hrms/leaves/types/{identifier}
**Method:** DELETE
**Endpoint:** /api/v1/auth/hrms/leaves/types/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in LeaveTypeConfigController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: LeaveTypeConfigController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/leaves/types/{identifier}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/leaves/types/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in LeaveTypeConfigController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN','ROLE_PRINCIPAL','ROLE_TEACHER','ROLE_LIBRARIAN')
- `Class Context`: LeaveTypeConfigController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/hrms/leaves/types/{identifier}
**Method:** PUT
**Endpoint:** /api/v1/auth/hrms/leaves/types/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in LeaveTypeConfigController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: LeaveTypeConfigController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
```json
{
  "20": "="
}
```
**Request DTO ->** `LeaveTypeConfigUpdateDTO` { 20: `=` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/loans/api/v1/auth/hrms/loans
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/loans/api/v1/auth/hrms/loans
**Description:** REST endpoint to support HRMS workflow operations in LoanController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: LoanController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/loans/self
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/loans/self
**Description:** REST endpoint to support HRMS workflow operations in LoanController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: LoanController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `status` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/loans/self
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/loans/self
**Description:** REST endpoint to support HRMS workflow operations in LoanController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: LoanController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** `LoanApplicationDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/loans/summary/self
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/loans/summary/self
**Description:** REST endpoint to support HRMS workflow operations in LoanController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: LoanController
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

### GET /api/v1/auth/hrms/loans/summary/{staffRef}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/loans/summary/{staffRef}
**Description:** REST endpoint to support HRMS workflow operations in LoanController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: LoanController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `staffRef` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/loans/{uuid}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/loans/{uuid}
**Description:** REST endpoint to support HRMS workflow operations in LoanController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: LoanController
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

### GET /api/v1/auth/hrms/loans/{uuid}/document
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/loans/{uuid}/document
**Description:** REST endpoint to support HRMS workflow operations in LoanController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: LoanController
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

### GET /api/v1/auth/hrms/loans/{uuid}/repayments
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/loans/{uuid}/repayments
**Description:** REST endpoint to support HRMS workflow operations in LoanController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: LoanController
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

### POST /api/v1/auth/hrms/loans/{uuid}/repayments/manual
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/loans/{uuid}/repayments/manual
**Description:** REST endpoint to support HRMS workflow operations in LoanController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: LoanController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** `ManualRepaymentDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PATCH /api/v1/auth/hrms/loans/{uuid}/status
**Method:** PATCH
**Endpoint:** /api/v1/auth/hrms/loans/{uuid}/status
**Description:** REST endpoint to support HRMS workflow operations in LoanController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: LoanController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
```json
"2026-05-20"
```
**Request DTO ->** `LoanStatusUpdateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/onboarding/api/v1/auth/hrms/onboarding
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/onboarding/api/v1/auth/hrms/onboarding
**Description:** REST endpoint to support HRMS workflow operations in OnboardingController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: OnboardingController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/onboarding/records
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/onboarding/records
**Description:** REST endpoint to support HRMS workflow operations in OnboardingController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: OnboardingController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `staffRef` (Query Parameter)
- `status` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/onboarding/records
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/onboarding/records
**Description:** --- Record endpoints ---

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: OnboardingController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** `RecordCreateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/onboarding/records/{recordUuid}/tasks/{taskId}/complete
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/onboarding/records/{recordUuid}/tasks/{taskId}/complete
**Description:** REST endpoint to support HRMS workflow operations in OnboardingController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: OnboardingController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `recordUuid` (Path Variable)
- `taskId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/onboarding/records/{uuid}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/onboarding/records/{uuid}
**Description:** REST endpoint to support HRMS workflow operations in OnboardingController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: OnboardingController
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

### GET /api/v1/auth/hrms/onboarding/staff/{staffRef}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/onboarding/staff/{staffRef}
**Description:** REST endpoint to support HRMS workflow operations in OnboardingController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: OnboardingController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `staffRef` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/onboarding/templates
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/onboarding/templates
**Description:** REST endpoint to support HRMS workflow operations in OnboardingController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: OnboardingController
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

### POST /api/v1/auth/hrms/onboarding/templates
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/onboarding/templates
**Description:** --- Template endpoints ---

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: OnboardingController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** `TemplateCreateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/hrms/onboarding/templates/{uuid}
**Method:** DELETE
**Endpoint:** /api/v1/auth/hrms/onboarding/templates/{uuid}
**Description:** REST endpoint to support HRMS workflow operations in OnboardingController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: OnboardingController
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

### PUT /api/v1/auth/hrms/onboarding/templates/{uuid}
**Method:** PUT
**Endpoint:** /api/v1/auth/hrms/onboarding/templates/{uuid}
**Description:** REST endpoint to support HRMS workflow operations in OnboardingController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: OnboardingController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** `TemplateCreateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/api/v1/auth/hrms
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/api/v1/auth/hrms
**Description:** REST endpoint to support HRMS workflow operations in OvertimeCompOffController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: OvertimeCompOffController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/comp-off
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/comp-off
**Description:** Comp-Off

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: OvertimeCompOffController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** `CompOffCreateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/comp-off/self
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/comp-off/self
**Description:** REST endpoint to support HRMS workflow operations in OvertimeCompOffController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: OvertimeCompOffController
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

### GET /api/v1/auth/hrms/comp-off/summary/self
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/comp-off/summary/self
**Description:** REST endpoint to support HRMS workflow operations in OvertimeCompOffController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: OvertimeCompOffController
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

### GET /api/v1/auth/hrms/comp-off/summary/{staffRef}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/comp-off/summary/{staffRef}
**Description:** REST endpoint to support HRMS workflow operations in OvertimeCompOffController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: OvertimeCompOffController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `staffRef` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/comp-off/{staffRef}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/comp-off/{staffRef}
**Description:** REST endpoint to support HRMS workflow operations in OvertimeCompOffController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: OvertimeCompOffController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `staffRef` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/comp-off/{uuid}/credit
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/comp-off/{uuid}/credit
**Description:** REST endpoint to support HRMS workflow operations in OvertimeCompOffController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: OvertimeCompOffController
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

### GET /api/v1/auth/hrms/overtime
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/overtime
**Description:** REST endpoint to support HRMS workflow operations in OvertimeCompOffController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: OvertimeCompOffController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `staffRef` (Query Parameter)
- `status` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/overtime
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/overtime
**Description:** Overtime

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: OvertimeCompOffController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
"2026-05-20"
```
**Request DTO ->** `OvertimeCreateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/overtime/self
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/overtime/self
**Description:** REST endpoint to support HRMS workflow operations in OvertimeCompOffController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: OvertimeCompOffController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `status` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/overtime/self
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/overtime/self
**Description:** REST endpoint to support HRMS workflow operations in OvertimeCompOffController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: OvertimeCompOffController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
"2026-05-20"
```
**Request DTO ->** `OvertimeCreateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/overtime/{uuid}/approve
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/overtime/{uuid}/approve
**Description:** REST endpoint to support HRMS workflow operations in OvertimeCompOffController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: OvertimeCompOffController
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

### POST /api/v1/auth/hrms/overtime/{uuid}/reject
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/overtime/{uuid}/reject
**Description:** REST endpoint to support HRMS workflow operations in OvertimeCompOffController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: OvertimeCompOffController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `remarks` (Query Parameter)
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/payroll/runs/api/v1/auth/hrms/payroll/runs
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/payroll/runs/api/v1/auth/hrms/payroll/runs
**Description:** REST endpoint to support HRMS workflow operations in PayrollController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PayrollController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/payroll/runs/{identifier}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/payroll/runs/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in PayrollController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: PayrollController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/payroll/runs/{identifier}/approve
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/payroll/runs/{identifier}/approve
**Description:** REST endpoint to support HRMS workflow operations in PayrollController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: PayrollController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/payroll/runs/{identifier}/disburse
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/payroll/runs/{identifier}/disburse
**Description:** REST endpoint to support HRMS workflow operations in PayrollController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: PayrollController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/payroll/api/v1/auth/hrms/payroll
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/payroll/api/v1/auth/hrms/payroll
**Description:** REST endpoint to support HRMS workflow operations in PayrollPayslipController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PayrollPayslipController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/payroll/payslips/{identifier}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/payroll/payslips/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in PayrollPayslipController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: PayrollPayslipController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/payroll/payslips/{identifier}/pdf
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/payroll/payslips/{identifier}/pdf
**Description:** REST endpoint to support HRMS workflow operations in PayrollPayslipController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: PayrollPayslipController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/payroll/preflight
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/payroll/preflight
**Description:** REST endpoint to support HRMS workflow operations in PayrollPayslipController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_PRINCIPAL','ROLE_LIBRARIAN','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: PayrollPayslipController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `year` (Query Parameter)
- `month` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/payroll/preflight/mark-absent
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/payroll/preflight/mark-absent
**Description:** REST endpoint to support HRMS workflow operations in PayrollPayslipController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: PayrollPayslipController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `year` (Query Parameter)
- `month` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/payroll/preflight/mark-present
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/payroll/preflight/mark-present
**Description:** REST endpoint to support HRMS workflow operations in PayrollPayslipController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: PayrollPayslipController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `year` (Query Parameter)
- `month` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/payroll/runs/{identifier}/bank-advice
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/payroll/runs/{identifier}/bank-advice
**Description:** ── Bank Salary Advice ────────────────────────────────────────────────────

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: PayrollPayslipController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/payroll/runs/{identifier}/bank-advice/data
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/payroll/runs/{identifier}/bank-advice/data
**Description:** REST endpoint to support HRMS workflow operations in PayrollPayslipController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: PayrollPayslipController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/payroll/runs/{identifier}/payslips
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/payroll/runs/{identifier}/payslips
**Description:** REST endpoint to support HRMS workflow operations in PayrollPayslipController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PayrollPayslipController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/hrms/payroll/runs/{identifier}/void
**Method:** DELETE
**Endpoint:** /api/v1/auth/hrms/payroll/runs/{identifier}/void
**Description:** REST endpoint to support HRMS workflow operations in PayrollPayslipController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: PayrollPayslipController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/payroll/self/attendance
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/payroll/self/attendance
**Description:** REST endpoint to support HRMS workflow operations in PayrollPayslipController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_PRINCIPAL','ROLE_LIBRARIAN','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: PayrollPayslipController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `year` (Query Parameter)
- `month` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/payroll/self/payslips
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/payroll/self/payslips
**Description:** REST endpoint to support HRMS workflow operations in PayrollPayslipController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: PayrollPayslipController
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

### GET /api/v1/auth/hrms/payroll/self/payslips/{identifier}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/payroll/self/payslips/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in PayrollPayslipController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_PRINCIPAL','ROLE_LIBRARIAN','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: PayrollPayslipController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/payroll/self/payslips/{identifier}/pdf
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/payroll/self/payslips/{identifier}/pdf
**Description:** REST endpoint to support HRMS workflow operations in PayrollPayslipController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_TEACHER','ROLE_PRINCIPAL','ROLE_LIBRARIAN','ROLE_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_SUPER_ADMIN')
- `Class Context`: PayrollPayslipController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/payroll/staff/{staffIdentifier}/payslips
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/payroll/staff/{staffIdentifier}/payslips
**Description:** REST endpoint to support HRMS workflow operations in PayrollPayslipController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: PayrollPayslipController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `staffIdentifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/promotions/api/v1/auth/hrms/promotions
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/promotions/api/v1/auth/hrms/promotions
**Description:** REST endpoint to support HRMS workflow operations in PromotionController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PromotionController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/promotions/staff/{staffRef}/history
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/promotions/staff/{staffRef}/history
**Description:** REST endpoint to support HRMS workflow operations in PromotionController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PromotionController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `staffRef` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/promotions/{ref}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/promotions/{ref}
**Description:** REST endpoint to support HRMS workflow operations in PromotionController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('SUPER_ADMIN', 'ADMIN')
- `Class Context`: PromotionController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `ref` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/promotions/{ref}/approve
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/promotions/{ref}/approve
**Description:** REST endpoint to support HRMS workflow operations in PromotionController.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('SUPER_ADMIN', 'ADMIN')
- `Class Context`: PromotionController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `ref` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/promotions/{ref}/reject
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/promotions/{ref}/reject
**Description:** REST endpoint to support HRMS workflow operations in PromotionController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PromotionController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `ref` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/salary/components/api/v1/auth/hrms/salary/components
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/salary/components/api/v1/auth/hrms/salary/components
**Description:** REST endpoint to support HRMS workflow operations in SalaryComponentController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: SalaryComponentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/hrms/salary/components/{identifier}
**Method:** DELETE
**Endpoint:** /api/v1/auth/hrms/salary/components/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in SalaryComponentController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: SalaryComponentController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/hrms/salary/components/{identifier}
**Method:** PUT
**Endpoint:** /api/v1/auth/hrms/salary/components/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in SalaryComponentController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: SalaryComponentController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
```json
{
  "40": "="
}
```
**Request DTO ->** `SalaryComponentUpdateDTO` { 40: `=` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/salary/templates/api/v1/auth/hrms/salary/templates
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/salary/templates/api/v1/auth/hrms/salary/templates
**Description:** REST endpoint to support HRMS workflow operations in SalaryTemplateController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: SalaryTemplateController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/hrms/salary/templates/{identifier}
**Method:** DELETE
**Endpoint:** /api/v1/auth/hrms/salary/templates/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in SalaryTemplateController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: SalaryTemplateController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/salary/templates/{identifier}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/salary/templates/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in SalaryTemplateController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: SalaryTemplateController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/hrms/salary/templates/{identifier}
**Method:** PUT
**Endpoint:** /api/v1/auth/hrms/salary/templates/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in SalaryTemplateController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: SalaryTemplateController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
```json
{
  "150": "="
}
```
**Request DTO ->** `SalaryTemplateUpdateDTO` { 150: `=` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/staff/{staffRef}/360-profile/api/v1/auth/hrms/staff/{staffRef}/360-profile
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/staff/{staffRef}/360-profile/api/v1/auth/hrms/staff/{staffRef}/360-profile
**Description:** REST endpoint to support HRMS workflow operations in Staff360Controller.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: Staff360Controller
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/bank-details/api/v1/auth/hrms/bank-details
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/bank-details/api/v1/auth/hrms/bank-details
**Description:** REST endpoint to support HRMS workflow operations in StaffBankDetailsController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffBankDetailsController
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

### POST /api/v1/auth/hrms/bank-details/bulk-import
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/bank-details/bulk-import
**Description:** REST endpoint to support HRMS workflow operations in StaffBankDetailsController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffBankDetailsController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `file` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/bank-details/missing
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/bank-details/missing
**Description:** REST endpoint to support HRMS workflow operations in StaffBankDetailsController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffBankDetailsController
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

### GET /api/v1/auth/hrms/bank-details/template
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/bank-details/template
**Description:** REST endpoint to support HRMS workflow operations in StaffBankDetailsController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffBankDetailsController
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

### GET /api/v1/auth/hrms/bank-details/{staffRef}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/bank-details/{staffRef}
**Description:** REST endpoint to support HRMS workflow operations in StaffBankDetailsController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffBankDetailsController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `staffRef` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/hrms/bank-details/{staffRef}
**Method:** PUT
**Endpoint:** /api/v1/auth/hrms/bank-details/{staffRef}
**Description:** REST endpoint to support HRMS workflow operations in StaffBankDetailsController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffBankDetailsController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `staffRef` (Path Variable)
**body ->**
```json
{
  "required\"": "is"
}
```
**Request DTO ->** `BankDetailsUpdateDTO` { required": `is` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/hrms/bank-details/{staffRef}/bank
**Method:** DELETE
**Endpoint:** /api/v1/auth/hrms/bank-details/{staffRef}/bank
**Description:** REST endpoint to support HRMS workflow operations in StaffBankDetailsController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffBankDetailsController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `staffRef` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/designations/api/v1/auth/hrms/designations
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/designations/api/v1/auth/hrms/designations
**Description:** REST endpoint to support HRMS workflow operations in StaffDesignationController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffDesignationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/designations/unassign-staff
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/designations/unassign-staff
**Description:** REST endpoint to support HRMS workflow operations in StaffDesignationController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffDesignationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "empty\"": "be"
}
```
**Request DTO ->** `BulkDesignationAssignRequestDTO` { empty": `be` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/hrms/designations/{identifier}
**Method:** DELETE
**Endpoint:** /api/v1/auth/hrms/designations/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in StaffDesignationController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffDesignationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/designations/{identifier}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/designations/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in StaffDesignationController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffDesignationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/hrms/designations/{identifier}
**Method:** PUT
**Endpoint:** /api/v1/auth/hrms/designations/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in StaffDesignationController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffDesignationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
```json
{
  "20": "="
}
```
**Request DTO ->** `StaffDesignationCreateUpdateDTO` { 20: `=` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/designations/{identifier}/assign-staff
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/designations/{identifier}/assign-staff
**Description:** POST /{identifier}/assign-staff Bulk-assigns a list of staff members to this designation. Each entry in {@code staffRefs} may be a staff UUID or employeeId. Processing is resilient — one bad ref will not abort the rest. <pre> { "staffRefs": ["EMP001", "EMP002", "550e8400-e29b-41d4-a716-446655440000"] } </pre>

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffDesignationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/staff/{staffRef}/documents/api/v1/auth/hrms/staff/{staffRef}/documents
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/staff/{staffRef}/documents/api/v1/auth/hrms/staff/{staffRef}/documents
**Description:** REST endpoint to support HRMS workflow operations in StaffDocumentController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffDocumentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/staff/{staffRef}/documents/confirm-upload
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/staff/{staffRef}/documents/confirm-upload
**Description:** REST endpoint to support HRMS workflow operations in StaffDocumentController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffDocumentController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `staffRef` (Path Variable)
**body ->**
```json
{
  "objectKey": "string",
  "storageUrl": "string",
  "contentType": "string",
  "sizeBytes": 0,
  "category": "DocumentCategory",
  "displayName": "string",
  "originalFileName": "string",
  "expiryDate": "2026-05-20"
}
```
**Request DTO ->** `DocumentUploadConfirmRequestDTO` { objectKey: `String`, storageUrl: `String`, contentType: `String`, sizeBytes: `Long`, category: `DocumentCategory`, displayName: `String`, originalFileName: `String`, expiryDate: `LocalDate` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/staff/{staffRef}/documents/upload-url
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/staff/{staffRef}/documents/upload-url
**Description:** REST endpoint to support HRMS workflow operations in StaffDocumentController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffDocumentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `staffRef` (Path Variable)
**body ->**
```json
{
  "fileName": "string",
  "contentType": "string",
  "sizeBytes": 0,
  "category": "DocumentCategory",
  "displayName": "string",
  "expiryDate": "2026-05-20"
}
```
**Request DTO ->** `DocumentUploadInitRequestDTO` { fileName: `String`, contentType: `String`, sizeBytes: `long`, category: `DocumentCategory`, displayName: `String`, expiryDate: `LocalDate` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/hrms/staff/{staffRef}/documents/{docUuid}
**Method:** DELETE
**Endpoint:** /api/v1/auth/hrms/staff/{staffRef}/documents/{docUuid}
**Description:** REST endpoint to support HRMS workflow operations in StaffDocumentController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffDocumentController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `staffRef` (Path Variable)
- `docUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/staff/{staffRef}/documents/{docUuid}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/staff/{staffRef}/documents/{docUuid}
**Description:** REST endpoint to support HRMS workflow operations in StaffDocumentController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffDocumentController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `staffRef` (Path Variable)
- `docUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/grades/api/v1/auth/hrms/grades
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/grades/api/v1/auth/hrms/grades
**Description:** REST endpoint to support HRMS workflow operations in StaffGradeAssignmentController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffGradeAssignmentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/grades/assign
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/grades/assign
**Description:** REST endpoint to support HRMS workflow operations in StaffGradeAssignmentController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffGradeAssignmentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "staffRef": "string",
  "gradeRef": "string",
  "effectiveFrom": "2026-05-20",
  "120": "="
}
```
**Request DTO ->** `StaffGradeAssignmentCreateDTO` { staffRef: `String`, gradeRef: `String`, effectiveFrom: `LocalDate`, 120: `=` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/grades/assignments
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/grades/assignments
**Description:** REST endpoint to support HRMS workflow operations in StaffGradeAssignmentController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffGradeAssignmentController
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

### GET /api/v1/auth/hrms/grades/staff/{staffIdentifier}/current
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/grades/staff/{staffIdentifier}/current
**Description:** REST endpoint to support HRMS workflow operations in StaffGradeAssignmentController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffGradeAssignmentController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `staffIdentifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/grades/staff/{staffIdentifier}/history
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/grades/staff/{staffIdentifier}/history
**Description:** REST endpoint to support HRMS workflow operations in StaffGradeAssignmentController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffGradeAssignmentController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `staffIdentifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/grades/api/v1/auth/hrms/grades
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/grades/api/v1/auth/hrms/grades
**Description:** REST endpoint to support HRMS workflow operations in StaffGradeController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffGradeController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/hrms/grades/{identifier}
**Method:** DELETE
**Endpoint:** /api/v1/auth/hrms/grades/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in StaffGradeController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffGradeController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/hrms/grades/{identifier}
**Method:** PUT
**Endpoint:** /api/v1/auth/hrms/grades/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in StaffGradeController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffGradeController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
```json
{
  "30": "="
}
```
**Request DTO ->** `StaffGradeUpdateDTO` { 30: `=` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/salary/mappings/api/v1/auth/hrms/salary/mappings
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/salary/mappings/api/v1/auth/hrms/salary/mappings
**Description:** REST endpoint to support HRMS workflow operations in StaffSalaryMappingController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffSalaryMappingController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/salary/mappings/bulk
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/salary/mappings/bulk
**Description:** REST endpoint to support HRMS workflow operations in StaffSalaryMappingController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffSalaryMappingController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "templateRef": "string",
  "staffRefs": "String>",
  "effectiveFrom": "2026-05-20",
  "effectiveTo": "2026-05-20",
  "500": "="
}
```
**Request DTO ->** `StaffSalaryMappingBulkCreateDTO` { templateRef: `String`, staffRefs: `String>`, effectiveFrom: `LocalDate`, effectiveTo: `LocalDate`, 500: `=` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/salary/mappings/staff/{staffIdentifier}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/salary/mappings/staff/{staffIdentifier}
**Description:** REST endpoint to support HRMS workflow operations in StaffSalaryMappingController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffSalaryMappingController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `staffIdentifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/salary/mappings/unmapped-staff
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/salary/mappings/unmapped-staff
**Description:** REST endpoint to support HRMS workflow operations in StaffSalaryMappingController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffSalaryMappingController
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

### DELETE /api/v1/auth/hrms/salary/mappings/{identifier}
**Method:** DELETE
**Endpoint:** /api/v1/auth/hrms/salary/mappings/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in StaffSalaryMappingController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffSalaryMappingController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/hrms/salary/mappings/{identifier}
**Method:** PUT
**Endpoint:** /api/v1/auth/hrms/salary/mappings/{identifier}
**Description:** REST endpoint to support HRMS workflow operations in StaffSalaryMappingController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffSalaryMappingController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
```json
{
  "templateRef": "string",
  "effectiveFrom": "2026-05-20",
  "effectiveTo": "2026-05-20",
  "500": "="
}
```
**Request DTO ->** `StaffSalaryMappingUpdateDTO` { templateRef: `String`, effectiveFrom: `LocalDate`, effectiveTo: `LocalDate`, 500: `=` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/salary/mappings/{identifier}/computed
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/salary/mappings/{identifier}/computed
**Description:** REST endpoint to support HRMS workflow operations in StaffSalaryMappingController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StaffSalaryMappingController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `identifier` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/salary/api/v1/auth/hrms/salary
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/salary/api/v1/auth/hrms/salary
**Description:** REST endpoint to support HRMS workflow operations in StaffSalarySelfController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffSalarySelfController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/salary/self/structure
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/salary/self/structure
**Description:** REST endpoint to support HRMS workflow operations in StaffSalarySelfController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StaffSalarySelfController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/statutory/api/v1/auth/hrms/statutory
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/statutory/api/v1/auth/hrms/statutory
**Description:** REST endpoint to support HRMS workflow operations in StatutoryController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StatutoryController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/statutory/config
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/statutory/config
**Description:** REST endpoint to support HRMS workflow operations in StatutoryController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StatutoryController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "financialYear": "string",
  "pfApplicable": true,
  "pfEmployeeRate": 0,
  "pfEmployerRate": 0,
  "pfCeilingAmount": 0,
  "esiApplicable": true,
  "esiEmployeeRate": 0,
  "esiEmployerRate": 0,
  "esiWageLimit": 0,
  "ptApplicable": true,
  "ptState": "string",
  "ptSlabs": [
    {
      "minSalary": 0,
      "maxSalary": 0,
      "monthlyTax": 0
    }
  ]
}
```
**Request DTO ->** `StatutoryConfigDTO` { financialYear: `String`, pfApplicable: `boolean`, pfEmployeeRate: `BigDecimal`, pfEmployerRate: `BigDecimal`, pfCeilingAmount: `BigDecimal`, esiApplicable: `boolean`, esiEmployeeRate: `BigDecimal`, esiEmployerRate: `BigDecimal`, esiWageLimit: `BigDecimal`, ptApplicable: `boolean`, ptState: `String`, ptSlabs: `List<PtSlabDTO>` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/statutory/config/{financialYear}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/statutory/config/{financialYear}
**Description:** REST endpoint to support HRMS workflow operations in StatutoryController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StatutoryController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `financialYear` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/statutory/reports/attrition
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/statutory/reports/attrition
**Description:** REST endpoint to support HRMS workflow operations in StatutoryController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StatutoryController
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

### GET /api/v1/auth/hrms/statutory/reports/compliance-summary
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/statutory/reports/compliance-summary
**Description:** REST endpoint to support HRMS workflow operations in StatutoryController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StatutoryController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `financialYear` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/statutory/reports/esi
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/statutory/reports/esi
**Description:** REST endpoint to support HRMS workflow operations in StatutoryController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StatutoryController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `month` (Query Parameter)
- `year` (Query Parameter)
- `financialYear` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/statutory/reports/form16
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/statutory/reports/form16
**Description:** REST endpoint to support HRMS workflow operations in StatutoryController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StatutoryController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `financialYear` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/statutory/reports/headcount
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/statutory/reports/headcount
**Description:** REST endpoint to support HRMS workflow operations in StatutoryController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StatutoryController
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

### GET /api/v1/auth/hrms/statutory/reports/pf
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/statutory/reports/pf
**Description:** REST endpoint to support HRMS workflow operations in StatutoryController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StatutoryController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `month` (Query Parameter)
- `year` (Query Parameter)
- `financialYear` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/statutory/reports/pt
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/statutory/reports/pt
**Description:** REST endpoint to support HRMS workflow operations in StatutoryController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StatutoryController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `month` (Query Parameter)
- `year` (Query Parameter)
- `financialYear` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/statutory/reports/salary-register
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/statutory/reports/salary-register
**Description:** REST endpoint to support HRMS workflow operations in StatutoryController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StatutoryController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `month` (Query Parameter)
- `year` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/statutory/reports/tds
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/statutory/reports/tds
**Description:** REST endpoint to support HRMS workflow operations in StatutoryController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: StatutoryController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `month` (Query Parameter)
- `year` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/hrms/training/api/v1/auth/hrms/training
**Method:** ALL
**Endpoint:** /api/v1/auth/hrms/training/api/v1/auth/hrms/training
**Description:** REST endpoint to support HRMS workflow operations in TrainingController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TrainingController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/hrms/training/certificates
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/training/certificates
**Description:** REST endpoint to support HRMS workflow operations in TrainingController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: TrainingController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** `CertificateUploadDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/training/courses
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/training/courses
**Description:** REST endpoint to support HRMS workflow operations in TrainingController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: TrainingController
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

### POST /api/v1/auth/hrms/training/courses
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/training/courses
**Description:** REST endpoint to support HRMS workflow operations in TrainingController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: TrainingController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** `CourseCreateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/training/courses/{uuid}
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/training/courses/{uuid}
**Description:** REST endpoint to support HRMS workflow operations in TrainingController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: TrainingController
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

### POST /api/v1/auth/hrms/training/courses/{uuid}/enroll
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/training/courses/{uuid}/enroll
**Description:** REST endpoint to support HRMS workflow operations in TrainingController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: TrainingController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** `EnrollmentCreateDTO`
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/hrms/training/courses/{uuid}/enrollments
**Method:** GET
**Endpoint:** /api/v1/auth/hrms/training/courses/{uuid}/enrollments
**Description:** REST endpoint to support HRMS workflow operations in TrainingController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('ROLE_SUPER_ADMIN','ROLE_SCHOOL_ADMIN','ROLE_ADMIN')
- `Class Context`: TrainingController
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

### POST /api/v1/auth/hrms/training/courses/{uuid}/enrollments/{enrollmentId}/complete
**Method:** POST
**Endpoint:** /api/v1/auth/hrms/training/courses/{uuid}/enrollments/{enrollmentId}/complete
**Description:** REST endpoint to support HRMS workflow operations in TrainingController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: TrainingController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `uuid` (Path Variable)
- `enrollmentId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PATCH /api/v1/auth/hrms/training/courses/{uuid}/status
**Method:** PATCH
**Endpoint:** /api/v1/auth/hrms/training/courses/{uuid}/status
**Description:** REST endpoint to support HRMS workflow operations in TrainingController.

**Security Requirement:**
- `Authority / Scope`: isAuthenticated()
- `Class Context`: TrainingController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `status` (Query Parameter)
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---
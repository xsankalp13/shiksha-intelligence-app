# FINANCE Module API Reference
Contains **147 mapped operational endpoints**.

---

### ALL /api/v1/auth/finance/accounts/api/v1/auth/finance/accounts
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/accounts/api/v1/auth/finance/accounts
**Description:** REST controller for Chart of Accounts (COA) management. Base path: /auth/finance/accounts

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AccountController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/accounts/posting
**Method:** GET
**Endpoint:** /api/v1/auth/finance/accounts/posting
**Description:** GET /auth/finance/accounts/posting Flat list of active posting accounts — used by journal entry dropdowns.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:coa:read', 'ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN', 'ROLE_FINANCE_ADMIN', 'ROLE_AUDITOR')
- `Class Context`: AccountController
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

### POST /api/v1/auth/finance/accounts/seed
**Method:** POST
**Endpoint:** /api/v1/auth/finance/accounts/seed
**Description:** POST /auth/finance/accounts/seed Seeds the default Indian educational institution COA for this school. Should be called once during school setup.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AccountController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/accounts/tree
**Method:** GET
**Endpoint:** /api/v1/auth/finance/accounts/tree
**Description:** GET /auth/finance/accounts/tree Returns the full COA as a nested tree — used by the ChartOfAccounts.tsx tree view.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AccountController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/finance/accounts/{id}
**Method:** DELETE
**Endpoint:** /api/v1/auth/finance/accounts/{id}
**Description:** DELETE /auth/finance/accounts/{id} Soft-deletes (deactivates) an account.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AccountController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/accounts/{id}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/accounts/{id}
**Description:** GET /auth/finance/accounts/{id} Single account detail.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:coa:read', 'finance:gl:write', 'ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN', 'ROLE_FINANCE_ADMIN', 'ROLE_AUDITOR')
- `Class Context`: AccountController
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

### PUT /api/v1/auth/finance/accounts/{id}
**Method:** PUT
**Endpoint:** /api/v1/auth/finance/accounts/{id}
**Description:** PUT /auth/finance/accounts/{id} Update an existing account.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:coa:write', 'ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN', 'ROLE_FINANCE_ADMIN')
- `Class Context`: AccountController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
```json
{
  "required\"": "is"
}
```
**Request DTO ->** `AccountRequestDTO` { required": `is` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/bank/accounts
**Method:** GET
**Endpoint:** /api/v1/auth/finance/bank/accounts
**Description:** ── Bank Accounts ─────────────────────────────────────────────────────────

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: BankReconciliationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<BankAccountResponseDTO>` { id: `Long`, uuid: `UUID`, accountName: `String`, accountNumber: `String`, bankName: `String`, branchName: `String`, ifscCode: `String`, accountType: `String`, coaAccountId: `Long`, coaAccountCode: `String`, coaAccountName: `String`, statementBalance: `BigDecimal`, bookBalance: `BigDecimal`, difference: `BigDecimal`, unreconciledCount: `Long`, isActive: `Boolean`, notes: `String`, createdAt: `LocalDateTime` }

---

### POST /api/v1/auth/finance/bank/accounts
**Method:** POST
**Endpoint:** /api/v1/auth/finance/bank/accounts
**Description:** REST endpoint to support FINANCE workflow operations in BankReconciliationController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:bank:read','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: BankReconciliationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** `Map<String`
**Response DTO ->** `ResponseEntity` wrapping `BankAccountResponseDTO` { id: `Long`, uuid: `UUID`, accountName: `String`, accountNumber: `String`, bankName: `String`, branchName: `String`, ifscCode: `String`, accountType: `String`, coaAccountId: `Long`, coaAccountCode: `String`, coaAccountName: `String`, statementBalance: `BigDecimal`, bookBalance: `BigDecimal`, difference: `BigDecimal`, unreconciledCount: `Long`, isActive: `Boolean`, notes: `String`, createdAt: `LocalDateTime` }

---

### POST /api/v1/auth/finance/bank/accounts/{bankAccountId}/auto-match
**Method:** POST
**Endpoint:** /api/v1/auth/finance/bank/accounts/{bankAccountId}/auto-match
**Description:** ── Reconciliation ────────────────────────────────────────────────────────

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:bank:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: BankReconciliationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `bankAccountId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<Map<String, Integer>>`

---

### GET /api/v1/auth/finance/bank/accounts/{bankAccountId}/transactions
**Method:** GET
**Endpoint:** /api/v1/auth/finance/bank/accounts/{bankAccountId}/transactions
**Description:** ── Transactions ──────────────────────────────────────────────────────────

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: BankReconciliationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `status` (Query Parameter)
- `bankAccountId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<BankTransactionResponseDTO>` { id: `Long`, bankAccountId: `Long`, bankAccountName: `String`, transactionDate: `LocalDate`, valueDate: `LocalDate`, description: `String`, referenceNumber: `String`, instrumentNumber: `String`, transactionType: `BankTransactionType`, amount: `BigDecimal`, runningBalance: `BigDecimal`, reconciliationStatus: `ReconciliationStatus`, matchedGlEntryId: `Long`, reconciliationNotes: `String`, createdAt: `LocalDateTime` }

---

### ALL /api/v1/auth/finance/bank/api/v1/auth/finance/bank
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/bank/api/v1/auth/finance/bank
**Description:** /auth/finance/bank

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: BankReconciliationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/finance/bank/transactions
**Method:** POST
**Endpoint:** /api/v1/auth/finance/bank/transactions
**Description:** REST endpoint to support FINANCE workflow operations in BankReconciliationController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:bank:read','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: BankReconciliationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "bankAccountId": 0,
  "transactionDate": "2026-05-20",
  "valueDate": "2026-05-20",
  "description": "string",
  "referenceNumber": "string",
  "instrumentNumber": "string",
  "transactionType": "BankTransactionType"
}
```
**Request DTO ->** `BankTransactionRequestDTO` { bankAccountId: `Long`, transactionDate: `LocalDate`, valueDate: `LocalDate`, description: `String`, referenceNumber: `String`, instrumentNumber: `String`, transactionType: `BankTransactionType` }
**Response DTO ->** `ResponseEntity` wrapping `BankTransactionResponseDTO` { id: `Long`, bankAccountId: `Long`, bankAccountName: `String`, transactionDate: `LocalDate`, valueDate: `LocalDate`, description: `String`, referenceNumber: `String`, instrumentNumber: `String`, transactionType: `BankTransactionType`, amount: `BigDecimal`, runningBalance: `BigDecimal`, reconciliationStatus: `ReconciliationStatus`, matchedGlEntryId: `Long`, reconciliationNotes: `String`, createdAt: `LocalDateTime` }

---

### POST /api/v1/auth/finance/bank/transactions/{txId}/flag-exception
**Method:** POST
**Endpoint:** /api/v1/auth/finance/bank/transactions/{txId}/flag-exception
**Description:** REST endpoint to support FINANCE workflow operations in BankReconciliationController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:bank:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: BankReconciliationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `reason` (Query Parameter)
- `txId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `BankTransactionResponseDTO` { id: `Long`, bankAccountId: `Long`, bankAccountName: `String`, transactionDate: `LocalDate`, valueDate: `LocalDate`, description: `String`, referenceNumber: `String`, instrumentNumber: `String`, transactionType: `BankTransactionType`, amount: `BigDecimal`, runningBalance: `BigDecimal`, reconciliationStatus: `ReconciliationStatus`, matchedGlEntryId: `Long`, reconciliationNotes: `String`, createdAt: `LocalDateTime` }

---

### POST /api/v1/auth/finance/bank/transactions/{txId}/ignore
**Method:** POST
**Endpoint:** /api/v1/auth/finance/bank/transactions/{txId}/ignore
**Description:** REST endpoint to support FINANCE workflow operations in BankReconciliationController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:bank:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: BankReconciliationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `txId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `BankTransactionResponseDTO` { id: `Long`, bankAccountId: `Long`, bankAccountName: `String`, transactionDate: `LocalDate`, valueDate: `LocalDate`, description: `String`, referenceNumber: `String`, instrumentNumber: `String`, transactionType: `BankTransactionType`, amount: `BigDecimal`, runningBalance: `BigDecimal`, reconciliationStatus: `ReconciliationStatus`, matchedGlEntryId: `Long`, reconciliationNotes: `String`, createdAt: `LocalDateTime` }

---

### POST /api/v1/auth/finance/bank/transactions/{txId}/manual-match
**Method:** POST
**Endpoint:** /api/v1/auth/finance/bank/transactions/{txId}/manual-match
**Description:** REST endpoint to support FINANCE workflow operations in BankReconciliationController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:bank:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: BankReconciliationController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `glEntryId` (Query Parameter)
- `notes` (Query Parameter)
- `txId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `BankTransactionResponseDTO` { id: `Long`, bankAccountId: `Long`, bankAccountName: `String`, transactionDate: `LocalDate`, valueDate: `LocalDate`, description: `String`, referenceNumber: `String`, instrumentNumber: `String`, transactionType: `BankTransactionType`, amount: `BigDecimal`, runningBalance: `BigDecimal`, reconciliationStatus: `ReconciliationStatus`, matchedGlEntryId: `Long`, reconciliationNotes: `String`, createdAt: `LocalDateTime` }

---

### ALL /api/v1/auth/finance/budgets/api/v1/auth/finance/budgets
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/budgets/api/v1/auth/finance/budgets
**Description:** REST controller for Departmental Budget management. Base path: /auth/finance/budgets

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: BudgetController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/budgets/meta/departments
**Method:** GET
**Endpoint:** /api/v1/auth/finance/budgets/meta/departments
**Description:** GET /auth/finance/budgets/meta/departments Distinct departments in use — for the department filter dropdown.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:budget:read', 'ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN', 'ROLE_FINANCE_ADMIN', 'ROLE_AUDITOR')
- `Class Context`: BudgetController
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

### GET /api/v1/auth/finance/budgets/meta/years
**Method:** GET
**Endpoint:** /api/v1/auth/finance/budgets/meta/years
**Description:** GET /auth/finance/budgets/meta/years Distinct academic years in use — for the year filter dropdown.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:budget:read', 'ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN', 'ROLE_FINANCE_ADMIN', 'ROLE_AUDITOR')
- `Class Context`: BudgetController
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

### DELETE /api/v1/auth/finance/budgets/{id}
**Method:** DELETE
**Endpoint:** /api/v1/auth/finance/budgets/{id}
**Description:** DELETE /auth/finance/budgets/{id} Delete a DRAFT budget.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: BudgetController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/budgets/{id}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/budgets/{id}
**Description:** GET /auth/finance/budgets/{id} Full budget detail with all line items and variance data.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: BudgetController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/finance/budgets/{id}
**Method:** PUT
**Endpoint:** /api/v1/auth/finance/budgets/{id}
**Description:** PUT /auth/finance/budgets/{id} Update a DRAFT or REVISION_REQUESTED budget.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:budget:write', 'ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN', 'ROLE_FINANCE_ADMIN')
- `Class Context`: BudgetController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
```json
{
  "required\"": "is"
}
```
**Request DTO ->** `BudgetCreateDTO` { required": `is` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/finance/budgets/{id}/close
**Method:** POST
**Endpoint:** /api/v1/auth/finance/budgets/{id}/close
**Description:** POST /auth/finance/budgets/{id}/close Close an APPROVED budget at year end.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: BudgetController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/finance/budgets/{id}/request-revision
**Method:** POST
**Endpoint:** /api/v1/auth/finance/budgets/{id}/request-revision
**Description:** POST /auth/finance/budgets/{id}/request-revision Send a SUBMITTED budget back for revision.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: BudgetController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `notes` (Query Parameter)
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/finance/budgets/{id}/review
**Method:** POST
**Endpoint:** /api/v1/auth/finance/budgets/{id}/review
**Description:** POST /auth/finance/budgets/{id}/review Finance Admin approves or rejects a SUBMITTED budget.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:budget:write', 'ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN', 'ROLE_FINANCE_ADMIN')
- `Class Context`: BudgetController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
```json
{
  "approved": true,
  "false": "="
}
```
**Request DTO ->** `BudgetApprovalDTO` { approved: `boolean`, false: `=` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/finance/budgets/{id}/submit
**Method:** POST
**Endpoint:** /api/v1/auth/finance/budgets/{id}/submit
**Description:** ── Lifecycle Actions ───────────────────────────────────────────────────── POST /auth/finance/budgets/{id}/submit Submit a DRAFT budget for Finance Admin review.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: BudgetController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/finance/dashboard/api/v1/auth/finance/dashboard
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/dashboard/api/v1/auth/finance/dashboard
**Description:** REST endpoint to support FINANCE workflow operations in DashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/dashboard/dashboard/summary/for-student/{studentId}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/dashboard/dashboard/summary/for-student/{studentId}
**Description:** NEW: GET /api/v1/finance/parent/dashboard/summary/for-student/{studentId} (TEMPORARY ENDPOINT) Fetches the financial summary for a specific student. This will be replaced by a secure GET /dashboard/summary endpoint.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `studentId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `ParentDashboardSummaryDTO` { totalDue: `BigDecimal`, nextDueDate: `LocalDate` }

---

### GET /api/v1/auth/finance/dashboard/invoices/for-student/{studentId}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/dashboard/invoices/for-student/{studentId}
**Description:** GET /api/v1/finance/parent/invoices/for-student/{studentId} (TEMPORARY ENDPOINT) Retrieves all invoices for a specific student.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `studentId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<InvoiceResponseDTO>` { invoiceId: `Long`, studentId: `Long`, studentName: `String`, invoiceNumber: `String`, issueDate: `LocalDate`, dueDate: `LocalDate`, totalAmount: `BigDecimal`, lateFeeAmount: `BigDecimal`, paidAmount: `BigDecimal`, status: `InvoiceStatus`, lineItems: `List<InvoiceLineItemResponseDTO>`, createdAt: `LocalDateTime` }

---

### GET /api/v1/auth/finance/dashboard/invoices/{invoiceId}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/dashboard/invoices/{invoiceId}
**Description:** GET /api/v1/finance/parent/invoices/{invoiceId} Gets the detailed line-item breakdown of a specific invoice. (WARNING: Insecure, will be updated later)

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `invoiceId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `InvoiceResponseDTO` { invoiceId: `Long`, studentId: `Long`, studentName: `String`, invoiceNumber: `String`, issueDate: `LocalDate`, dueDate: `LocalDate`, totalAmount: `BigDecimal`, lateFeeAmount: `BigDecimal`, paidAmount: `BigDecimal`, status: `InvoiceStatus`, lineItems: `List<InvoiceLineItemResponseDTO>`, createdAt: `LocalDateTime` }

---

### GET /api/v1/auth/finance/dashboard/summary
**Method:** GET
**Endpoint:** /api/v1/auth/finance/dashboard/summary
**Description:** GET /api/v1/finance/dashboard/summary Fetches aggregated financial data for the admin dashboard.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: DashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `AdminDashboardSummaryDTO` { totalCollected: `BigDecimal`, totalOutstanding: `BigDecimal`, totalOverdue: `BigDecimal`, pendingInvoicesCount: `Long` }

---

### ALL /api/v1/auth/finance/api/v1/auth/finance
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/api/v1/auth/finance
**Description:** REST endpoint to support FINANCE workflow operations in FeeStructureController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: FeeStructureController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/structures
**Method:** GET
**Endpoint:** /api/v1/auth/finance/structures
**Description:** GET /api/v1/finance/structures Retrieves all existing fee structures with their particulars. This matches the Admin API endpoint "GET /structures". @return A list of all fee structure response DTOs.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: FeeStructureController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<FeeStructureResponseDTO>` { structureId: `Long`, name: `String`, academicYear: `String`, description: `String`, isActive: `boolean`, particulars: `List<FeeParticularResponseDTO>`, createdAt: `LocalDateTime`, updatedAt: `LocalDateTime` }

---

### POST /api/v1/auth/finance/structures
**Method:** POST
**Endpoint:** /api/v1/auth/finance/structures
**Description:** POST /api/v1/finance/structures Creates a new fee structure along with its particulars. This matches the Admin API endpoint "POST /structures". @param createDTO The DTO containing structure and particular details. @return A response DTO of the newly created structure.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: FeeStructureController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "name": "string",
  "academicYear": "string",
  "description": "string",
  "isActive": true,
  "particulars": [
    {
      "feeTypeId": 0,
      "name": "string",
      "amount": 0,
      "frequency": "Frequency"
    }
  ]
}
```
**Request DTO ->** `FeeStructureCreateDTO` { name: `String`, academicYear: `String`, description: `String`, isActive: `boolean`, particulars: `List<FeeParticularCreateDTO>` }
**Response DTO ->** `ResponseEntity` wrapping `FeeStructureResponseDTO` { structureId: `Long`, name: `String`, academicYear: `String`, description: `String`, isActive: `boolean`, particulars: `List<FeeParticularResponseDTO>`, createdAt: `LocalDateTime`, updatedAt: `LocalDateTime` }

---

### DELETE /api/v1/auth/finance/{structureId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/finance/{structureId}
**Description:** DELETE /api/v1/finance/structures/{structureId} Soft-deletes a fee structure.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: FeeStructureController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `structureId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### GET /api/v1/auth/finance/{structureId}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/{structureId}
**Description:** GET /api/v1/finance/structures/{structureId}

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: FeeStructureController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `structureId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `FeeStructureResponseDTO` { structureId: `Long`, name: `String`, academicYear: `String`, description: `String`, isActive: `boolean`, particulars: `List<FeeParticularResponseDTO>`, createdAt: `LocalDateTime`, updatedAt: `LocalDateTime` }

---

### PUT /api/v1/auth/finance/{structureId}
**Method:** PUT
**Endpoint:** /api/v1/auth/finance/{structureId}
**Description:** PUT /api/v1/finance/structures/{structureId} Updates the core details of a fee structure.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: FeeStructureController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `structureId` (Path Variable)
**body ->**
```json
{
  "name": "string",
  "academicYear": "string",
  "description": "string",
  "isActive": true
}
```
**Request DTO ->** `FeeStructureUpdateDTO` { name: `String`, academicYear: `String`, description: `String`, isActive: `boolean` }
**Response DTO ->** `ResponseEntity` wrapping `FeeStructureResponseDTO` { structureId: `Long`, name: `String`, academicYear: `String`, description: `String`, isActive: `boolean`, particulars: `List<FeeParticularResponseDTO>`, createdAt: `LocalDateTime`, updatedAt: `LocalDateTime` }

---

### ALL /api/v1/auth/finance/fee-types/api/v1/auth/finance/fee-types
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/fee-types/api/v1/auth/finance/fee-types
**Description:** REST endpoint to support FINANCE workflow operations in FeeTypeController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: FeeTypeController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/finance/fee-types/{id}
**Method:** DELETE
**Endpoint:** /api/v1/auth/finance/fee-types/{id}
**Description:** DELETE /api/v1/finance/fee-types/{id} Deletes a FeeType.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: FeeTypeController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### GET /api/v1/auth/finance/fee-types/{id}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/fee-types/{id}
**Description:** GET /api/v1/finance/fee-types/{id} Retrieves a single FeeType by its ID.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: FeeTypeController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `FeeTypeResponseDTO` { feeTypeId: `Long`, typeName: `String`, description: `String` }

---

### PUT /api/v1/auth/finance/fee-types/{id}
**Method:** PUT
**Endpoint:** /api/v1/auth/finance/fee-types/{id}
**Description:** PUT /api/v1/finance/fee-types/{id} Updates an existing FeeType.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: FeeTypeController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `id` (Path Variable)
**body ->**
```json
{
  "typeName": "string",
  "description": "string"
}
```
**Request DTO ->** `FeeTypeCreateUpdateDTO` { typeName: `String`, description: `String` }
**Response DTO ->** `ResponseEntity` wrapping `FeeTypeResponseDTO` { feeTypeId: `Long`, typeName: `String`, description: `String` }

---

### ALL /api/v1/auth/finance/audit-logs/api/v1/auth/finance/audit-logs
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/audit-logs/api/v1/auth/finance/audit-logs
**Description:** REST endpoint to support FINANCE workflow operations in FinanceAuditLogController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: FinanceAuditLogController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/audit-logs/entity/{entityName}/{entityId}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/audit-logs/entity/{entityName}/{entityId}
**Description:** REST endpoint to support FINANCE workflow operations in FinanceAuditLogController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:reports:read','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN', 'ROLE_AUDITOR')
- `Class Context`: FinanceAuditLogController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `entityName` (Path Variable)
- `entityId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/finance/statements/api/v1/auth/finance/statements
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/statements/api/v1/auth/finance/statements
**Description:** REST endpoint to support FINANCE workflow operations in FinancialStatementsController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: FinancialStatementsController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/statements/balance-sheet
**Method:** GET
**Endpoint:** /api/v1/auth/finance/statements/balance-sheet
**Description:** REST endpoint to support FINANCE workflow operations in FinancialStatementsController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:reports:read','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN', 'ROLE_AUDITOR')
- `Class Context`: FinancialStatementsController
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

### GET /api/v1/auth/finance/statements/profit-and-loss
**Method:** GET
**Endpoint:** /api/v1/auth/finance/statements/profit-and-loss
**Description:** REST endpoint to support FINANCE workflow operations in FinancialStatementsController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:reports:read','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN', 'ROLE_AUDITOR')
- `Class Context`: FinancialStatementsController
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

### GET /api/v1/auth/finance/statements/trial-balance
**Method:** GET
**Endpoint:** /api/v1/auth/finance/statements/trial-balance
**Description:** REST endpoint to support FINANCE workflow operations in FinancialStatementsController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: FinancialStatementsController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/finance/assets/api/v1/auth/finance/assets
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/assets/api/v1/auth/finance/assets
**Description:** /auth/finance/assets

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: FixedAssetController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/finance/assets/depreciate-batch
**Method:** POST
**Endpoint:** /api/v1/auth/finance/assets/depreciate-batch
**Description:** REST endpoint to support FINANCE workflow operations in FixedAssetController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:assets:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: FixedAssetController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `financialYear` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<DepreciationEntryResponseDTO>` { id: `Long`, assetId: `Long`, assetCode: `String`, assetName: `String`, financialYear: `String`, depreciationDate: `LocalDate`, openingBookValue: `BigDecimal`, depreciationAmount: `BigDecimal`, closingBookValue: `BigDecimal`, glEntryId: `Long`, notes: `String`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### GET /api/v1/auth/finance/assets/{id}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/assets/{id}
**Description:** REST endpoint to support FINANCE workflow operations in FixedAssetController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:assets:read','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: FixedAssetController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `AssetResponseDTO` { id: `Long`, uuid: `UUID`, assetCode: `String`, name: `String`, assetCategory: `String`, location: `String`, description: `String`, make: `String`, model: `String`, serialNumber: `String`, purchaseDate: `LocalDate`, inUseDate: `LocalDate`, purchaseCost: `BigDecimal`, salvageValue: `BigDecimal`, depreciableAmount: `BigDecimal`, usefulLifeYears: `Integer`, depreciationMethod: `DepreciationMethod`, depreciationRatePct: `BigDecimal`, accumulatedDepreciation: `BigDecimal`, currentBookValue: `BigDecimal`, lastDepreciationDate: `LocalDate`, status: `AssetStatus`, vendorId: `Long`, vendorName: `String`, assetAccountId: `Long`, assetAccountCode: `String`, assetAccountName: `String`, disposalDate: `LocalDate`, disposalReason: `String`, disposalProceeds: `BigDecimal`, notes: `String`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### PUT /api/v1/auth/finance/assets/{id}
**Method:** PUT
**Endpoint:** /api/v1/auth/finance/assets/{id}
**Description:** REST endpoint to support FINANCE workflow operations in FixedAssetController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:assets:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: FixedAssetController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
```json
{
  "name": "string",
  "assetCategory": "string",
  "location": "string",
  "description": "string",
  "make": "string",
  "model": "string",
  "serialNumber": "string",
  "purchaseDate": "2026-05-20",
  "inUseDate": "2026-05-20"
}
```
**Request DTO ->** `AssetRequestDTO` { name: `String`, assetCategory: `String`, location: `String`, description: `String`, make: `String`, model: `String`, serialNumber: `String`, purchaseDate: `LocalDate`, inUseDate: `LocalDate` }
**Response DTO ->** `ResponseEntity` wrapping `AssetResponseDTO` { id: `Long`, uuid: `UUID`, assetCode: `String`, name: `String`, assetCategory: `String`, location: `String`, description: `String`, make: `String`, model: `String`, serialNumber: `String`, purchaseDate: `LocalDate`, inUseDate: `LocalDate`, purchaseCost: `BigDecimal`, salvageValue: `BigDecimal`, depreciableAmount: `BigDecimal`, usefulLifeYears: `Integer`, depreciationMethod: `DepreciationMethod`, depreciationRatePct: `BigDecimal`, accumulatedDepreciation: `BigDecimal`, currentBookValue: `BigDecimal`, lastDepreciationDate: `LocalDate`, status: `AssetStatus`, vendorId: `Long`, vendorName: `String`, assetAccountId: `Long`, assetAccountCode: `String`, assetAccountName: `String`, disposalDate: `LocalDate`, disposalReason: `String`, disposalProceeds: `BigDecimal`, notes: `String`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### POST /api/v1/auth/finance/assets/{id}/depreciate
**Method:** POST
**Endpoint:** /api/v1/auth/finance/assets/{id}/depreciate
**Description:** REST endpoint to support FINANCE workflow operations in FixedAssetController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:assets:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: FixedAssetController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `financialYear` (Query Parameter)
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `DepreciationEntryResponseDTO` { id: `Long`, assetId: `Long`, assetCode: `String`, assetName: `String`, financialYear: `String`, depreciationDate: `LocalDate`, openingBookValue: `BigDecimal`, depreciationAmount: `BigDecimal`, closingBookValue: `BigDecimal`, glEntryId: `Long`, notes: `String`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### GET /api/v1/auth/finance/assets/{id}/depreciation
**Method:** GET
**Endpoint:** /api/v1/auth/finance/assets/{id}/depreciation
**Description:** REST endpoint to support FINANCE workflow operations in FixedAssetController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:assets:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: FixedAssetController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<DepreciationEntryResponseDTO>` { id: `Long`, assetId: `Long`, assetCode: `String`, assetName: `String`, financialYear: `String`, depreciationDate: `LocalDate`, openingBookValue: `BigDecimal`, depreciationAmount: `BigDecimal`, closingBookValue: `BigDecimal`, glEntryId: `Long`, notes: `String`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### POST /api/v1/auth/finance/assets/{id}/dispose
**Method:** POST
**Endpoint:** /api/v1/auth/finance/assets/{id}/dispose
**Description:** REST endpoint to support FINANCE workflow operations in FixedAssetController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:assets:read','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: FixedAssetController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `disposalDate` (Query Parameter)
- `reason` (Query Parameter)
- `proceeds` (Query Parameter)
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `AssetResponseDTO` { id: `Long`, uuid: `UUID`, assetCode: `String`, name: `String`, assetCategory: `String`, location: `String`, description: `String`, make: `String`, model: `String`, serialNumber: `String`, purchaseDate: `LocalDate`, inUseDate: `LocalDate`, purchaseCost: `BigDecimal`, salvageValue: `BigDecimal`, depreciableAmount: `BigDecimal`, usefulLifeYears: `Integer`, depreciationMethod: `DepreciationMethod`, depreciationRatePct: `BigDecimal`, accumulatedDepreciation: `BigDecimal`, currentBookValue: `BigDecimal`, lastDepreciationDate: `LocalDate`, status: `AssetStatus`, vendorId: `Long`, vendorName: `String`, assetAccountId: `Long`, assetAccountCode: `String`, assetAccountName: `String`, disposalDate: `LocalDate`, disposalReason: `String`, disposalProceeds: `BigDecimal`, notes: `String`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### ALL /api/v1/auth/finance/gl/api/v1/auth/finance/gl
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/gl/api/v1/auth/finance/gl
**Description:** REST controller for the General Ledger (GL). Base path: /auth/finance/gl

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GeneralLedgerController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/gl/journal-entries
**Method:** GET
**Endpoint:** /api/v1/auth/finance/gl/journal-entries
**Description:** GET /auth/finance/gl/journal-entries Paginated list of journal entries with optional filters. @param status Filter by status (DRAFT/POSTED/REVERSED) @param from Filter by entry date >= from @param to Filter by entry date <= to @param page Page number (0-indexed) @param size Page size

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GeneralLedgerController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `status` (Query Parameter)
- `page` (Query Parameter)
- `size` (Query Parameter)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/finance/gl/journal-entries
**Method:** POST
**Endpoint:** /api/v1/auth/finance/gl/journal-entries
**Description:** POST /auth/finance/gl/journal-entries Create and immediately post a manual journal entry.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GeneralLedgerController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "required\"": "is"
}
```
**Request DTO ->** `JournalEntryRequestDTO` { required": `is` }
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/gl/journal-entries/{id}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/gl/journal-entries/{id}
**Description:** GET /auth/finance/gl/journal-entries/{id} Full detail of a single journal entry including all lines.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GeneralLedgerController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/finance/gl/journal-entries/{id}/reverse
**Method:** POST
**Endpoint:** /api/v1/auth/finance/gl/journal-entries/{id}/reverse
**Description:** POST /auth/finance/gl/journal-entries/{id}/reverse Reverse a posted journal entry.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:gl:read', 'ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN', 'ROLE_FINANCE_ADMIN', 'ROLE_AUDITOR')
- `Class Context`: GeneralLedgerController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `reason` (Query Parameter)
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/gl/ledger/{accountId}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/gl/ledger/{accountId}
**Description:** GET /auth/finance/gl/ledger/{accountId} Drilldown ledger for a specific account showing all postings in date range.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:gl:read', 'ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN', 'ROLE_FINANCE_ADMIN', 'ROLE_AUDITOR')
- `Class Context`: GeneralLedgerController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `accountId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/gl/trial-balance
**Method:** GET
**Endpoint:** /api/v1/auth/finance/gl/trial-balance
**Description:** GET /auth/finance/gl/trial-balance Returns the Trial Balance — all account balances at current state.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GeneralLedgerController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### ALL /api/v1/auth/finance/grants/api/v1/auth/finance/grants
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/grants/api/v1/auth/finance/grants
**Description:** /auth/finance/grants

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: GrantController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/grants/nearing-expiry
**Method:** GET
**Endpoint:** /api/v1/auth/finance/grants/nearing-expiry
**Description:** REST endpoint to support FINANCE workflow operations in GrantController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:grants:read','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: GrantController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<GrantResponseDTO>` { id: `Long`, uuid: `UUID`, grantingAgency: `String`, grantTitle: `String`, grantReference: `String`, principalInvestigator: `String`, department: `String`, sanctionedAmount: `BigDecimal`, receivedAmount: `BigDecimal`, utilisedAmount: `BigDecimal`, availableBalance: `BigDecimal`, utilisationPct: `double`, startDate: `LocalDate`, endDate: `LocalDate`, status: `GrantStatus`, incomeAccountId: `Long`, incomeAccountCode: `String`, incomeAccountName: `String`, complianceDueDate: `LocalDate`, nearingExpiry: `boolean`, complianceOverdue: `boolean`, objectives: `String`, notes: `String`, utilisations: `List<GrantUtilizationResponseDTO>`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### POST /api/v1/auth/finance/grants/utilisations
**Method:** POST
**Endpoint:** /api/v1/auth/finance/grants/utilisations
**Description:** Utilisation

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:grants:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: GrantController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "grantId": 0,
  "utilisationDate": "2026-05-20",
  "description": "string",
  "expenseCategory": "string"
}
```
**Request DTO ->** `GrantUtilizationRequestDTO` { grantId: `Long`, utilisationDate: `LocalDate`, description: `String`, expenseCategory: `String` }
**Response DTO ->** `ResponseEntity` wrapping `GrantUtilizationResponseDTO` { id: `Long`, grantId: `Long`, grantTitle: `String`, utilisationDate: `LocalDate`, description: `String`, expenseCategory: `String`, amount: `BigDecimal`, referenceDocument: `String`, glEntryId: `Long`, approvedBy: `String`, notes: `String`, createdAt: `LocalDateTime` }

---

### GET /api/v1/auth/finance/grants/{id}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/grants/{id}
**Description:** REST endpoint to support FINANCE workflow operations in GrantController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:grants:read','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: GrantController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `GrantResponseDTO` { id: `Long`, uuid: `UUID`, grantingAgency: `String`, grantTitle: `String`, grantReference: `String`, principalInvestigator: `String`, department: `String`, sanctionedAmount: `BigDecimal`, receivedAmount: `BigDecimal`, utilisedAmount: `BigDecimal`, availableBalance: `BigDecimal`, utilisationPct: `double`, startDate: `LocalDate`, endDate: `LocalDate`, status: `GrantStatus`, incomeAccountId: `Long`, incomeAccountCode: `String`, incomeAccountName: `String`, complianceDueDate: `LocalDate`, nearingExpiry: `boolean`, complianceOverdue: `boolean`, objectives: `String`, notes: `String`, utilisations: `List<GrantUtilizationResponseDTO>`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### PUT /api/v1/auth/finance/grants/{id}
**Method:** PUT
**Endpoint:** /api/v1/auth/finance/grants/{id}
**Description:** REST endpoint to support FINANCE workflow operations in GrantController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:grants:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: GrantController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
```json
{
  "grantingAgency": "string",
  "grantTitle": "string",
  "grantReference": "string",
  "principalInvestigator": "string",
  "department": "string"
}
```
**Request DTO ->** `GrantRequestDTO` { grantingAgency: `String`, grantTitle: `String`, grantReference: `String`, principalInvestigator: `String`, department: `String` }
**Response DTO ->** `ResponseEntity` wrapping `GrantResponseDTO` { id: `Long`, uuid: `UUID`, grantingAgency: `String`, grantTitle: `String`, grantReference: `String`, principalInvestigator: `String`, department: `String`, sanctionedAmount: `BigDecimal`, receivedAmount: `BigDecimal`, utilisedAmount: `BigDecimal`, availableBalance: `BigDecimal`, utilisationPct: `double`, startDate: `LocalDate`, endDate: `LocalDate`, status: `GrantStatus`, incomeAccountId: `Long`, incomeAccountCode: `String`, incomeAccountName: `String`, complianceDueDate: `LocalDate`, nearingExpiry: `boolean`, complianceOverdue: `boolean`, objectives: `String`, notes: `String`, utilisations: `List<GrantUtilizationResponseDTO>`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### POST /api/v1/auth/finance/grants/{id}/activate
**Method:** POST
**Endpoint:** /api/v1/auth/finance/grants/{id}/activate
**Description:** REST endpoint to support FINANCE workflow operations in GrantController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:grants:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: GrantController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `receivedAmount` (Query Parameter)
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `GrantResponseDTO` { id: `Long`, uuid: `UUID`, grantingAgency: `String`, grantTitle: `String`, grantReference: `String`, principalInvestigator: `String`, department: `String`, sanctionedAmount: `BigDecimal`, receivedAmount: `BigDecimal`, utilisedAmount: `BigDecimal`, availableBalance: `BigDecimal`, utilisationPct: `double`, startDate: `LocalDate`, endDate: `LocalDate`, status: `GrantStatus`, incomeAccountId: `Long`, incomeAccountCode: `String`, incomeAccountName: `String`, complianceDueDate: `LocalDate`, nearingExpiry: `boolean`, complianceOverdue: `boolean`, objectives: `String`, notes: `String`, utilisations: `List<GrantUtilizationResponseDTO>`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### POST /api/v1/auth/finance/grants/{id}/close
**Method:** POST
**Endpoint:** /api/v1/auth/finance/grants/{id}/close
**Description:** REST endpoint to support FINANCE workflow operations in GrantController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:grants:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: GrantController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `GrantResponseDTO` { id: `Long`, uuid: `UUID`, grantingAgency: `String`, grantTitle: `String`, grantReference: `String`, principalInvestigator: `String`, department: `String`, sanctionedAmount: `BigDecimal`, receivedAmount: `BigDecimal`, utilisedAmount: `BigDecimal`, availableBalance: `BigDecimal`, utilisationPct: `double`, startDate: `LocalDate`, endDate: `LocalDate`, status: `GrantStatus`, incomeAccountId: `Long`, incomeAccountCode: `String`, incomeAccountName: `String`, complianceDueDate: `LocalDate`, nearingExpiry: `boolean`, complianceOverdue: `boolean`, objectives: `String`, notes: `String`, utilisations: `List<GrantUtilizationResponseDTO>`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### POST /api/v1/auth/finance/grants/{id}/lapse
**Method:** POST
**Endpoint:** /api/v1/auth/finance/grants/{id}/lapse
**Description:** REST endpoint to support FINANCE workflow operations in GrantController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:grants:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: GrantController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `GrantResponseDTO` { id: `Long`, uuid: `UUID`, grantingAgency: `String`, grantTitle: `String`, grantReference: `String`, principalInvestigator: `String`, department: `String`, sanctionedAmount: `BigDecimal`, receivedAmount: `BigDecimal`, utilisedAmount: `BigDecimal`, availableBalance: `BigDecimal`, utilisationPct: `double`, startDate: `LocalDate`, endDate: `LocalDate`, status: `GrantStatus`, incomeAccountId: `Long`, incomeAccountCode: `String`, incomeAccountName: `String`, complianceDueDate: `LocalDate`, nearingExpiry: `boolean`, complianceOverdue: `boolean`, objectives: `String`, notes: `String`, utilisations: `List<GrantUtilizationResponseDTO>`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### POST /api/v1/auth/finance/grants/{id}/status
**Method:** POST
**Endpoint:** /api/v1/auth/finance/grants/{id}/status
**Description:** REST endpoint to support FINANCE workflow operations in GrantController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:grants:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: GrantController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `status` (Query Parameter)
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `GrantResponseDTO` { id: `Long`, uuid: `UUID`, grantingAgency: `String`, grantTitle: `String`, grantReference: `String`, principalInvestigator: `String`, department: `String`, sanctionedAmount: `BigDecimal`, receivedAmount: `BigDecimal`, utilisedAmount: `BigDecimal`, availableBalance: `BigDecimal`, utilisationPct: `double`, startDate: `LocalDate`, endDate: `LocalDate`, status: `GrantStatus`, incomeAccountId: `Long`, incomeAccountCode: `String`, incomeAccountName: `String`, complianceDueDate: `LocalDate`, nearingExpiry: `boolean`, complianceOverdue: `boolean`, objectives: `String`, notes: `String`, utilisations: `List<GrantUtilizationResponseDTO>`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### GET /api/v1/auth/finance/grants/{id}/utilisations
**Method:** GET
**Endpoint:** /api/v1/auth/finance/grants/{id}/utilisations
**Description:** REST endpoint to support FINANCE workflow operations in GrantController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:grants:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: GrantController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<GrantUtilizationResponseDTO>` { id: `Long`, grantId: `Long`, grantTitle: `String`, utilisationDate: `LocalDate`, description: `String`, expenseCategory: `String`, amount: `BigDecimal`, referenceDocument: `String`, glEntryId: `Long`, approvedBy: `String`, notes: `String`, createdAt: `LocalDateTime` }

---

### ALL /api/v1/auth/finance/installments/api/v1/auth/finance/installments
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/installments/api/v1/auth/finance/installments
**Description:** REST endpoint to support FINANCE workflow operations in InstallmentController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: InstallmentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/installments/assignments
**Method:** GET
**Endpoint:** /api/v1/auth/finance/installments/assignments
**Description:** REST endpoint to support FINANCE workflow operations in InstallmentController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: InstallmentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<InstallmentAssignmentDTO>` { id: `Long`, studentId: `Long`, studentName: `String`, planName: `String`, planId: `Long`, totalAmount: `BigDecimal`, paidInstallments: `Integer`, totalInstallments: `Integer`, nextDueDate: `LocalDate`, nextDueAmount: `BigDecimal`, status: `String` }

---

### POST /api/v1/auth/finance/installments/assignments
**Method:** POST
**Endpoint:** /api/v1/auth/finance/installments/assignments
**Description:** REST endpoint to support FINANCE workflow operations in InstallmentController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: InstallmentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `InstallmentAssignmentDTO` { id: `Long`, studentId: `Long`, studentName: `String`, planName: `String`, planId: `Long`, totalAmount: `BigDecimal`, paidInstallments: `Integer`, totalInstallments: `Integer`, nextDueDate: `LocalDate`, nextDueAmount: `BigDecimal`, status: `String` }

---

### GET /api/v1/auth/finance/installments/plans
**Method:** GET
**Endpoint:** /api/v1/auth/finance/installments/plans
**Description:** REST endpoint to support FINANCE workflow operations in InstallmentController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: InstallmentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<InstallmentPlanDTO>` { id: `Long`, name: `String`, numberOfInstallments: `Integer`, intervalDays: `Integer`, description: `String`, gracePeriodDays: `Integer`, assignedStudents: `Integer` }

---

### POST /api/v1/auth/finance/installments/plans
**Method:** POST
**Endpoint:** /api/v1/auth/finance/installments/plans
**Description:** REST endpoint to support FINANCE workflow operations in InstallmentController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: InstallmentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `InstallmentPlanDTO` { id: `Long`, name: `String`, numberOfInstallments: `Integer`, intervalDays: `Integer`, description: `String`, gracePeriodDays: `Integer`, assignedStudents: `Integer` }

---

### ALL /api/v1/auth/finance/invoices/api/v1/auth/finance/invoices
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/invoices/api/v1/auth/finance/invoices
**Description:** REST endpoint to support FINANCE workflow operations in InvoiceController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: InvoiceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/auth/finance/invoices/generate-single/{studentId}
**Method:** POST
**Endpoint:** /api/v1/auth/finance/invoices/generate-single/{studentId}
**Description:** POST /api/v1/finance/invoices/generate-single/{studentId} Generates a new invoice on-demand for a single student.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: InvoiceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `studentId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `InvoiceResponseDTO` { invoiceId: `Long`, studentId: `Long`, studentName: `String`, invoiceNumber: `String`, issueDate: `LocalDate`, dueDate: `LocalDate`, totalAmount: `BigDecimal`, lateFeeAmount: `BigDecimal`, paidAmount: `BigDecimal`, status: `InvoiceStatus`, lineItems: `List<InvoiceLineItemResponseDTO>`, createdAt: `LocalDateTime` }

---

### GET /api/v1/auth/finance/invoices/{invoiceId}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/invoices/{invoiceId}
**Description:** GET /api/v1/finance/invoices/{invoiceId} Retrieves the complete detail of a single invoice, including line items.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: InvoiceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `invoiceId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `InvoiceResponseDTO` { invoiceId: `Long`, studentId: `Long`, studentName: `String`, invoiceNumber: `String`, issueDate: `LocalDate`, dueDate: `LocalDate`, totalAmount: `BigDecimal`, lateFeeAmount: `BigDecimal`, paidAmount: `BigDecimal`, status: `InvoiceStatus`, lineItems: `List<InvoiceLineItemResponseDTO>`, createdAt: `LocalDateTime` }

---

### POST /api/v1/auth/finance/invoices/{invoiceId}/apply-late-fee
**Method:** POST
**Endpoint:** /api/v1/auth/finance/invoices/{invoiceId}/apply-late-fee
**Description:** POST /api/v1/finance/invoices/{invoiceId}/apply-late-fee Manually applies a late fee to an overdue invoice.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: InvoiceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `invoiceId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `InvoiceResponseDTO` { invoiceId: `Long`, studentId: `Long`, studentName: `String`, invoiceNumber: `String`, issueDate: `LocalDate`, dueDate: `LocalDate`, totalAmount: `BigDecimal`, lateFeeAmount: `BigDecimal`, paidAmount: `BigDecimal`, status: `InvoiceStatus`, lineItems: `List<InvoiceLineItemResponseDTO>`, createdAt: `LocalDateTime` }

---

### POST /api/v1/auth/finance/invoices/{invoiceId}/cancel
**Method:** POST
**Endpoint:** /api/v1/auth/finance/invoices/{invoiceId}/cancel
**Description:** POST /api/v1/finance/invoices/{invoiceId}/cancel Cancels an invoice (e.g., if issued in error).

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: InvoiceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `invoiceId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `InvoiceResponseDTO` { invoiceId: `Long`, studentId: `Long`, studentName: `String`, invoiceNumber: `String`, issueDate: `LocalDate`, dueDate: `LocalDate`, totalAmount: `BigDecimal`, lateFeeAmount: `BigDecimal`, paidAmount: `BigDecimal`, status: `InvoiceStatus`, lineItems: `List<InvoiceLineItemResponseDTO>`, createdAt: `LocalDateTime` }

---

### GET /api/v1/auth/finance/invoices/{invoiceId}/receipt
**Method:** GET
**Endpoint:** /api/v1/auth/finance/invoices/{invoiceId}/receipt
**Description:** GET /api/v1/finance/invoices/{invoiceId}/receipt Downloads a PDF receipt for a fully paid invoice.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: InvoiceController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `invoiceId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<byte[]>`

---

### ALL /api/v1/auth/finance/late-fee-rules/api/v1/auth/finance/late-fee-rules
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/late-fee-rules/api/v1/auth/finance/late-fee-rules
**Description:** REST endpoint to support FINANCE workflow operations in LateFeeRuleController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: LateFeeRuleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/finance/late-fee-rules/{ruleId}
**Method:** PUT
**Endpoint:** /api/v1/auth/finance/late-fee-rules/{ruleId}
**Description:** PUT /api/v1/finance/late-fee-rules/{ruleId} Updates an existing late fee rule.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: LateFeeRuleController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `ruleId` (Path Variable)
**body ->**
```json
{
  "ruleName": "string",
  "daysAfterDue": 0,
  "fineType": "FineType",
  "fineValue": 0,
  "isActive": true,
  "structureId": 0
}
```
**Request DTO ->** `LateFeeRuleCreateDTO` { ruleName: `String`, daysAfterDue: `int`, fineType: `FineType`, fineValue: `BigDecimal`, isActive: `boolean`, structureId: `Long` }
**Response DTO ->** `ResponseEntity` wrapping `LateFeeRuleResponseDTO` { ruleId: `Long`, ruleName: `String`, daysAfterDue: `int`, fineType: `FineType`, fineValue: `BigDecimal`, isActive: `boolean`, structureId: `Long` }

---

### ALL /api/v1/auth/dashboard/api/v1/auth/dashboard
**Method:** ALL
**Endpoint:** /api/v1/auth/dashboard/api/v1/auth/dashboard
**Description:** REST endpoint to support FINANCE workflow operations in MasterDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: MasterDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/dashboard/forecast
**Method:** GET
**Endpoint:** /api/v1/auth/dashboard/forecast
**Description:** REST endpoint to support FINANCE workflow operations in MasterDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: MasterDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `DashboardForecastDTO` { revenueEomForecast: `BigDecimal`, revenueMonthTarget: `BigDecimal`, revenueTrajectoryPct: `double`, revenueTrajectory: `String`, attendanceTrend: `String`, attendanceTrendSlope: `double`, currentStaffAttendancePct: `double`, outstandingRisk: `String`, outstandingGrowthRate: `double` }

---

### GET /api/v1/auth/dashboard/kpi-trends
**Method:** GET
**Endpoint:** /api/v1/auth/dashboard/kpi-trends
**Description:** REST endpoint to support FINANCE workflow operations in MasterDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: MasterDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `DashboardKpiTrendsDTO` { revenueMtd: `BigDecimal`, revenuePriorMtd: `BigDecimal`, revenueDeltaPct: `double`, outstandingMtd: `BigDecimal`, outstandingPriorMtd: `BigDecimal`, outstandingDeltaPct: `double`, pendingInvoiceCount: `long`, payrollMtd: `BigDecimal`, payrollPriorMtd: `BigDecimal`, payrollDeltaPct: `double` }

---

### GET /api/v1/auth/dashboard/master-analytics
**Method:** GET
**Endpoint:** /api/v1/auth/dashboard/master-analytics
**Description:** REST endpoint to support FINANCE workflow operations in MasterDashboardController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: MasterDashboardController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `MasterAnalyticsResponseDTO` { financePayrollTrend: `List<FinancePayrollPoint>`, attendanceTrend: `List<AttendancePoint>`, demographics: `List<DemographicPoint>`, month: `String`, expected: `BigDecimal`, collected: `BigDecimal`, payroll: `BigDecimal`, day: `String`, student: `double`, staff: `double`, name: `String`, value: `long`, color: `String` }

---

### ALL /api/v1/auth/finance/misc-receipts/api/v1/auth/finance/misc-receipts
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/misc-receipts/api/v1/auth/finance/misc-receipts
**Description:** REST endpoint to support FINANCE workflow operations in MiscellaneousReceiptController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: MiscellaneousReceiptController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/misc-receipts/{id}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/misc-receipts/{id}
**Description:** REST endpoint to support FINANCE workflow operations in MiscellaneousReceiptController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:misc_receipts:read','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: MiscellaneousReceiptController
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

### ALL /api/v1/auth/finance/parent/api/v1/auth/finance/parent
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/parent/api/v1/auth/finance/parent
**Description:** Controller for Parent-Facing financial endpoints. Base path: /api/v1/finance/parent

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('PARENT', 'GUARDIAN')
- `Class Context`: ParentFinanceController
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

### GET /api/v1/auth/finance/parent/invoices/for-student/{studentId}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/parent/invoices/for-student/{studentId}
**Description:** GET /api/v1/finance/parent/invoices/for-student/{studentId} Retrieves all invoices for a specific student.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('PARENT', 'GUARDIAN')
- `Class Context`: ParentFinanceController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `studentId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<InvoiceResponseDTO>` { invoiceId: `Long`, studentId: `Long`, studentName: `String`, invoiceNumber: `String`, issueDate: `LocalDate`, dueDate: `LocalDate`, totalAmount: `BigDecimal`, lateFeeAmount: `BigDecimal`, paidAmount: `BigDecimal`, status: `InvoiceStatus`, lineItems: `List<InvoiceLineItemResponseDTO>`, createdAt: `LocalDateTime` }

---

### GET /api/v1/auth/finance/parent/invoices/{invoiceId}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/parent/invoices/{invoiceId}
**Description:** GET /api/v1/finance/parent/invoices/{invoiceId} Gets the detailed line-item breakdown of a specific invoice.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('PARENT', 'GUARDIAN')
- `Class Context`: ParentFinanceController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `invoiceId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `InvoiceResponseDTO` { invoiceId: `Long`, studentId: `Long`, studentName: `String`, invoiceNumber: `String`, issueDate: `LocalDate`, dueDate: `LocalDate`, totalAmount: `BigDecimal`, lateFeeAmount: `BigDecimal`, paidAmount: `BigDecimal`, status: `InvoiceStatus`, lineItems: `List<InvoiceLineItemResponseDTO>`, createdAt: `LocalDateTime` }

---

### GET /api/v1/auth/finance/parent/payments/for-student/{studentId}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/parent/payments/for-student/{studentId}
**Description:** GET /api/v1/finance/parent/payments/for-student/{studentId} Retrieves all successful payments made for a specific student.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('PARENT', 'GUARDIAN')
- `Class Context`: ParentFinanceController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `studentId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<PaymentResponseDTO>` { paymentId: `Long`, invoiceId: `Long`, studentId: `Long`, studentName: `String`, transactionId: `String`, paymentDate: `LocalDateTime`, amountPaid: `BigDecimal`, paymentMethod: `PaymentMethod`, status: `PaymentStatus`, notes: `String` }

---

### POST /api/v1/auth/finance/parent/payments/initiate
**Method:** POST
**Endpoint:** /api/v1/auth/finance/parent/payments/initiate
**Description:** POST /api/v1/finance/parent/payments/initiate Initiates an online payment for an invoice. Body: { "invoiceId": 1, "amount": 20000.00 }

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('PARENT', 'GUARDIAN')
- `Class Context`: ParentFinanceController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "invoiceId": 0,
  "amount": 0
}
```
**Request DTO ->** `InitiatePaymentRequestDTO` { invoiceId: `Long`, amount: `BigDecimal` }
**Response DTO ->** `ResponseEntity` wrapping `InitiatePaymentResponseDTO` { clientSecret: `String`, paymentGatewayUrl: `String`, orderId: `String` }

---

### POST /api/v1/auth/finance/parent/payments/verify
**Method:** POST
**Endpoint:** /api/v1/auth/finance/parent/payments/verify
**Description:** POST /api/v1/finance/parent/payments/verify Verifies the payment with Razorpay after the client-side popup succeeds.

**Security Requirement:**
- `Authority / Scope`: hasAnyRole('PARENT', 'GUARDIAN')
- `Class Context`: ParentFinanceController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "gatewayTransactionId": "string",
  "orderId": "string",
  "signature": "string"
}
```
**Request DTO ->** `VerifyPaymentRequestDTO` { gatewayTransactionId: `String`, orderId: `String`, signature: `String` }
**Response DTO ->** `ResponseEntity` wrapping `PaymentResponseDTO` { paymentId: `Long`, invoiceId: `Long`, studentId: `Long`, studentName: `String`, transactionId: `String`, paymentDate: `LocalDateTime`, amountPaid: `BigDecimal`, paymentMethod: `PaymentMethod`, status: `PaymentStatus`, notes: `String` }

---

### ALL /api/v1/auth/finance/payments/api/v1/auth/finance/payments
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/payments/api/v1/auth/finance/payments
**Description:** REST endpoint to support FINANCE workflow operations in PaymentController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PaymentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/payments/invoice/{invoiceId}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/payments/invoice/{invoiceId}
**Description:** GET /api/v1/auth/finance/payments/invoice/{invoiceId} Retrieves all payments associated with a specific invoice.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PaymentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `invoiceId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<PaymentResponseDTO>` { paymentId: `Long`, invoiceId: `Long`, studentId: `Long`, studentName: `String`, transactionId: `String`, paymentDate: `LocalDateTime`, amountPaid: `BigDecimal`, paymentMethod: `PaymentMethod`, status: `PaymentStatus`, notes: `String` }

---

### POST /api/v1/auth/finance/payments/record-offline
**Method:** POST
**Endpoint:** /api/v1/auth/finance/payments/record-offline
**Description:** POST /api/v1/finance/payments/record-offline Manually records a payment (Cash, Check) against an invoice.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PaymentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "invoiceId": 0,
  "studentId": 0,
  "amountPaid": 0,
  "paymentMethod": "PaymentMethod",
  "transactionId": "string",
  "paymentDate": "2026-05-20",
  "notes": "string"
}
```
**Request DTO ->** `RecordOfflinePaymentDTO` { invoiceId: `Long`, studentId: `Long`, amountPaid: `BigDecimal`, paymentMethod: `PaymentMethod`, transactionId: `String`, paymentDate: `LocalDateTime`, notes: `String` }
**Response DTO ->** `ResponseEntity` wrapping `PaymentResponseDTO` { paymentId: `Long`, invoiceId: `Long`, studentId: `Long`, studentName: `String`, transactionId: `String`, paymentDate: `LocalDateTime`, amountPaid: `BigDecimal`, paymentMethod: `PaymentMethod`, status: `PaymentStatus`, notes: `String` }

---

### GET /api/v1/auth/finance/payments/{paymentId}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/payments/{paymentId}
**Description:** GET /api/v1/finance/payments/{paymentId} Retrieves details for a single payment transaction.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PaymentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `paymentId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `PaymentResponseDTO` { paymentId: `Long`, invoiceId: `Long`, studentId: `Long`, studentName: `String`, transactionId: `String`, paymentDate: `LocalDateTime`, amountPaid: `BigDecimal`, paymentMethod: `PaymentMethod`, status: `PaymentStatus`, notes: `String` }

---

### PUT /api/v1/auth/finance/payments/{paymentId}
**Method:** PUT
**Endpoint:** /api/v1/auth/finance/payments/{paymentId}
**Description:** PUT /api/v1/finance/payments/{paymentId} Updates an existing payment record (e.g., to add notes, update check status).

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PaymentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `paymentId` (Path Variable)
**body ->**
```json
{
  "transactionId": "string",
  "paymentMethod": "PaymentMethod",
  "status": "PaymentStatus",
  "notes": "string"
}
```
**Request DTO ->** `PaymentUpdateDTO` { transactionId: `String`, paymentMethod: `PaymentMethod`, status: `PaymentStatus`, notes: `String` }
**Response DTO ->** `ResponseEntity` wrapping `PaymentResponseDTO` { paymentId: `Long`, invoiceId: `Long`, studentId: `Long`, studentName: `String`, transactionId: `String`, paymentDate: `LocalDateTime`, amountPaid: `BigDecimal`, paymentMethod: `PaymentMethod`, status: `PaymentStatus`, notes: `String` }

---

### GET /api/v1/auth/finance/payments/{paymentId}/receipt
**Method:** GET
**Endpoint:** /api/v1/auth/finance/payments/{paymentId}/receipt
**Description:** GET /api/v1/auth/finance/payments/{paymentId}/receipt Generates a PDF receipt for a specific payment transaction.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PaymentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `paymentId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<byte[]>`

---

### ALL /api/v1/auth/finance/purchase-orders/api/v1/auth/finance/purchase-orders
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/purchase-orders/api/v1/auth/finance/purchase-orders
**Description:** /auth/finance/purchase-orders

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: PurchaseOrderController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/purchase-orders/grns
**Method:** GET
**Endpoint:** /api/v1/auth/finance/purchase-orders/grns
**Description:** REST endpoint to support FINANCE workflow operations in PurchaseOrderController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:procurement:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: PurchaseOrderController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<GRNResponseDTO>` { id: `Long`, uuid: `UUID`, grnNumber: `String`, purchaseOrderId: `Long`, poNumber: `String`, vendorId: `Long`, vendorName: `String`, receiptDate: `LocalDate`, receivedBy: `String`, vendorChallanNumber: `String`, status: `GRNStatus`, notes: `String`, items: `List<GRNItemResponseDTO>`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### POST /api/v1/auth/finance/purchase-orders/grns
**Method:** POST
**Endpoint:** /api/v1/auth/finance/purchase-orders/grns
**Description:** REST endpoint to support FINANCE workflow operations in PurchaseOrderController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:procurement:read','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: PurchaseOrderController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "purchaseOrderId": 0,
  "receiptDate": "2026-05-20",
  "receivedBy": "string",
  "vendorChallanNumber": "string",
  "notes": "string",
  "items": [
    {
      "poItemId": 0
    }
  ]
}
```
**Request DTO ->** `GRNRequestDTO` { purchaseOrderId: `Long`, receiptDate: `LocalDate`, receivedBy: `String`, vendorChallanNumber: `String`, notes: `String`, items: `List<GRNItemRequestDTO>` }
**Response DTO ->** `ResponseEntity` wrapping `GRNResponseDTO` { id: `Long`, uuid: `UUID`, grnNumber: `String`, purchaseOrderId: `Long`, poNumber: `String`, vendorId: `Long`, vendorName: `String`, receiptDate: `LocalDate`, receivedBy: `String`, vendorChallanNumber: `String`, status: `GRNStatus`, notes: `String`, items: `List<GRNItemResponseDTO>`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### GET /api/v1/auth/finance/purchase-orders/grns/{id}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/purchase-orders/grns/{id}
**Description:** REST endpoint to support FINANCE workflow operations in PurchaseOrderController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:procurement:read','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: PurchaseOrderController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `GRNResponseDTO` { id: `Long`, uuid: `UUID`, grnNumber: `String`, purchaseOrderId: `Long`, poNumber: `String`, vendorId: `Long`, vendorName: `String`, receiptDate: `LocalDate`, receivedBy: `String`, vendorChallanNumber: `String`, status: `GRNStatus`, notes: `String`, items: `List<GRNItemResponseDTO>`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### GET /api/v1/auth/finance/purchase-orders/{id}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/purchase-orders/{id}
**Description:** REST endpoint to support FINANCE workflow operations in PurchaseOrderController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:procurement:read','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: PurchaseOrderController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `PurchaseOrderResponseDTO` { id: `Long`, uuid: `UUID`, poNumber: `String`, vendorId: `Long`, vendorName: `String`, vendorCode: `String`, department: `String`, referenceBudgetId: `Long`, referenceBudgetName: `String`, orderDate: `LocalDate`, expectedDeliveryDate: `LocalDate`, description: `String`, totalBeforeTax: `BigDecimal`, taxAmount: `BigDecimal`, totalAmount: `BigDecimal`, status: `PurchaseOrderStatus`, approvedBy: `String`, notes: `String`, items: `List<POItemResponseDTO>`, grnCount: `int`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### POST /api/v1/auth/finance/purchase-orders/{id}/approve
**Method:** POST
**Endpoint:** /api/v1/auth/finance/purchase-orders/{id}/approve
**Description:** REST endpoint to support FINANCE workflow operations in PurchaseOrderController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:procurement:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: PurchaseOrderController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `PurchaseOrderResponseDTO` { id: `Long`, uuid: `UUID`, poNumber: `String`, vendorId: `Long`, vendorName: `String`, vendorCode: `String`, department: `String`, referenceBudgetId: `Long`, referenceBudgetName: `String`, orderDate: `LocalDate`, expectedDeliveryDate: `LocalDate`, description: `String`, totalBeforeTax: `BigDecimal`, taxAmount: `BigDecimal`, totalAmount: `BigDecimal`, status: `PurchaseOrderStatus`, approvedBy: `String`, notes: `String`, items: `List<POItemResponseDTO>`, grnCount: `int`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### POST /api/v1/auth/finance/purchase-orders/{id}/cancel
**Method:** POST
**Endpoint:** /api/v1/auth/finance/purchase-orders/{id}/cancel
**Description:** REST endpoint to support FINANCE workflow operations in PurchaseOrderController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:procurement:approve','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: PurchaseOrderController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `PurchaseOrderResponseDTO` { id: `Long`, uuid: `UUID`, poNumber: `String`, vendorId: `Long`, vendorName: `String`, vendorCode: `String`, department: `String`, referenceBudgetId: `Long`, referenceBudgetName: `String`, orderDate: `LocalDate`, expectedDeliveryDate: `LocalDate`, description: `String`, totalBeforeTax: `BigDecimal`, taxAmount: `BigDecimal`, totalAmount: `BigDecimal`, status: `PurchaseOrderStatus`, approvedBy: `String`, notes: `String`, items: `List<POItemResponseDTO>`, grnCount: `int`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### GET /api/v1/auth/finance/purchase-orders/{id}/grns
**Method:** GET
**Endpoint:** /api/v1/auth/finance/purchase-orders/{id}/grns
**Description:** REST endpoint to support FINANCE workflow operations in PurchaseOrderController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:procurement:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: PurchaseOrderController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<GRNResponseDTO>` { id: `Long`, uuid: `UUID`, grnNumber: `String`, purchaseOrderId: `Long`, poNumber: `String`, vendorId: `Long`, vendorName: `String`, receiptDate: `LocalDate`, receivedBy: `String`, vendorChallanNumber: `String`, status: `GRNStatus`, notes: `String`, items: `List<GRNItemResponseDTO>`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### POST /api/v1/auth/finance/purchase-orders/{id}/reject
**Method:** POST
**Endpoint:** /api/v1/auth/finance/purchase-orders/{id}/reject
**Description:** REST endpoint to support FINANCE workflow operations in PurchaseOrderController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:procurement:approve','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: PurchaseOrderController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `reason` (Query Parameter)
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `PurchaseOrderResponseDTO` { id: `Long`, uuid: `UUID`, poNumber: `String`, vendorId: `Long`, vendorName: `String`, vendorCode: `String`, department: `String`, referenceBudgetId: `Long`, referenceBudgetName: `String`, orderDate: `LocalDate`, expectedDeliveryDate: `LocalDate`, description: `String`, totalBeforeTax: `BigDecimal`, taxAmount: `BigDecimal`, totalAmount: `BigDecimal`, status: `PurchaseOrderStatus`, approvedBy: `String`, notes: `String`, items: `List<POItemResponseDTO>`, grnCount: `int`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### POST /api/v1/auth/finance/purchase-orders/{id}/submit
**Method:** POST
**Endpoint:** /api/v1/auth/finance/purchase-orders/{id}/submit
**Description:** REST endpoint to support FINANCE workflow operations in PurchaseOrderController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:procurement:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: PurchaseOrderController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `PurchaseOrderResponseDTO` { id: `Long`, uuid: `UUID`, poNumber: `String`, vendorId: `Long`, vendorName: `String`, vendorCode: `String`, department: `String`, referenceBudgetId: `Long`, referenceBudgetName: `String`, orderDate: `LocalDate`, expectedDeliveryDate: `LocalDate`, description: `String`, totalBeforeTax: `BigDecimal`, taxAmount: `BigDecimal`, totalAmount: `BigDecimal`, status: `PurchaseOrderStatus`, approvedBy: `String`, notes: `String`, items: `List<POItemResponseDTO>`, grnCount: `int`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### ALL /api/v1/auth/finance/refunds/api/v1/auth/finance/refunds
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/refunds/api/v1/auth/finance/refunds
**Description:** REST endpoint to support FINANCE workflow operations in RefundController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: RefundController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PUT /api/v1/auth/finance/refunds/{id}/status
**Method:** PUT
**Endpoint:** /api/v1/auth/finance/refunds/{id}/status
**Description:** REST endpoint to support FINANCE workflow operations in RefundController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: RefundController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `status` (Query Parameter)
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `RefundRecordDTO` { id: `Long`, studentId: `Long`, studentName: `String`, paymentId: `Long`, invoiceNumber: `String`, refundAmount: `BigDecimal`, reason: `String`, refundMethod: `String`, status: `String`, remarks: `String`, requestedAt: `String`, processedAt: `String` }

---

### ALL /api/v1/auth/finance/reminders/api/v1/auth/finance/reminders
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/reminders/api/v1/auth/finance/reminders
**Description:** REST endpoint to support FINANCE workflow operations in ReminderController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ReminderController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/reminders/logs
**Method:** GET
**Endpoint:** /api/v1/auth/finance/reminders/logs
**Description:** REST endpoint to support FINANCE workflow operations in ReminderController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ReminderController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<ReminderLogDTO>` { id: `Long`, studentId: `Long`, studentName: `String`, templateName: `String`, channel: `String`, invoiceNumber: `String`, amountDue: `BigDecimal`, status: `String`, sentAt: `String` }

---

### GET /api/v1/auth/finance/reminders/templates
**Method:** GET
**Endpoint:** /api/v1/auth/finance/reminders/templates
**Description:** REST endpoint to support FINANCE workflow operations in ReminderController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ReminderController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<ReminderTemplateDTO>` { id: `Long`, name: `String`, subject: `String`, body: `String`, channel: `String`, triggerType: `String`, triggerDays: `Integer`, isActive: `Boolean` }

---

### POST /api/v1/auth/finance/reminders/templates
**Method:** POST
**Endpoint:** /api/v1/auth/finance/reminders/templates
**Description:** REST endpoint to support FINANCE workflow operations in ReminderController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ReminderController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `ReminderTemplateDTO` { id: `Long`, name: `String`, subject: `String`, body: `String`, channel: `String`, triggerType: `String`, triggerDays: `Integer`, isActive: `Boolean` }

---

### PUT /api/v1/auth/finance/reminders/templates/{id}/toggle
**Method:** PUT
**Endpoint:** /api/v1/auth/finance/reminders/templates/{id}/toggle
**Description:** REST endpoint to support FINANCE workflow operations in ReminderController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ReminderController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `ReminderTemplateDTO` { id: `Long`, name: `String`, subject: `String`, body: `String`, channel: `String`, triggerType: `String`, triggerDays: `Integer`, isActive: `Boolean` }

---

### POST /api/v1/auth/finance/reminders/trigger-bulk
**Method:** POST
**Endpoint:** /api/v1/auth/finance/reminders/trigger-bulk
**Description:** REST endpoint to support FINANCE workflow operations in ReminderController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ReminderController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### ALL /api/v1/auth/finance/scholarships/api/v1/auth/finance/scholarships
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/scholarships/api/v1/auth/finance/scholarships
**Description:** REST endpoint to support FINANCE workflow operations in ScholarshipController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScholarshipController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/scholarships/assignments
**Method:** GET
**Endpoint:** /api/v1/auth/finance/scholarships/assignments
**Description:** REST endpoint to support FINANCE workflow operations in ScholarshipController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScholarshipController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<ScholarshipAssignmentDTO>` { id: `Long`, studentId: `Long`, studentName: `String`, scholarshipName: `String`, scholarshipId: `Long`, discountType: `String`, discountValue: `BigDecimal`, effectiveFrom: `LocalDate`, effectiveTo: `LocalDate`, reason: `String`, status: `String` }

---

### POST /api/v1/auth/finance/scholarships/assignments
**Method:** POST
**Endpoint:** /api/v1/auth/finance/scholarships/assignments
**Description:** REST endpoint to support FINANCE workflow operations in ScholarshipController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScholarshipController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `ScholarshipAssignmentDTO` { id: `Long`, studentId: `Long`, studentName: `String`, scholarshipName: `String`, scholarshipId: `Long`, discountType: `String`, discountValue: `BigDecimal`, effectiveFrom: `LocalDate`, effectiveTo: `LocalDate`, reason: `String`, status: `String` }

---

### DELETE /api/v1/auth/finance/scholarships/assignments/bulk
**Method:** DELETE
**Endpoint:** /api/v1/auth/finance/scholarships/assignments/bulk
**Description:** REST endpoint to support FINANCE workflow operations in ScholarshipController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScholarshipController
**Headers ->**
- `None (Public Endpoint)`
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

### DELETE /api/v1/auth/finance/scholarships/assignments/{id}
**Method:** DELETE
**Endpoint:** /api/v1/auth/finance/scholarships/assignments/{id}
**Description:** REST endpoint to support FINANCE workflow operations in ScholarshipController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScholarshipController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### PUT /api/v1/auth/finance/scholarships/assignments/{id}/activate
**Method:** PUT
**Endpoint:** /api/v1/auth/finance/scholarships/assignments/{id}/activate
**Description:** REST endpoint to support FINANCE workflow operations in ScholarshipController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScholarshipController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `ScholarshipAssignmentDTO` { id: `Long`, studentId: `Long`, studentName: `String`, scholarshipName: `String`, scholarshipId: `Long`, discountType: `String`, discountValue: `BigDecimal`, effectiveFrom: `LocalDate`, effectiveTo: `LocalDate`, reason: `String`, status: `String` }

---

### PUT /api/v1/auth/finance/scholarships/assignments/{id}/revoke
**Method:** PUT
**Endpoint:** /api/v1/auth/finance/scholarships/assignments/{id}/revoke
**Description:** REST endpoint to support FINANCE workflow operations in ScholarshipController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScholarshipController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `ScholarshipAssignmentDTO` { id: `Long`, studentId: `Long`, studentName: `String`, scholarshipName: `String`, scholarshipId: `Long`, discountType: `String`, discountValue: `BigDecimal`, effectiveFrom: `LocalDate`, effectiveTo: `LocalDate`, reason: `String`, status: `String` }

---

### GET /api/v1/auth/finance/scholarships/types
**Method:** GET
**Endpoint:** /api/v1/auth/finance/scholarships/types
**Description:** REST endpoint to support FINANCE workflow operations in ScholarshipController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScholarshipController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<ScholarshipTypeDTO>` { id: `Long`, name: `String`, description: `String`, discountType: `String`, discountValue: `BigDecimal`, eligibilityCriteria: `String`, maxRecipients: `Integer`, activeCount: `Integer`, totalDiscountIssued: `BigDecimal` }

---

### POST /api/v1/auth/finance/scholarships/types
**Method:** POST
**Endpoint:** /api/v1/auth/finance/scholarships/types
**Description:** REST endpoint to support FINANCE workflow operations in ScholarshipController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ScholarshipController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `ScholarshipTypeDTO` { id: `Long`, name: `String`, description: `String`, discountType: `String`, discountValue: `BigDecimal`, eligibilityCriteria: `String`, maxRecipients: `Integer`, activeCount: `Integer`, totalDiscountIssued: `BigDecimal` }

---

### ALL /api/v1/auth/finance/student-maps/api/v1/auth/finance/student-maps
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/student-maps/api/v1/auth/finance/student-maps
**Description:** REST endpoint to support FINANCE workflow operations in StudentFeeMapController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentFeeMapController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/finance/student-maps/bulk
**Method:** DELETE
**Endpoint:** /api/v1/auth/finance/student-maps/bulk
**Description:** DELETE /api/v1/finance/student-maps/bulk Deletes multiple student-fee structure mappings in one batch.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentFeeMapController
**Headers ->**
- `None (Public Endpoint)`
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

### POST /api/v1/auth/finance/student-maps/bulk
**Method:** POST
**Endpoint:** /api/v1/auth/finance/student-maps/bulk
**Description:** POST /api/v1/finance/student-maps/bulk Creates multiple student-fee structure mappings in one batch.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentFeeMapController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
[
  {
    "studentId": 0,
    "structureId": 0,
    "effectiveDate": "2026-05-20",
    "notes": "string"
  }
]
```
**Request DTO ->** `List<StudentFeeMapCreateDTO>` { studentId: `Long`, structureId: `Long`, effectiveDate: `LocalDate`, notes: `String` }
**Response DTO ->** `ResponseEntity` wrapping `List<StudentFeeMapResponseDTO>` { mapId: `Long`, studentId: `Long`, studentName: `String`, structureId: `Long`, effectiveDate: `LocalDate`, notes: `String` }

---

### DELETE /api/v1/auth/finance/student-maps/{mapId}
**Method:** DELETE
**Endpoint:** /api/v1/auth/finance/student-maps/{mapId}
**Description:** DELETE /api/v1/finance/student-maps/{mapId} Deletes a student-fee structure mapping.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentFeeMapController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `mapId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### GET /api/v1/auth/finance/student-maps/{mapId}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/student-maps/{mapId}
**Description:** GET /api/v1/finance/student-maps/{mapId} Retrieves a single student-fee structure mapping by its ID.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentFeeMapController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `mapId` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StudentFeeMapResponseDTO` { mapId: `Long`, studentId: `Long`, studentName: `String`, structureId: `Long`, effectiveDate: `LocalDate`, notes: `String` }

---

### PUT /api/v1/auth/finance/student-maps/{mapId}
**Method:** PUT
**Endpoint:** /api/v1/auth/finance/student-maps/{mapId}
**Description:** PUT /api/v1/finance/student-maps/{mapId} Updates an existing student-fee structure mapping.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: StudentFeeMapController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `mapId` (Path Variable)
**body ->**
```json
{
  "studentId": 0,
  "structureId": 0,
  "effectiveDate": "2026-05-20",
  "notes": "string"
}
```
**Request DTO ->** `StudentFeeMapUpdateDTO` { studentId: `Long`, structureId: `Long`, effectiveDate: `LocalDate`, notes: `String` }
**Response DTO ->** `ResponseEntity` wrapping `StudentFeeMapResponseDTO` { mapId: `Long`, studentId: `Long`, studentName: `String`, structureId: `Long`, effectiveDate: `LocalDate`, notes: `String` }

---

### ALL /api/v1/auth/finance/vendor-bills/api/v1/auth/finance/vendor-bills
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/vendor-bills/api/v1/auth/finance/vendor-bills
**Description:** /auth/finance/vendor-bills

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: VendorBillController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /api/v1/auth/finance/vendor-bills/outstanding-payables
**Method:** GET
**Endpoint:** /api/v1/auth/finance/vendor-bills/outstanding-payables
**Description:** REST endpoint to support FINANCE workflow operations in VendorBillController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:ap:read','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: VendorBillController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<BigDecimal>`

---

### GET /api/v1/auth/finance/vendor-bills/overdue
**Method:** GET
**Endpoint:** /api/v1/auth/finance/vendor-bills/overdue
**Description:** REST endpoint to support FINANCE workflow operations in VendorBillController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:ap:read','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: VendorBillController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<VendorBillResponseDTO>` { id: `Long`, uuid: `UUID`, billNumber: `String`, vendorInvoiceNumber: `String`, vendorId: `Long`, vendorName: `String`, vendorCode: `String`, purchaseOrderId: `Long`, poNumber: `String`, grnId: `Long`, grnNumber: `String`, billDate: `LocalDate`, dueDate: `LocalDate`, billAmount: `BigDecimal`, taxAmount: `BigDecimal`, totalPayable: `BigDecimal`, status: `VendorBillStatus`, matchResultNotes: `String`, matchedBy: `String`, paymentDate: `LocalDate`, paymentReference: `String`, glEntryId: `Long`, notes: `String`, overdue: `boolean`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### GET /api/v1/auth/finance/vendor-bills/{id}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/vendor-bills/{id}
**Description:** REST endpoint to support FINANCE workflow operations in VendorBillController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:ap:read','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: VendorBillController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `VendorBillResponseDTO` { id: `Long`, uuid: `UUID`, billNumber: `String`, vendorInvoiceNumber: `String`, vendorId: `Long`, vendorName: `String`, vendorCode: `String`, purchaseOrderId: `Long`, poNumber: `String`, grnId: `Long`, grnNumber: `String`, billDate: `LocalDate`, dueDate: `LocalDate`, billAmount: `BigDecimal`, taxAmount: `BigDecimal`, totalPayable: `BigDecimal`, status: `VendorBillStatus`, matchResultNotes: `String`, matchedBy: `String`, paymentDate: `LocalDate`, paymentReference: `String`, glEntryId: `Long`, notes: `String`, overdue: `boolean`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### POST /api/v1/auth/finance/vendor-bills/{id}/approve-payment
**Method:** POST
**Endpoint:** /api/v1/auth/finance/vendor-bills/{id}/approve-payment
**Description:** REST endpoint to support FINANCE workflow operations in VendorBillController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:ap:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: VendorBillController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `VendorBillResponseDTO` { id: `Long`, uuid: `UUID`, billNumber: `String`, vendorInvoiceNumber: `String`, vendorId: `Long`, vendorName: `String`, vendorCode: `String`, purchaseOrderId: `Long`, poNumber: `String`, grnId: `Long`, grnNumber: `String`, billDate: `LocalDate`, dueDate: `LocalDate`, billAmount: `BigDecimal`, taxAmount: `BigDecimal`, totalPayable: `BigDecimal`, status: `VendorBillStatus`, matchResultNotes: `String`, matchedBy: `String`, paymentDate: `LocalDate`, paymentReference: `String`, glEntryId: `Long`, notes: `String`, overdue: `boolean`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### POST /api/v1/auth/finance/vendor-bills/{id}/cancel
**Method:** POST
**Endpoint:** /api/v1/auth/finance/vendor-bills/{id}/cancel
**Description:** REST endpoint to support FINANCE workflow operations in VendorBillController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:ap:approve','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: VendorBillController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `VendorBillResponseDTO` { id: `Long`, uuid: `UUID`, billNumber: `String`, vendorInvoiceNumber: `String`, vendorId: `Long`, vendorName: `String`, vendorCode: `String`, purchaseOrderId: `Long`, poNumber: `String`, grnId: `Long`, grnNumber: `String`, billDate: `LocalDate`, dueDate: `LocalDate`, billAmount: `BigDecimal`, taxAmount: `BigDecimal`, totalPayable: `BigDecimal`, status: `VendorBillStatus`, matchResultNotes: `String`, matchedBy: `String`, paymentDate: `LocalDate`, paymentReference: `String`, glEntryId: `Long`, notes: `String`, overdue: `boolean`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### POST /api/v1/auth/finance/vendor-bills/{id}/override-mismatch
**Method:** POST
**Endpoint:** /api/v1/auth/finance/vendor-bills/{id}/override-mismatch
**Description:** REST endpoint to support FINANCE workflow operations in VendorBillController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:ap:approve','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: VendorBillController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `reason` (Query Parameter)
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `VendorBillResponseDTO` { id: `Long`, uuid: `UUID`, billNumber: `String`, vendorInvoiceNumber: `String`, vendorId: `Long`, vendorName: `String`, vendorCode: `String`, purchaseOrderId: `Long`, poNumber: `String`, grnId: `Long`, grnNumber: `String`, billDate: `LocalDate`, dueDate: `LocalDate`, billAmount: `BigDecimal`, taxAmount: `BigDecimal`, totalPayable: `BigDecimal`, status: `VendorBillStatus`, matchResultNotes: `String`, matchedBy: `String`, paymentDate: `LocalDate`, paymentReference: `String`, glEntryId: `Long`, notes: `String`, overdue: `boolean`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### POST /api/v1/auth/finance/vendor-bills/{id}/record-payment
**Method:** POST
**Endpoint:** /api/v1/auth/finance/vendor-bills/{id}/record-payment
**Description:** REST endpoint to support FINANCE workflow operations in VendorBillController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:ap:approve','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: VendorBillController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `paymentReference` (Query Parameter)
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `VendorBillResponseDTO` { id: `Long`, uuid: `UUID`, billNumber: `String`, vendorInvoiceNumber: `String`, vendorId: `Long`, vendorName: `String`, vendorCode: `String`, purchaseOrderId: `Long`, poNumber: `String`, grnId: `Long`, grnNumber: `String`, billDate: `LocalDate`, dueDate: `LocalDate`, billAmount: `BigDecimal`, taxAmount: `BigDecimal`, totalPayable: `BigDecimal`, status: `VendorBillStatus`, matchResultNotes: `String`, matchedBy: `String`, paymentDate: `LocalDate`, paymentReference: `String`, glEntryId: `Long`, notes: `String`, overdue: `boolean`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### ALL /api/v1/auth/finance/vendors/api/v1/auth/finance/vendors
**Method:** ALL
**Endpoint:** /api/v1/auth/finance/vendors/api/v1/auth/finance/vendors
**Description:** /auth/finance/vendors

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: VendorController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### DELETE /api/v1/auth/finance/vendors/{id}
**Method:** DELETE
**Endpoint:** /api/v1/auth/finance/vendors/{id}
**Description:** REST endpoint to support FINANCE workflow operations in VendorController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:procurement:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: VendorController
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

### GET /api/v1/auth/finance/vendors/{id}
**Method:** GET
**Endpoint:** /api/v1/auth/finance/vendors/{id}
**Description:** REST endpoint to support FINANCE workflow operations in VendorController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:procurement:read','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: VendorController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `VendorResponseDTO` { id: `Long`, uuid: `UUID`, vendorCode: `String`, name: `String`, legalType: `String`, gstin: `String`, pan: `String`, contactPerson: `String`, email: `String`, phone: `String`, address: `String`, city: `String`, state: `String`, pincode: `String`, bankAccountNumber: `String`, bankName: `String`, ifscCode: `String`, category: `String`, paymentTermsDays: `Integer`, status: `VendorStatus`, notes: `String`, createdAt: `LocalDateTime`, createdBy: `String` }

---

### PUT /api/v1/auth/finance/vendors/{id}
**Method:** PUT
**Endpoint:** /api/v1/auth/finance/vendors/{id}
**Description:** REST endpoint to support FINANCE workflow operations in VendorController.

**Security Requirement:**
- `Authority / Scope`: hasAnyAuthority('finance:procurement:write','ROLE_ADMIN', 'ROLE_SCHOOL_ADMIN','ROLE_FINANCE_ADMIN')
- `Class Context`: VendorController
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `id` (Path Variable)
**body ->**
```json
{
  "required\"": "is"
}
```
**Request DTO ->** `VendorRequestDTO` { required": `is` }
**Response DTO ->** `ResponseEntity` wrapping `VendorResponseDTO` { id: `Long`, uuid: `UUID`, vendorCode: `String`, name: `String`, legalType: `String`, gstin: `String`, pan: `String`, contactPerson: `String`, email: `String`, phone: `String`, address: `String`, city: `String`, state: `String`, pincode: `String`, bankAccountNumber: `String`, bankName: `String`, ifscCode: `String`, category: `String`, paymentTermsDays: `Integer`, status: `VendorStatus`, notes: `String`, createdAt: `LocalDateTime`, createdBy: `String` }

---
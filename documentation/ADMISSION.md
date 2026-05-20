# ADMISSION Module API Reference
Contains **24 mapped operational endpoints**.

---

### GET /api/v1/adm/admission/applications
**Method:** GET
**Endpoint:** /api/v1/adm/admission/applications
**Description:** --- Admin Endpoints ---

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionApplicationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<ApplicationSummaryDTO>` { id: `Long`, uuid: `UUID`, applicantName: `String`, email: `String`, status: `AdmissionStatus`, classApplyingFor: `String`, currentSection: `int`, createdAt: `LocalDateTime`, formFee: `BigDecimal` }

---

### GET /api/v1/adm/admission/applications/{uuid}
**Method:** GET
**Endpoint:** /api/v1/adm/admission/applications/{uuid}
**Description:** REST endpoint to support ADMISSION workflow operations in AdmissionApplicationController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionApplicationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `ApplicationDetailDTO` { uuid: `UUID`, status: `AdmissionStatus`, currentSection: `int`, adminRemarks: `String`, formFee: `BigDecimal`, feePaymentId: `String`, submittedAt: `LocalDateTime`, studentBasicDetails: `StudentBasicDetailsDTO`, addressContactDetails: `AddressContactDTO`, parentGuardianDetails: `ParentGuardianDTO`, academicInformation: `AcademicInfoDTO`, documentUploads: `DocumentUploadsDTO`, admissionDetails: `AdmissionDetailsDTO`, medicalInformation: `MedicalInfoDTO`, transportDetails: `TransportDetailsDTO`, declarationSection: `DeclarationDTO` }

---

### POST /api/v1/adm/admission/applications/{uuid}/approve
**Method:** POST
**Endpoint:** /api/v1/adm/admission/applications/{uuid}/approve
**Description:** REST endpoint to support ADMISSION workflow operations in AdmissionApplicationController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionApplicationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
```json
{
  "formFee": 0,
  "remarks": "string"
}
```
**Request DTO ->** `AdminApproveRequest` { formFee: `BigDecimal`, remarks: `String` }
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### POST /api/v1/adm/admission/applications/{uuid}/reject
**Method:** POST
**Endpoint:** /api/v1/adm/admission/applications/{uuid}/reject
**Description:** REST endpoint to support ADMISSION workflow operations in AdmissionApplicationController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionApplicationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
```json
{
  "remarks": "string"
}
```
**Request DTO ->** `AdminRejectRequest` { remarks: `String` }
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### GET /api/v1/admission/applications/mine
**Method:** GET
**Endpoint:** /api/v1/admission/applications/mine
**Description:** GET /api/v1/admission/applications/mine Get my own application details (Applicant)

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionApplicationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `ApplicationDetailDTO` { uuid: `UUID`, status: `AdmissionStatus`, currentSection: `int`, adminRemarks: `String`, formFee: `BigDecimal`, feePaymentId: `String`, submittedAt: `LocalDateTime`, studentBasicDetails: `StudentBasicDetailsDTO`, addressContactDetails: `AddressContactDTO`, parentGuardianDetails: `ParentGuardianDTO`, academicInformation: `AcademicInfoDTO`, documentUploads: `DocumentUploadsDTO`, admissionDetails: `AdmissionDetailsDTO`, medicalInformation: `MedicalInfoDTO`, transportDetails: `TransportDetailsDTO`, declarationSection: `DeclarationDTO` }

---

### PUT /api/v1/admission/applications/sections/1
**Method:** PUT
**Endpoint:** /api/v1/admission/applications/sections/1
**Description:** --- Section Save Endpoints ---

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionApplicationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "fullName": "string",
  "dateOfBirth": "2026-05-20",
  "gender": "string",
  "bloodGroup": "string",
  "nationality": "string",
  "religion": "string",
  "caste": "string",
  "aadhaarNumber": "string",
  "motherTongue": "string",
  "category": "string"
}
```
**Request DTO ->** `StudentBasicDetailsDTO` { fullName: `String`, dateOfBirth: `LocalDate`, gender: `String`, bloodGroup: `String`, nationality: `String`, religion: `String`, caste: `String`, aadhaarNumber: `String`, motherTongue: `String`, category: `String` }
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### PUT /api/v1/admission/applications/sections/2
**Method:** PUT
**Endpoint:** /api/v1/admission/applications/sections/2
**Description:** REST endpoint to support ADMISSION workflow operations in AdmissionApplicationController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionApplicationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "residentialAddress": "string",
  "city": "string",
  "state": "string",
  "pinCode": "string",
  "permanentAddress": "string",
  "primaryMobile": "string",
  "alternateMobile": "string",
  "emailId": "string"
}
```
**Request DTO ->** `AddressContactDTO` { residentialAddress: `String`, city: `String`, state: `String`, pinCode: `String`, permanentAddress: `String`, primaryMobile: `String`, alternateMobile: `String`, emailId: `String` }
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### PUT /api/v1/admission/applications/sections/3
**Method:** PUT
**Endpoint:** /api/v1/admission/applications/sections/3
**Description:** REST endpoint to support ADMISSION workflow operations in AdmissionApplicationController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionApplicationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "fatherName": "string",
  "fatherOccupation": "string",
  "fatherQualification": "string",
  "fatherAnnualIncome": "string",
  "fatherMobile": "string",
  "motherName": "string",
  "motherOccupation": "string",
  "motherQualification": "string",
  "motherAnnualIncome": "string",
  "motherMobile": "string",
  "guardianName": "string",
  "guardianRelationship": "string",
  "guardianContact": "string"
}
```
**Request DTO ->** `ParentGuardianDTO` { fatherName: `String`, fatherOccupation: `String`, fatherQualification: `String`, fatherAnnualIncome: `String`, fatherMobile: `String`, motherName: `String`, motherOccupation: `String`, motherQualification: `String`, motherAnnualIncome: `String`, motherMobile: `String`, guardianName: `String`, guardianRelationship: `String`, guardianContact: `String` }
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### PUT /api/v1/admission/applications/sections/4
**Method:** PUT
**Endpoint:** /api/v1/admission/applications/sections/4
**Description:** REST endpoint to support ADMISSION workflow operations in AdmissionApplicationController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionApplicationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "previousSchoolName": "string",
  "board": "string",
  "lastClassAttended": "string",
  "marksOrGradeObtained": "string",
  "mediumOfInstruction": "string",
  "transferCertificateDetails": "string"
}
```
**Request DTO ->** `AcademicInfoDTO` { previousSchoolName: `String`, board: `String`, lastClassAttended: `String`, marksOrGradeObtained: `String`, mediumOfInstruction: `String`, transferCertificateDetails: `String` }
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### PUT /api/v1/admission/applications/sections/5
**Method:** PUT
**Endpoint:** /api/v1/admission/applications/sections/5
**Description:** REST endpoint to support ADMISSION workflow operations in AdmissionApplicationController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionApplicationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "birthCertificateUrl": "string",
  "studentPhotoUrl": "string",
  "parentPhotoUrl": "string",
  "aadhaarCardUrl": "string",
  "transferCertificateUrl": "string",
  "reportCardUrl": "string",
  "addressProofUrl": "string",
  "casteCertificateUrl": "string",
  "incomeCertificateUrl": "string",
  "medicalCertificateUrl": "string"
}
```
**Request DTO ->** `DocumentUploadsDTO` { birthCertificateUrl: `String`, studentPhotoUrl: `String`, parentPhotoUrl: `String`, aadhaarCardUrl: `String`, transferCertificateUrl: `String`, reportCardUrl: `String`, addressProofUrl: `String`, casteCertificateUrl: `String`, incomeCertificateUrl: `String`, medicalCertificateUrl: `String` }
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### PUT /api/v1/admission/applications/sections/6
**Method:** PUT
**Endpoint:** /api/v1/admission/applications/sections/6
**Description:** REST endpoint to support ADMISSION workflow operations in AdmissionApplicationController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionApplicationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "classApplyingFor": "string",
  "academicYear": "string",
  "stream": "string",
  "secondLanguagePreference": "string",
  "thirdLanguagePreference": "string",
  "transportRequired": true,
  "hostelRequired": true
}
```
**Request DTO ->** `AdmissionDetailsDTO` { classApplyingFor: `String`, academicYear: `String`, stream: `String`, secondLanguagePreference: `String`, thirdLanguagePreference: `String`, transportRequired: `boolean`, hostelRequired: `boolean` }
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### PUT /api/v1/admission/applications/sections/7
**Method:** PUT
**Endpoint:** /api/v1/admission/applications/sections/7
**Description:** REST endpoint to support ADMISSION workflow operations in AdmissionApplicationController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionApplicationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "allergies": "string",
  "existingMedicalConditions": "string",
  "disabilities": "string",
  "emergencyContactPerson": "string",
  "emergencyContactNumber": "string"
}
```
**Request DTO ->** `MedicalInfoDTO` { allergies: `String`, existingMedicalConditions: `String`, disabilities: `String`, emergencyContactPerson: `String`, emergencyContactNumber: `String` }
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### PUT /api/v1/admission/applications/sections/8
**Method:** PUT
**Endpoint:** /api/v1/admission/applications/sections/8
**Description:** REST endpoint to support ADMISSION workflow operations in AdmissionApplicationController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionApplicationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "pickupLocation": "string",
  "routeOrStop": "string",
  "distanceFromSchool": "string"
}
```
**Request DTO ->** `TransportDetailsDTO` { pickupLocation: `String`, routeOrStop: `String`, distanceFromSchool: `String` }
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### PUT /api/v1/admission/applications/sections/9
**Method:** PUT
**Endpoint:** /api/v1/admission/applications/sections/9
**Description:** REST endpoint to support ADMISSION workflow operations in AdmissionApplicationController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionApplicationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "informationCorrect": true,
  "agreesToRules": true,
  "signatureUrl": "string",
  "declarationDate": "2026-05-20"
}
```
**Request DTO ->** `DeclarationDTO` { informationCorrect: `boolean`, agreesToRules: `boolean`, signatureUrl: `String`, declarationDate: `LocalDate` }
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### POST /api/v1/admission/applications/submit
**Method:** POST
**Endpoint:** /api/v1/admission/applications/submit
**Description:** REST endpoint to support ADMISSION workflow operations in AdmissionApplicationController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionApplicationController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### GET /api/v1/adm/admission/enquiries
**Method:** GET
**Endpoint:** /api/v1/adm/admission/enquiries
**Description:** GET /api/v1/adm/admission/enquiries View all enquiries (Admin)

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionEnquiryController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<EnquiryResponseDTO>` { uuid: `UUID`, applicantName: `String`, applicantEmail: `String`, applicantMobile: `String`, subject: `String`, message: `String`, adminReply: `String`, adminRepliedBy: `String`, adminRepliedAt: `LocalDateTime`, classApplyingFor: `String`, academicYear: `String`, status: `EnquiryStatus`, createdAt: `LocalDateTime` }

---

### POST /api/v1/adm/admission/enquiries/{uuid}/reply
**Method:** POST
**Endpoint:** /api/v1/adm/admission/enquiries/{uuid}/reply
**Description:** POST /api/v1/adm/admission/enquiries/{uuid}/reply Reply to an enquiry (Admin)

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionEnquiryController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `uuid` (Path Variable)
**body ->**
```json
{
  "reply": "string"
}
```
**Request DTO ->** `EnquiryReplyRequest` { reply: `String` }
**Response DTO ->** `ResponseEntity` wrapping `EnquiryResponseDTO` { uuid: `UUID`, applicantName: `String`, applicantEmail: `String`, applicantMobile: `String`, subject: `String`, message: `String`, adminReply: `String`, adminRepliedBy: `String`, adminRepliedAt: `LocalDateTime`, classApplyingFor: `String`, academicYear: `String`, status: `EnquiryStatus`, createdAt: `LocalDateTime` }

---

### POST /api/v1/admission/enquiries
**Method:** POST
**Endpoint:** /api/v1/admission/enquiries
**Description:** POST /api/v1/admission/enquiries Send an enquiry (Applicant)

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionEnquiryController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "subject": "string",
  "message": "string",
  "classApplyingFor": "string",
  "academicYear": "string"
}
```
**Request DTO ->** `EnquiryCreateRequest` { subject: `String`, message: `String`, classApplyingFor: `String`, academicYear: `String` }
**Response DTO ->** `ResponseEntity` wrapping `EnquiryResponseDTO` { uuid: `UUID`, applicantName: `String`, applicantEmail: `String`, applicantMobile: `String`, subject: `String`, message: `String`, adminReply: `String`, adminRepliedBy: `String`, adminRepliedAt: `LocalDateTime`, classApplyingFor: `String`, academicYear: `String`, status: `EnquiryStatus`, createdAt: `LocalDateTime` }

---

### GET /api/v1/admission/enquiries/mine
**Method:** GET
**Endpoint:** /api/v1/admission/enquiries/mine
**Description:** GET /api/v1/admission/enquiries/mine Get applicant's own enquiries

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionEnquiryController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `List<EnquiryResponseDTO>` { uuid: `UUID`, applicantName: `String`, applicantEmail: `String`, applicantMobile: `String`, subject: `String`, message: `String`, adminReply: `String`, adminRepliedBy: `String`, adminRepliedAt: `LocalDateTime`, classApplyingFor: `String`, academicYear: `String`, status: `EnquiryStatus`, createdAt: `LocalDateTime` }

---

### ALL /api/v1/admission/payment/api/v1/admission/payment
**Method:** ALL
**Endpoint:** /api/v1/admission/payment/api/v1/admission/payment
**Description:** REST endpoint to support ADMISSION workflow operations in AdmissionPaymentController.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionPaymentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /api/v1/admission/payment/create-order/{applicationUuid}
**Method:** POST
**Endpoint:** /api/v1/admission/payment/create-order/{applicationUuid}
**Description:** POST /api/v1/admission/payment/create-order/{applicationUuid} Initiate Razorpay order for an approved application.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionPaymentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `applicationUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `InitiatePaymentResponseDTO` { clientSecret: `String`, paymentGatewayUrl: `String`, orderId: `String` }

---

### GET /api/v1/admission/payment/receipt/{applicationUuid}
**Method:** GET
**Endpoint:** /api/v1/admission/payment/receipt/{applicationUuid}
**Description:** GET /api/v1/admission/payment/receipt/{applicationUuid} Downloads a PDF receipt for a paid admission application.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionPaymentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
- `applicationUuid` (Path Variable)
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity<byte[]>`

---

### POST /api/v1/admission/payment/verify
**Method:** POST
**Endpoint:** /api/v1/admission/payment/verify
**Description:** POST /api/v1/admission/payment/verify Verify Razorpay payment signature and record payment.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: AdmissionPaymentController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "applicationUuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "gatewayTransactionId": "string",
  "orderId": "string",
  "signature": "string"
}
```
**Request DTO ->** `PaymentVerifyRequest` { applicationUuid: `UUID`, gatewayTransactionId: `String`, orderId: `String`, signature: `String` }
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---

### POST /api/v1/admission/signup
**Method:** POST
**Endpoint:** /api/v1/admission/signup
**Description:** POST /api/v1/admission/signup Public self-signup for prospective students/parents.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Unspecified
- `Class Context`: ApplicantAuthController
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "fullName": "string",
  "email": "string",
  "mobile": "string",
  "password": "string",
  "confirmPassword": "string"
}
```
**Request DTO ->** `ApplicantSignupRequest` { fullName: `String`, email: `String`, mobile: `String`, password: `String`, confirmPassword: `String` }
**Response DTO ->** `ResponseEntity<Void>` (204 No Content)

---
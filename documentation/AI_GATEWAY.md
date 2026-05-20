# AI_GATEWAY Module API Reference
Contains **9 mapped operational endpoints**.

---

### GET /health
**Method:** GET
**Endpoint:** /health
**Description:** Checks the FastAPI application health status and tests connectivity with the RAG vector search database.

**Security Requirement:**
- `Authority / Scope`: PermitAll
- `Class Context`: AI Gateway Controller
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### GET /v1/ai-config
**Method:** GET
**Endpoint:** /v1/ai-config
**Description:** Retrieves the current active AI configuration (such as models used for intent classification and responses) and returns a list of all available models for UI dropdown menus.

**Security Requirement:**
- `Authority / Scope`: PermitAll (JWT Optional)
- `Class Context`: AI Gateway Controller
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### PATCH /v1/ai-config
**Method:** PATCH
**Endpoint:** /v1/ai-config
**Description:** Updates active model configurations or generation parameters. Persists configurations to Redis cache.

**Security Requirement:**
- `Authority / Scope`: SUPER_ADMIN role required (verified via JWT in production)
- `Class Context`: AI Gateway Controller
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
```json
{
  "active_model": "string",
  "intent_classifier_model": "string",
  "max_conversation_turns": 0,
  "temperature": 0,
  "max_output_tokens": 0
}
```
**Request DTO ->** `AIConfigUpdateRequest` { active_model: `String`, intent_classifier_model: `String`, max_conversation_turns: `int`, temperature: `float`, max_output_tokens: `int` }
**Response DTO ->** `ResponseEntity` wrapping `UpdateResponse` { success: `Boolean`, message: `String` }

---

### POST /v1/chat
**Method:** POST
**Endpoint:** /v1/chat
**Description:** Main AI chat endpoint. Feeds queries into the LangGraph system. Decodes JWT to extract role & student profiles, retrieves Redis-based conversation session history, performs RAG lookups, and returns structured agent responses.

**Security Requirement:**
- `Authority / Scope`: PermitAll / Scoped roles (supports mock JWT in development)
- `Class Context`: AI Gateway Controller
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
```json
{
  "query": "string",
  "session_id": "string"
}
```
**Request DTO ->** `ChatRequest` { query: `String`, session_id: `String` }
**Response DTO ->** `ResponseEntity` wrapping `SuccessResponse` { success: `Boolean`, message: `String` }

---

### DELETE /v1/rag/clear
**Method:** DELETE
**Endpoint:** /v1/rag/clear
**Description:** ⚠️ HIGH RISK / DESTRUCTIVE: Wipes the entire vector store database clean. This action is irreversible and resets the school's AI document knowledge pool.

**Security Requirement:**
- `Authority / Scope`: SUPER_ADMIN role strictly required
- `Class Context`: AI Gateway Controller
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `SuccessResponse` { success: `Boolean`, message: `String` }

---

### GET /v1/rag/health
**Method:** GET
**Endpoint:** /v1/rag/health
**Description:** Verifies connectivity and configuration status with the designated RAG backend (Pinecone or ChromaDB).

**Security Requirement:**
- `Authority / Scope`: PermitAll
- `Class Context`: AI Gateway Controller
**Headers ->**
- `None (Public Endpoint)`
**Query Params ->**
None
**body ->**
None
**Request DTO ->** None
**Response DTO ->** `ResponseEntity` wrapping `StandardResponse` { success: `Boolean`, message: `String`, timestamp: `String` }

---

### POST /v1/rag/ingest
**Method:** POST
**Endpoint:** /v1/rag/ingest
**Description:** Uploads and chunks PDF documents into the vector store. Segments contents and attaches custom subject, class name, and document type tags for metadata filtering.

**Security Requirement:**
- `Authority / Scope`: ADMIN / SUPER_ADMIN required in production
- `Class Context`: AI Gateway Controller
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
- `subject` (Query Parameter)
- `className` (Query Parameter)
- `documentType` (Query Parameter)
**body ->**
Multipart Form Data Upload
**Request DTO ->** `Multipart Form-data`
**Response DTO ->** `ResponseEntity` wrapping `SuccessResponse` { success: `Boolean`, message: `String` }

---

### POST /v1/rag/ingest-text
**Method:** POST
**Endpoint:** /v1/rag/ingest-text
**Description:** Allows direct ingestion of raw text strings (e.g. syllabus notes, class announcements) into the Pinecone/ChromaDB vector space without requiring an actual PDF file upload.

**Security Requirement:**
- `Authority / Scope`: ADMIN / SUPER_ADMIN required in production
- `Class Context`: AI Gateway Controller
**Headers ->**
- `Authorization: Bearer <JWT_TOKEN>`
- `Accept: application/json`
- `Content-Type: application/json`
**Query Params ->**
None
**body ->**
Multipart Form Data Upload
**Request DTO ->** `Multipart Form-data`
**Response DTO ->** `ResponseEntity` wrapping `SuccessResponse` { success: `Boolean`, message: `String` }

---

### GET /v1/rag/list
**Method:** GET
**Endpoint:** /v1/rag/list
**Description:** Lists all documents currently loaded in the vector store knowledge base including metadata sources and unique document footprints.

**Security Requirement:**
- `Authority / Scope`: ADMIN / TEACHER / SUPER_ADMIN
- `Class Context`: AI Gateway Controller
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
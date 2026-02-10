# Lightweight Architecture (MVP)

## 1 High-Level Components

```
[ Web Client (Trainee/Admin) ]
            |
            v
[ API Server (Auth + Domain Logic) ]
            |
   ┌────────┼─────────┐
   v        v         v
[Database] [File Store] [Email Service]
```

---

## 2 Component Responsibilities

### **Web Client**

* Role-based routing (Trainee vs Admin)
* Enforces UI-level gating (locked cards, disabled CTAs)
* Handles loading, error, and confirmation states

---

### **API Server**

Core responsibility: **enforce business rules** (never trust UI).

**Modules**

* **Auth**

  * Login
  * Password reset tokens
* **Training Progress**

  * Sequential gating
  * Status derivation
* **Submission**

  * Validation
  * Attempt rule enforcement
* **Admin Review**

  * Feedback persistence
  * Approval/rejection logic
* **Authorization**

  * RBAC checks on every endpoint

---

### **Database**

* Relational (Postgres-style)
* Transactions used for:

  * Submission creation
  * Review decision + status update
  * Unlocking next training

---

### **File Storage**

* Object storage (S3-like)
* Files referenced by `storage_key`
* No direct public access (admin-only signed URLs)

---

### **Email Service**

* Password reset only (MVP)
* No notifications for submissions or approvals

---

## 3 Key Flows (MVP)

### **A. Trainee Login → Dashboard**

1. Client submits credentials
2. API authenticates + issues session/token
3. API returns ordered trainings + derived statuses
4. Client renders gated dashboard

---

### **B. Training Submission**

1. Trainee opens unlocked training
2. Client validates mandatory text
3. API:

   * Checks gating (previous approved)
   * Checks attempt rule
   * Creates Submission (+ files)
   * Sets status → `PENDING_REVIEW`
4. Client shows confirmation screen

---

### **C. Admin Review**

1. Admin opens Admin Dashboard
2. API returns submissions (status = pending)
3. Admin opens submission
4. Admin submits decision + feedback
5. API transaction:

   * Create Review
   * Update Submission status
   * If approved → unlock next training

---

### **D. Trainee Feedback / Resubmission**

1. Trainee opens feedback
2. API returns Review data
3. If `MULTIPLE` + `REJECTED`:

   * Client shows “Resubmit” CTA
4. Otherwise:

   * Locked messaging only

---

## 4 Explicit MVP Non-Goals (Architectural)

* No event bus / async workers
* No notification system
* No audit log table (timestamps on entities only)
* No branching workflows
* No soft deletes (keep it simple)

---

## 5 Why This Architecture Fits the SRS

* **Sequential gating** enforced server-side
* **Attempt rules** encoded at Training + Submission boundary
* **Atomicity** via DB transactions (NFR-005)
* **Auditability** via Review + timestamps (NFR-006)
* **Minimal surface area** → low MVP risk (NFR-008)

# 1. Lightweight ERD (MVP)

## 1.1 Entities & Fields

### **User**

Represents both Trainees and Admins.

| Field         | Type                    | Notes                    |
| ------------- | ----------------------- | ------------------------ |
| id            | UUID (PK)               |                          |
| email         | string (unique)         | Pre-created for trainees |
| role          | enum(`TRAINEE`,`ADMIN`) | RBAC                     |
| password_hash | string                  | Hashed                   |
| created_at    | timestamp               |                          |
| updated_at    | timestamp               |                          |

**Constraints**

* `email` unique
* `role` required
* Trainees cannot self-register

---

### **Training**

Defines ordered, sequential trainings.

| Field        | Type                      | Notes               |
| ------------ | ------------------------- | ------------------- |
| id           | UUID (PK)                 |                     |
| title        | string                    |                     |
| instructions | text                      |                     |
| order_index  | integer                   | Determines sequence |
| attempt_rule | enum(`SINGLE`,`MULTIPLE`) | Per FR-022          |
| created_at   | timestamp                 |                     |
| updated_at   | timestamp                 |                     |

**Constraints**

* `order_index` unique (global ordering)
* `attempt_rule` immutable after first submission (recommended MVP safeguard)

---

### **Submission**

Represents one attempt by a trainee for a training.

| Field         | Type                                                     | Notes          |
| ------------- | -------------------------------------------------------- | -------------- |
| id            | UUID (PK)                                                |                |
| trainee_id    | UUID (FK → User.id)                                      | role = TRAINEE |
| training_id   | UUID (FK → Training.id)                                  |                |
| attempt_no    | integer                                                  | Starts at 1    |
| text_response | text                                                     | Mandatory      |
| link_url      | string (nullable)                                        | Optional       |
| status        | enum(`SUBMITTED`,`PENDING_REVIEW`,`APPROVED`,`REJECTED`) |                |
| created_at    | timestamp                                                |                |
| updated_at    | timestamp                                                |                |

**Constraints**

* `(trainee_id, training_id, attempt_no)` unique
* Only **one active submission** per training unless `MULTIPLE` + `REJECTED`
* Status transitions are linear (no skipping)

---

### **SubmissionFile**

Optional files attached to a submission.

| Field         | Type                      | Notes         |
| ------------- | ------------------------- | ------------- |
| id            | UUID (PK)                 |               |
| submission_id | UUID (FK → Submission.id) |               |
| storage_key   | string                    | S3 / blob key |
| filename      | string                    |               |
| mime_type     | string                    |               |
| size_bytes    | integer                   |               |
| created_at    | timestamp                 |               |

**Constraints**

* One-to-many: Submission → SubmissionFile
* Enforce file size + type limits at API layer

---

### **Review**

Admin decision + structured feedback.

| Field              | Type                              | Notes                     |
| ------------------ | --------------------------------- | ------------------------- |
| id                 | UUID (PK)                         |                           |
| submission_id      | UUID (FK → Submission.id, unique) | One review per submission |
| admin_id           | UUID (FK → User.id)               | role = ADMIN              |
| decision           | enum(`APPROVED`,`REJECTED`)       |                           |
| feedback_amend     | text (nullable)                   | “Areas to amend”          |
| feedback_strengths | text (nullable)                   | “Areas done well”         |
| decided_at         | timestamp                         |                           |
| created_at         | timestamp                         |                           |

**Constraints**

* `submission_id` unique (1:1)
* Decision is immutable once saved (MVP simplicity)

---

## 1.2 Relationships (Text ERD)

```
User (ADMIN) 1 ────< Review >──── 1 Submission >──── 1 Training
                     ^
                     |
User (TRAINEE) 1 ────┘

Submission 1 ────< SubmissionFile
```

---

## 1.3 Derived / Computed (Not Stored)

* **Training Status (per trainee)**
  Derived from latest Submission:

  * No submission → Not Started / Started
  * Submitted → Pending Review
  * Approved / Rejected → final state

* **Training Lock State**

  * Training N unlocked **only if** Training N-1 has an `APPROVED` submission


## 1. Overview + scope

### 1.1 Purpose

This Software Requirements Specification (SRS) defines the functional and non-functional requirements for the **NeonFibre Training Portal (MVP)**: a gated, admin-reviewed training platform where trainees progress through trainings **sequentially**, with each training unlocked only after the prior training is **submitted and approved**.

### 1.2 Scope (MVP)

In scope:

* Pre-created user accounts with secure authentication
* Email-based password reset / change
* Trainee dashboard showing sequential trainings and statuses
* Training detail page with submission form (mandatory text, optional file, optional link)
* Submission confirmation
* Admin review workflow (view submission, structured feedback, approve/reject)
* Attempt rules per training (single attempt or multiple attempts)
* Training gating (approval unlocks the next training)

Out of scope (explicit):

* Automated grading, AI review, certificates
* Messaging/chat, notifications (email/in-app)
* Analytics dashboards, mobile app, public marketing pages
* Role hierarchies beyond Admin and Trainee
* Branching training paths (sequential only)

### 1.3 Definitions

* **Training**: A unit of learning content with instructions and a submission requirement.
* **Submission**: Trainee’s response for a training (text + optional file + optional link).
* **Attempt rule**: Per-training configuration indicating whether resubmission is allowed after rejection.

---

## 2. Requirements numbering scheme

* **FR-xxx**: Functional Requirements (system behaviors)
* **NFR-xxx**: Non-Functional Requirements (quality attributes, constraints)
* Numbering is sequential, fixed-width: `FR-001`, `FR-002`, …; `NFR-001`, …

Each **FR** includes **Acceptance Criteria** in **Given/When/Then** format.

---

## 3. Functional requirements (FR-xxx) + acceptance criteria

### Authentication & account access

**FR-001 — User login**

* The system shall allow Trainee and Admin users to authenticate using email and password.

Acceptance Criteria:

* **Given** a user account exists and credentials are valid, **When** the user submits the login form, **Then** the user is authenticated and redirected to the correct dashboard based on role.
* **Given** credentials are invalid, **When** the user submits the login form, **Then** the system shows an “Invalid email or password” error and does not authenticate the user.
* **Given** the login request is in progress, **When** the user submits the login form, **Then** the login CTA is disabled and a loading indicator is shown.

**FR-002 — Pre-created trainee accounts**

* The system shall support trainee accounts being created in advance by the organization (not self-signup).

Acceptance Criteria:

* **Given** a user is not pre-created, **When** the user attempts to log in, **Then** authentication fails and the user is not granted access.
* **Given** a pre-created trainee account exists, **When** the trainee logs in successfully, **Then** the trainee can access the Trainee Dashboard.

**FR-003 — Forgot password request**

* The system shall provide a “Forgot Password” flow that sends a password reset link via email verification.

Acceptance Criteria:

* **Given** a registered email address, **When** the user requests a password reset, **Then** the system sends a reset email and shows a success confirmation state.
* **Given** the reset request is being processed, **When** the user submits the request, **Then** the CTA is disabled and a loading indicator is shown.
* **Given** the system cannot process the request, **When** the user submits the request, **Then** an actionable error message is shown with a recovery path.

**FR-004 — Reset password using token**

* The system shall allow the user to set a new password using a valid reset token.

Acceptance Criteria:

* **Given** a valid reset token, **When** the user submits a new password, **Then** the password is updated and the user is prompted/redirected to log in.
* **Given** an expired or invalid token, **When** the user loads or submits the reset form, **Then** the system shows an error state and provides a CTA to request a new reset link (per UI/UX edge case 3).

---

### Training visibility, states, and gating

**FR-005 — Display trainee dashboard with sequential trainings**

* The system shall display a Trainee Dashboard listing assigned trainings in sequence with their current status.

Acceptance Criteria:

* **Given** the trainee has assigned trainings, **When** the trainee opens the dashboard, **Then** training cards are shown with title and status.
* **Given** trainings are loading, **When** the dashboard is opened, **Then** skeleton/loading placeholders are shown.
* **Given** no trainings are assigned, **When** the dashboard is opened, **Then** the system shows “No trainings assigned yet.”

**FR-006 — Training statuses**

* The system shall represent the status of each training for a trainee as:

  * Not Started, Started (with progress %), Submitted, Pending Review, Approved, Rejected.

Acceptance Criteria:

* **Given** a trainee has not opened a training, **When** the dashboard is viewed, **Then** the training may appear as Not Started (or Locked if gated).
* **Given** a trainee has begun a training, **When** the dashboard is viewed, **Then** the training shows Started with a progress percentage.
* **Given** a trainee has submitted, **When** the dashboard is viewed, **Then** the training shows Pending Review (or Submitted if the UI distinguishes it) until Admin action.
* **Given** an admin approves or rejects, **When** the trainee views the dashboard, **Then** the status shows Approved or Rejected accordingly.

**FR-007 — Training gating (lock/unlock)**

* The system shall lock Training N+1 until Training N is Approved.

Acceptance Criteria:

* **Given** Training 1 is not Approved, **When** the trainee views Training 2 on the dashboard, **Then** Training 2 is shown as Locked, not clickable, with an explanation tooltip/message.
* **Given** Training N is Approved, **When** the trainee views Training N+1, **Then** Training N+1 becomes unlocked and navigable.
* **Given** the trainee attempts to access a locked training via direct URL, **When** the request is made, **Then** the system blocks access and shows the “Submission Locked State” page explaining why it is locked.

**FR-008 — Locked state explanation and feedback access**

* The system shall provide a locked-state screen that explains why the next training is locked and offers a CTA to view feedback where applicable.

Acceptance Criteria:

* **Given** a training is locked due to prior training not approved, **When** the trainee attempts to open it, **Then** the system explains the requirement (complete + approval) and provides a path back to the dashboard.
* **Given** the prior training was rejected, **When** the trainee views the locked state, **Then** a “View Feedback” CTA is available.

---

### Training detail and submission

**FR-009 — Training detail page**

* The system shall provide a Training Detail page that displays training instructions and a submission form.

Acceptance Criteria:

* **Given** an unlocked training, **When** the trainee opens the training, **Then** instructions and the submission form are displayed.
* **Given** training details are loading, **When** the page opens, **Then** a loading state is shown.
* **Given** the training cannot be loaded, **When** the request fails, **Then** an error state with recovery guidance is shown.

**FR-010 — Submission form fields**

* The submission form shall include:

  * Mandatory text response
  * Optional file upload
  * Optional link field

Acceptance Criteria:

* **Given** the text response is empty, **When** the trainee tries to submit, **Then** submission is blocked and the form indicates the required field.
* **Given** the text response is provided, **When** the trainee submits, **Then** the submission proceeds (subject to upload validation).
* **Given** the trainee provides an optional link, **When** the trainee submits, **Then** the link is stored with the submission.

**FR-011 — File upload support**

* The system shall support optional file upload for a training submission and allow admins to view/download uploaded files.

Acceptance Criteria:

* **Given** a file is selected, **When** the trainee submits, **Then** the file is uploaded and associated with the submission.
* **Given** file upload fails, **When** the trainee submits, **Then** an actionable upload error is shown and the trainee can retry.
* **Given** a submission includes a file, **When** an admin reviews the submission, **Then** the admin can download or view the file.

**FR-012 — Supported formats disclosure**

* The system shall clearly display supported file formats and constraints in the UI (as per UI/UX rules).

Acceptance Criteria:

* **Given** the trainee is on the submission form, **When** they view the upload component, **Then** supported formats are visibly listed or accessible via helper text.

**FR-013 — Submit button enablement**

* The system shall disable the “Submit Training” CTA until required fields are satisfied.

Acceptance Criteria:

* **Given** mandatory fields are incomplete, **When** the trainee views the form, **Then** the submit button is disabled.
* **Given** mandatory fields are complete, **When** the trainee views the form, **Then** the submit button becomes enabled.

**FR-014 — Submission confirmation screen**

* The system shall show a Submission Confirmation screen after a successful submission.

Acceptance Criteria:

* **Given** a submission is successfully created, **When** the trainee completes submission, **Then** the confirmation screen is shown with a CTA back to dashboard.
* **Given** the submission is not successful, **When** the trainee submits, **Then** the system shows an error state instead of confirmation.

**FR-015 — Submission status transition**

* After submission, the system shall set the training status to **Pending Review** (or equivalent) and prevent further edits unless resubmission is allowed.

Acceptance Criteria:

* **Given** a trainee submits a training, **When** the dashboard is refreshed, **Then** the training shows Pending Review.
* **Given** the training is pending review, **When** the trainee attempts to resubmit, **Then** the system blocks resubmission until an admin decision exists (approve/reject).

---

### Admin review & feedback

**FR-016 — Admin dashboard: view submissions**

* The system shall provide an Admin Dashboard that lists trainee submissions and their review statuses (at minimum: pending review, approved, rejected).

Acceptance Criteria:

* **Given** there are pending submissions, **When** the admin opens the dashboard, **Then** a list/table shows the pending submissions with status tags.
* **Given** there are no pending submissions, **When** the admin opens the dashboard, **Then** “No submissions pending” is shown.
* **Given** submissions are loading, **When** the admin opens the dashboard, **Then** a table skeleton/loading state is shown.

**FR-017 — Admin can open a submission for review**

* The system shall allow an admin to open a specific trainee submission for a specific training.

Acceptance Criteria:

* **Given** an admin is on the Admin Dashboard, **When** the admin selects a submission, **Then** the Submission Review screen opens for that submission.
* **Given** the submission cannot be retrieved, **When** the admin opens it, **Then** the system shows an error state and a retry option.

**FR-018 — Admin can view submission content**

* The Submission Review screen shall display:

  * Trainee text response
  * Optional link (if provided)
  * Uploaded files with view/download options

Acceptance Criteria:

* **Given** a submission includes text, **When** the admin reviews it, **Then** the full text response is visible.
* **Given** a submission includes a link, **When** the admin reviews it, **Then** the link is displayed.
* **Given** a submission includes files, **When** the admin reviews it, **Then** files are accessible for viewing/downloading.

**FR-019 — Structured feedback fields**

* The system shall allow admins to enter structured feedback with:

  * Areas to amend
  * Areas done well / improvements

Acceptance Criteria:

* **Given** the admin is reviewing a submission, **When** the admin enters feedback, **Then** the system stores both fields for the trainee to view.
* **Given** no feedback is provided, **When** the admin submits a decision, **Then** the system either (a) blocks the action with validation or (b) allows it but the trainee feedback view shows “No feedback provided” (must be consistent across implementation).

**FR-020 — Approve / reject decision with confirmation for reject**

* The system shall allow admins to approve or reject a submission, and rejection shall require confirmation (destructive action safeguard).

Acceptance Criteria:

* **Given** the admin chooses Approve, **When** the admin confirms, **Then** the submission is marked Approved and persisted.
* **Given** the admin chooses Reject, **When** the admin initiates reject, **Then** the system requires a confirmation step before finalizing.
* **Given** the admin finalizes rejection, **When** the decision is saved, **Then** the submission is marked Rejected and feedback is available to the trainee.

**FR-021 — Automatic progression update**

* The system shall automatically unlock the next training when the current training is Approved.

Acceptance Criteria:

* **Given** Training N is approved, **When** the trainee views the dashboard, **Then** Training N+1 is unlocked and accessible.
* **Given** Training N is rejected, **When** the trainee views the dashboard, **Then** Training N remains in Rejected state and Training N+1 remains locked.

---

### Attempt rules & resubmission

**FR-022 — Configure attempt rule per training**

* The system shall allow the attempt rule to be set per training: single attempt or multiple attempts.

Acceptance Criteria:

* **Given** a training is configured as single attempt, **When** a submission is rejected, **Then** the trainee cannot resubmit.
* **Given** a training is configured as multiple attempts, **When** a submission is rejected, **Then** the trainee can resubmit.

> Note: The PRD states admin-configurable attempt logic; MVP may implement configuration via admin interface or seeded config. If UI for configuration is not included in MVP screens, implement via admin-only config mechanism and document it in Admin ops.

**FR-023 — Resubmission allowed only when configured**

* The system shall permit resubmission only if the training allows multiple attempts and the last decision was Rejected.

Acceptance Criteria:

* **Given** multiple attempts are enabled and the last decision is Rejected, **When** the trainee opens the training, **Then** the trainee can edit and resubmit.
* **Given** multiple attempts are disabled and the last decision is Rejected, **When** the trainee attempts to resubmit, **Then** the system blocks resubmission and shows the “one attempt only” message and support guidance.

**FR-024 — One-time attempt lockout messaging**

* For one-time attempt trainings, the system shall show clear messaging after a rejection indicating the training is locked permanently and to contact support.

Acceptance Criteria:

* **Given** a one-time attempt training is rejected, **When** the trainee opens the training or tries to resubmit, **Then** the system displays: “This training allows only one attempt. Please contact support.” (or equivalent copy consistent with UI/UX tone rules).

---

### Feedback viewing (trainee)

**FR-025 — Feedback View screen**

* The system shall provide a Feedback View screen that shows admin feedback grouped as:

  * Areas to amend
  * Areas done well

Acceptance Criteria:

* **Given** feedback exists for a submission, **When** the trainee opens Feedback View, **Then** feedback is shown grouped into the two sections.
* **Given** no feedback was provided, **When** the trainee opens Feedback View, **Then** the UI shows “No feedback provided.”

**FR-026 — Resubmit CTA from feedback**

* The Feedback View shall provide a “Resubmit Training” CTA only when resubmission is permitted.

Acceptance Criteria:

* **Given** multiple attempts are enabled and submission is rejected, **When** the trainee views feedback, **Then** the “Resubmit Training” CTA is shown and navigates back to the Training Detail form.
* **Given** multiple attempts are not enabled, **When** the trainee views feedback, **Then** the “Resubmit Training” CTA is not shown (or is disabled with explanation).

---

### UI state behaviors (from UI/UX spec)

**FR-027 — Locked training cards are non-interactive**

* Training cards in Locked state shall be disabled and show a lock icon and explanation.

Acceptance Criteria:

* **Given** a training is locked, **When** the trainee views the dashboard, **Then** the training card is not clickable and displays a lock icon and explanation tooltip/message.

**FR-028 — Status badges include text labels**

* Status badges shall include text labels and not rely on color alone.

Acceptance Criteria:

* **Given** a status badge is displayed, **When** a user views it, **Then** it includes a readable text label (e.g., “Approved”, “Rejected”, “Locked”).

**FR-029 — Error messages are actionable**

* The system shall present error messages with a recovery path (retry, back, request new link, etc.).

Acceptance Criteria:

* **Given** an error occurs on any core screen (login, dashboards, training detail, submission), **When** the error is shown, **Then** the message includes a clear recovery action (e.g., “Retry”, “Request new reset link”, “Back to Dashboard”).

---

## 4. Non-functional requirements (NFR-xxx)

**NFR-001 — Security: authentication and session management**

* The system shall use secure authentication practices (hashed passwords, secure session tokens, HTTPS-only).

**NFR-002 — Authorization (role-based access)**

* The system shall enforce role-based access control:

  * Trainees cannot access admin screens/data
  * Admins can access submissions for review
  * Trainees can access only their own submissions/feedback

**NFR-003 — Accessibility (WCAG 2.1 AA baseline)**

* The UI shall meet WCAG 2.1 AA requirements including keyboard accessibility, visible focus states, ARIA live regions for errors, and minimum contrast ratios (4.5:1).
* Color shall not be the sole indicator of status.

**NFR-004 — Performance**

* Dashboard pages should render initial content within acceptable interactive time for MVP cohorts (target: ≤ 2s on typical broadband for cached assets; server response times monitored).

**NFR-005 — Reliability and data integrity**

* Submission and review actions shall be atomic: no partial state where submission exists without status updates, or approval without recorded decision timestamp/user.

**NFR-006 — Auditability**

* The system shall record audit fields for key entities:

  * created_at, updated_at
  * submission attempt number
  * decision_by (admin id), decision_at
  * status transitions

**NFR-007 — File storage constraints**

* The system shall enforce file size limits and supported formats, and store files in a durable storage solution appropriate for MVP.

**NFR-008 — Maintainability (MVP constraints)**

* The implementation shall prioritize minimal complexity and clear separation of concerns to reduce risk of scope creep and support rapid iteration.

---

## 5. External interface requirements (routes, API notes)

### 5.1 Key routes/pages (UI)

**Public/Auth**

* `GET /login` — Login (trainee/admin)
* `GET /forgot-password` — Request reset link
* `GET /reset-password?token=...` — Reset password form

**Trainee**

* `GET /trainee/dashboard` — Training list and status
* `GET /trainings/:trainingId` — Training detail + submission (only if unlocked/allowed)
* `GET /submissions/:submissionId/confirmation` — Submission confirmation
* `GET /trainings/:trainingId/locked` — Locked state explanation (or a shared locked component)
* `GET /trainings/:trainingId/feedback` — Feedback view

**Admin**

* `GET /admin/login` — Admin login (may reuse `/login` with role routing)
* `GET /admin/dashboard` — Submission queue/list
* `GET /admin/submissions/:submissionId` — Submission review (approve/reject + feedback)

### 5.2 API notes (logical endpoints; implementation may vary)

Minimum API capability for MVP:

**Auth**

* `POST /api/auth/login`
* `POST /api/auth/forgot-password`
* `POST /api/auth/reset-password`

**Trainings / Progress**

* `GET /api/trainee/trainings` — list trainings with status + gating info
* `GET /api/trainings/:trainingId` — training instructions + attempt rule + trainee status
* `POST /api/trainings/:trainingId/submissions` — create submission (text, link, files)

**Feedback**

* `GET /api/trainings/:trainingId/feedback` — fetch latest feedback for trainee

**Admin**

* `GET /api/admin/submissions?status=pending` — list submissions
* `GET /api/admin/submissions/:submissionId` — detail
* `POST /api/admin/submissions/:submissionId/decision` — approve/reject + feedback fields

### 5.3 Data model notes (minimum entities)

* **User**: id, email, role, password_hash, created_at…
* **Training**: id, title, instructions, order_index, attempt_rule (single/multiple)
* **Submission**: id, training_id, trainee_id, attempt_no, text, link?, status, created_at
* **SubmissionFile**: id, submission_id, storage_key/url, filename, mime_type, size
* **Review**: id, submission_id, admin_id, decision (approved/rejected), feedback_amend, feedback_strengths, decided_at

---

## 6. Verification plan

This plan maps requirements to test approach. “E2E” implies UI-level automated tests; “API” implies integration tests; “Manual” implies scripted QA checks.

| Requirement | Verification Method                                                       |
| ----------- | ------------------------------------------------------------------------- |
| FR-001      | E2E: login success/failure, role redirect; API: auth login                |
| FR-002      | API: reject non-existent user; Manual: pre-created account login          |
| FR-003      | E2E + API: forgot password sends token; Manual: email delivery in staging |
| FR-004      | E2E: valid/invalid token flows; API: reset-password                       |
| FR-005      | E2E: dashboard rendering; Manual: empty state; Perf smoke                 |
| FR-006      | E2E: status badge transitions across lifecycle                            |
| FR-007      | E2E: gating rules, direct URL block; API: authorization checks            |
| FR-008      | E2E: locked state copy + CTA to feedback                                  |
| FR-009      | E2E: training detail load states + error state                            |
| FR-010      | E2E: mandatory text validation; API: submission payload validation        |
| FR-011      | API: file upload; E2E: admin file access; Manual: large file rejection    |
| FR-012      | Manual: UI shows supported formats; Visual regression                     |
| FR-013      | E2E: submit CTA disabled/enabled rules                                    |
| FR-014      | E2E: confirmation screen appears only on success                          |
| FR-015      | E2E + API: pending review state; resubmission blocking while pending      |
| FR-016      | E2E: admin dashboard list/empty/loading                                   |
| FR-017      | E2E + API: open submission; error/retry                                   |
| FR-018      | E2E: view text/link/files on admin review                                 |
| FR-019      | API + E2E: feedback stored & displayed; Manual: “No feedback provided”    |
| FR-020      | E2E: reject confirmation dialog; API: decision endpoint validation        |
| FR-021      | E2E: approval unlocks next training; API: progression logic               |
| FR-022      | API: attempt rule enforced; Manual: configuration mechanism validated     |
| FR-023      | E2E: resubmit availability only when allowed                              |
| FR-024      | E2E + Manual: one-time attempt lockout messaging                          |
| FR-025      | E2E: feedback grouping; empty feedback state                              |
| FR-026      | E2E: resubmit CTA conditional                                             |
| FR-027      | E2E: locked cards disabled + lock icon + tooltip/message                  |
| FR-028      | Manual + Accessibility test: status badges with text labels               |
| FR-029      | Manual + E2E: actionable errors across screens                            |
| NFR-001     | Security review + automated checks (HTTPS, password hashing)              |
| NFR-002     | Pen-test style authz tests; API negative tests                            |
| NFR-003     | Accessibility audit (axe), keyboard nav checks                            |
| NFR-004     | Basic load/perf smoke tests; monitoring                                   |
| NFR-005     | Integration tests around state transitions/transactions                   |
| NFR-006     | DB audit field assertions; admin action logs                              |
| NFR-007     | Upload validation tests; storage durability checks                        |
| NFR-008     | Code review against architecture guidelines (modularity)                  |


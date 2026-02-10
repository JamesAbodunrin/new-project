##UI/UX Design Specification

1. Screen List Table

| Screen                 |  Purpose                                             | Primary CTA           |
|------------------------|------------------------------------------------------|-----------------------|
| Login                  | Allow trainees and admins to authenticate            |  Log in               |
| Forgot Password        | Enable password reset via email verification         |  Send reset link      |
| Reset Password         | Set a new password after email verification          |  Update password      |
| Trainee Dashboard      | Show training progression and lock/unlock state      |  Continue Training    |
| Training Detail        | Display training instructions and submission form    |  Submit Training      |
| Submission Confirmation| Confirm successful submission                        |  Back to Dashboard    |
| Submission Locked State| Explain why next training is locked                  |  View Feedback        |
| Feedback View          | Show admin feedback on rejected or approved training |  Resubmit Training    |
| Admin Login            | Authenticate admin users                             |  Log in               |
| Admin Dashboard        | Overview of trainee submissions                      |  Review Submission    |
| Submission Review      | Review, approve, or reject a submission              |  Approve / Reject     |



2. User Flows

2.1 Happy Path (Trainee)

- Trainee logs in successfully.
- Lands on Trainee Dashboard.
- Training 1 is unlocked; Training 2 is locked.
- Trainee opens Training 1.
- Submits text response and/or file upload.
- Sees Submission Confirmation.
- Admin approves submission.
- Training 2 unlocks automatically.

2.2 Happy Path (Admin)

- Admin logs in.
- Sees list of pending submissions.
- Opens a submission.
- Reviews content.
- Approves submission with feedback.
- Submission marked “Approved”.
- Next training unlocks for trainee.

2.3 Edge Case 1: Rejected Submission (Trainee)

- Trainee submits Training 1.
- Admin rejects submission with feedback.
- Trainee sees Training 1 marked “Changes Required”.
- Trainee opens Feedback View.
- Trainee updates response and resubmits.

2.4 Edge Case 2: One-Time Attempt Training

- Trainee submits training.
- Admin rejects submission.
- Training is locked permanently.
- Trainee sees a clear message:
    * “This training allows only one attempt. Please contact support.”

2.5 Edge Case 3: Password Reset Failure

- Trainee requests password reset.
- Reset token expires.
- Trainee sees error state.
- CTA provided to request a new reset link.



3. UI States Per Screen

#Login

- Default: Email + password fields
- Loading: Disabled button, spinner
- Error: “Invalid email or password”
- Success: Redirect to dashboard

#Trainee Dashboard

- Loading: Skeleton cards for trainings
- Empty: “No trainings assigned yet”
- Default: Training cards with status
- Error: “Unable to load trainings. Retry.”


#Training Detail

- Loading: Spinner + blurred content
- Default: Instructions + submission form
- Error: Upload or submission failure
- Success: Submission Confirmation screen

#Feedback View

- Default: Feedback grouped into:
    * Areas to amend
    * Areas done well
- Empty: “No feedback provided”

#Admin Dashboard

- Loading: Table skeleton
- Empty: “No submissions pending”
- Default: List with status tags
- Error: Failed fetch message


4. Component Rules

#Training Card

- Must show:
    * Training title
    * Status (Locked / In Progress / Submitted / Approved / Rejected)
- Locked cards:
    *Disabled click
    * Lock icon
    * Tooltip explaining why locked

#Submission Form

- Text input is mandatory
- File upload optional
- Supported formats clearly listed
- Submit disabled until required fields are filled

#Status Badges
- Approved: Green
- Rejected: Red
- Submitted: Amber
- Locked: Grey

#Buttons
- One primary CTA per screen
- Destructive actions (Reject) must require confirmation



5. Copy Rules

- Use clear, instructional language
- Avoid blame-based wording
- Always explain why an action is blocked

Examples:

- ❌ “You cannot access this training”
- ✅ “Complete and get approval for Training 1 to unlock this training”

#Feedback Copy

- Must include:
    * What needs improvement
    * What was done well
- Avoid vague phrases like “Improve this”

#Error Messages

- Actionable and human
- Always include a recovery path



6. Accessibility Baseline

- WCAG 2.1 AA compliance
- All buttons and inputs keyboard accessible
- Visible focus states for interactive elements
- Color is never the sole indicator of status
- Status badges include text labels
- Error messages announced via ARIA live regions
- Minimum contrast ratio of 4.5:1
- Form fields have associated labels and helper text

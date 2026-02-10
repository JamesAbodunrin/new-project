##PRD Title + Overview

NeonFibre Training Portal (MVP) is a gated, admin-reviewed training platform where trainees progress through trainings sequentially. Trainees can access Training 1 immediately after login but cannot access Training 2 until Training 1 is submitted and approved. Each training supports text and file submissions, optional links, structured admin feedback, and configurable attempt rules. The MVP focuses on controlled progression, manual review, and clarity of status.


##Problem + Goals

#Problems:

NeonFibre needs a structured system to:
- Ensure trainees complete and demonstrate understanding before progressing
- Capture both submissions and qualitative feedback
- Maintain manual control over training quality without overengineering

Existing informal tools do not enforce progression, feedback loops, or retry logic.

#Goals
- Enforce sequential, locked training progression
- Support rich submissions (text + file, optional link)
- Enable admin feedback on approval and rejection
- Allow admins to control single vs multiple attempts
- Keep the system simple, auditable, and scalable for early cohorts


##Users + Jobs-to-be-Done

#Trainee
- Log in securely using a pre-created account
- Reset/change password via email verification
- View assigned trainings and their status
- Submit training responses (text + files)
- Receive feedback on approval or rejection
- Re-submit if allowed
- Unlock and proceed to the next training

#Admin (Reviewer)
- View all trainee submissions by training
- Review text and file submissions
- Provide structured feedback:
    * Areas to amend
    * Areas done well / improvements
- Approve or reject submissions
- Decide if a training allows:
    * One attempt only
    * Multiple attempts with re-approval
- Control progression implicitly through approval


##MVP Scope

- Authentication:
    * Pre-created trainee accounts
    * Email-based password reset / change
- Trainee dashboard:
    * List of trainings in sequence
    * Status per training:
        - Not Started
        - Started (with progress in percentage)
        - Submitted
        - Pending Review
        - Approved
        - Rejected
- Training submission:
    * Mandatory text response
    * File upload support
    * Optional link field
- Admin review interface:
    * View submissions per trainee and training
    * Read text responses
    * Download/view files
    * Enter feedback (approval or rejection)
- Attempt logic:
    * Admin-configurable per training (single or multiple attempts)
    * Re-submission allowed only if enabled
- Training gating:
    * Next training unlocks only after approval of current training


##Out of Scope

- Automated grading or scoring
- AI-based review or feedback
- Certificates or credentials
- Messaging/chat between trainee and admin
- Notifications (email or in-app)
- Role hierarchy beyond Admin and Trainee
- Analytics dashboards
- Mobile app
- Public-facing marketing pages


##Key Workflows (High Level)

#Trainee Workflow
1. Trainee logs in
2. Views Training 1 as available; Training 2 locked
3. Submits Training 1 (text + file, optional link)
4. Status changes to Pending Review
5. Receives:
    * Approval feedback → Training 2 unlocked
    * Rejection feedback → Can re-submit if allowed

#Admin Workflow
1. Admin logs in
2. Views list of submissions by training
3. Opens a trainee’s submission
4. Reviews text and files
5. Adds feedback:
    * Strengths / improvements
    * Required amendments (if rejected)
6. Marks submission as Approved or Rejected
7. System updates trainee progression automatically


##Success Metrics

- % of trainees who submit Training 1
- Average time from submission to admin review
- Approval rate per training
- Average number of attempts per trainee (where allowed)
- % of trainees progressing from Training 1 to Training 2
- Admin review completion rate per cohort


##Constraints

- MVP-first: minimal UI, minimal logic
- Manual admin review only
- Limited engineering capacity
- Assumes manageable reviewer-to-trainee ratio
- Web-only (desktop-first)
- Sequential training model only (no branching)


##Risks + Dependencies

#Risks
- Admin review delays blocking trainee progression
- Feedback inconsistency across admins
- Attempt rules misunderstood by trainees
- Scope creep toward messaging, automation, or analytics
- File upload size/storage issues

#Dependencies
- Reliable authentication + email service
- File storage solution
- Clear internal guidelines for approval criteria
- Admin availability for timely reviews

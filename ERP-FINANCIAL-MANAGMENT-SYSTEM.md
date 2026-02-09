# قصر الشام - نظام الإدارة المالية
## Financial Management System for Construction Companies

---

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [System Overview](#system-overview)
3. [Architecture](#architecture)
4. [Core Modules](#core-modules)
5. [Key Features](#key-features)
6. [Technical Implementation](#technical-implementation)
7. [Business Logic & Workflows](#business-logic--workflows)
8. [Getting Started](#getting-started)

---

## Introduction

### What is This System?

**قصر الشام** (Qasr Al-Sham) is a comprehensive financial management system specifically designed for construction and contracting companies. It serves as a centralized platform to manage all financial aspects of construction projects, from initial planning to final completion.

### The Problem It Solves

Construction companies face unique financial challenges:
- **Multiple concurrent projects** with varying budgets and timelines
- **Complex cash flow management** involving contractors, suppliers, and employees
- **Project-based financial tracking** requiring detailed cost allocation
- **Payroll management** for site workers and office staff
- **Invoice and expense tracking** across different project categories
- **Financial reporting** for stakeholders and partners

Traditional accounting software often falls short because it doesn't understand the construction industry's workflow: projects have categories (foundation, electrical, plumbing, etc.), each with assigned contractors, invoices, and expenses that need to be tracked separately while maintaining an overall project budget.

### Target Users

The system serves three distinct user roles:

1. **Administrators** - Full access to all modules, can approve payments, manage users, and view all financial data
2. **Data Entry Staff** - Limited access to enter invoices and expenses without seeing financial balances or making payments
3. **Partners/Stakeholders** - Read-only access to view financial reports and safe balance for transparency

---

## System Overview

### Core Concept

The system operates on a **project-centric financial model** where:

1. **Projects** are created with budgets and financial parameters
2. **Categories** within projects are assigned to contractors with estimated costs
3. **Invoices** are submitted for approval and linked to specific project categories
4. **Expenses** (both project-related and general) are tracked separately
5. **Safe (Cash Flow)** acts as the central treasury, recording all inflows and outflows
6. **Employees** receive salaries paid directly from the safe
7. **Financial Reports** provide insights into project profitability and overall company finances

### Data Flow Architecture

```
┌─────────────────┐
│   Projects      │ ──┐
│   (Budgets)     │   │
└─────────────────┘   │
                      │
┌─────────────────┐   │    ┌──────────────────┐
│  Contractors    │ ──┼───▶│  Category         │
│  (Suppliers)     │   │    │  Assignments     │
└─────────────────┘   │    │  (per Project)   │
                      │    └──────────────────┘
┌─────────────────┐   │            │
│   Employees     │   │            │
│   (Payroll)     │   │            ▼
└─────────────────┘   │    ┌──────────────────┐
                      │    │   Invoices &      │
                      │    │   Expenses        │
                      │    │   (Pending/       │
                      │    │    Approved)      │
                      │    └──────────────────┘
                      │            │
                      │            ▼
                      │    ┌──────────────────┐
                      └───▶│   Safe (Treasury)│
                           │   (Cash Flow)     │
                           │   - Balance      │
                           │   - Transactions │
                           └──────────────────┘
                                  │
                                  ▼
                           ┌──────────────────┐
                           │  Financial       │
                           │  Reports         │
                           └──────────────────┘
```

---

## Architecture

### Technology Stack

**Frontend (sham/)**
- **Framework**: Next.js 15 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: React Context API
- **Offline Support**: Service Workers (PWA)
- **Charts**: Recharts
- **Icons**: Lucide React, Phosphor Icons

**Backend (backend/)**
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: Helmet, CORS, Rate Limiting
- **Password Hashing**: bcryptjs

**Database**
- **Type**: PostgreSQL
- **ORM**: Raw SQL queries with pg library
- **Schema**: Normalized relational database with audit trails

### Project Structure

```
qs-pc/
├── sham/                    # Frontend application
│   ├── src/
│   │   ├── app/             # Next.js app router pages
│   │   ├── components/       # React components
│   │   ├── contexts/        # React Context providers
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utilities and services
│   │   ├── services/        # Business logic services
│   │   └── types/           # TypeScript type definitions
│   └── package.json
│
├── backend/                 # Backend API server
│   ├── src/
│   │   ├── routes/          # API route handlers
│   │   ├── services/        # Business logic services
│   │   ├── middleware/      # Auth & permission middleware
│   │   └── config/          # Configuration files
│   ├── database/            # Database schema and services
│   └── package.json
│
└── package.json            # Root workspace config
```

### Authentication & Authorization

The system uses **JWT-based authentication** with role-based access control:

**Authentication Flow:**
1. User logs in with username/password
2. Backend validates credentials against PostgreSQL
3. JWT token is issued containing user ID, username, and role
4. Frontend stores token and includes it in API requests
5. Backend middleware validates token on each request

**Role Permissions:**

| Permission | Admin | Data Entry | Partners |
|------------|-------|------------|----------|
| View Safe Balance | ✅ | ❌ | ✅ (Read-only) |
| Make Payments | ✅ | ❌ | ❌ |
| Create Projects | ✅ | ❌ | ❌ |
| Create Invoices | ✅ | ✅ | ❌ |
| Approve Invoices | ✅ | ❌ | ❌ |
| Manage Employees | ✅ | ❌ | ❌ |
| View Reports | ✅ | ❌ | ✅ |
| Edit Safe Transactions | ✅ | ❌ | ❌ |

---

## Core Modules

### 1. Projects Management

**Purpose**: Central hub for all construction projects

**Key Features**:
- Create projects with budgets, timelines, and client information
- Assign project categories (foundation, electrical, plumbing, etc.) to contractors
- Track budget allocation vs. actual spending
- Calculate project profitability metrics
- Link invoices and expenses to specific projects

**Financial Tracking**:
- **Budget Estimate**: Initial project budget
- **Allocated Budget**: Amount assigned to contractors
- **Spent Budget**: Actual expenses (approved invoices + expenses)
- **Available Budget**: Remaining funds for new assignments
- **Profit Metrics**: Price per meter, cost per meter, profit margin

**Workflow**:
1. Create project with basic info and financial parameters
2. Assign categories to contractors with estimated costs
3. Contractors submit invoices for their work
4. Invoices are approved and paid from safe
5. System tracks spending against budget automatically

### 2. Safe (Cash Flow Management)

**Purpose**: Central treasury tracking all money in and out

**Key Features**:
- Real-time balance calculation
- Transaction history with full audit trail
- Funding sources tracking (rental income, factory revenue, contracts, etc.)
- Links to projects, employees, and expenses
- Transaction editing with reason tracking
- Batch number tracking for grouped transactions

**Transaction Types**:
- **Funding (Inflow)**: Money coming into the safe
  - Sources: Rental, Factory, Contracts, Projects, Other
- **Invoice Payment (Outflow)**: Paying contractor invoices
- **Salary Payment (Outflow)**: Paying employee salaries
- **General Expense (Outflow)**: Operational expenses

**Balance Calculation**:
```
Current Balance = Initial Balance + All Funding - All Payments
```

The system maintains balance history, so each transaction records:
- Previous balance (before transaction)
- Transaction amount
- New balance (after transaction)

### 3. Human Resources (Payroll)

**Purpose**: Manage employees and process salary payments

**Key Features**:
- Employee database with positions and departments
- Monthly salary calculation (base + bonuses - deductions)
- Payment status tracking per month
- Direct salary payment from safe
- Payroll reports generation
- Employee assignment to projects

**Salary Calculation**:
```
Monthly Salary = Base Salary + Daily Bonus + Overtime Pay - Deductions
```

**Payment Workflow**:
1. Employee record created with salary details
2. System calculates monthly salary automatically
3. Admin initiates payment from HR module
4. Payment is deducted from safe balance
5. Transaction recorded with employee reference
6. Payment status updated (paid/unpaid)

### 4. Contractors Management

**Purpose**: Manage contractors and suppliers

**Key Features**:
- Contractor database with categories
- Categories: Main Contractor, Sub-contractor, Materials Supplier, Equipment Supplier, etc.
- Assignment type: Contractor, Supplier, or Both
- Link contractors to project categories
- Track contractor invoices and payments

**Contractor Categories**:
- Main Contractor
- Sub-contractor
- Building Materials Supplier
- Equipment Supplier
- Transport Services
- Engineering Consultant
- Specialized Technical Services
- Other

### 5. Expenses Management

**Purpose**: Track operational expenses

**Key Features**:
- General expenses (not tied to specific projects)
- Project-related expenses
- Expense categories and receipt attachments
- Approval workflow for expenses
- Link expenses to safe transactions when paid

**Expense Types**:
- **General Expenses**: Company-wide operational costs
- **Project Expenses**: Costs specific to a project

### 6. Financial Reports

**Purpose**: Generate comprehensive financial insights

**Key Features**:
- Project profitability reports
- Cash flow statements
- Expense analysis
- Payroll summaries
- Export to PDF/Excel
- Date range filtering
- Category-wise breakdowns

---

## Key Features

### Role-Based Access Control

The system implements granular permissions at both UI and API levels:

**UI Level**: Components check permissions before rendering
- Financial numbers hidden from data entry users
- Action buttons disabled based on role
- Navigation items filtered by permissions

**API Level**: Backend middleware enforces permissions
- Routes protected by authentication middleware
- Permission checks before allowing operations
- Audit logging of all permission-denied attempts

### Offline Support (PWA)

The application works as a Progressive Web App:

**Features**:
- Service Worker caching for offline access
- IndexedDB for local data storage
- Sync manager for queued operations
- Network status detection
- Automatic sync when connection restored

**Offline Capabilities**:
- View cached data (projects, employees, etc.)
- Create invoices and expenses (queued for sync)
- View transaction history
- Cannot make payments offline (requires server validation)

### Real-Time Balance Tracking

The safe balance is calculated in real-time:

**How It Works**:
1. Each transaction updates the safe state
2. Balance is recalculated on every transaction
3. Previous balance is stored for audit purposes
4. Balance history maintained for reporting

**Balance Integrity**:
- Transactions cannot be deleted, only marked as deleted
- Edited transactions maintain audit trail
- Balance recalculation ensures consistency
- Daily snapshots for reconciliation

### Approval Workflows

**Invoice Approval Process**:
1. Invoice created (status: `pending_approval`)
2. Admin reviews invoice details
3. Admin approves or rejects with reason
4. Approved invoices can be paid from safe
5. Payment creates transaction and updates balances

**Expense Approval Process**:
1. Expense submitted (status: `pending`)
2. Admin reviews expense with receipt
3. Admin approves or rejects
4. Approved expenses can be paid
5. Payment linked to expense record

### Audit Trails

Every critical action is logged:

**What's Tracked**:
- User who created/modified/deleted records
- Timestamp of actions
- Reason for edits or deletions
- Previous values before changes
- IP address and user agent (optional)

**Audit Trail Uses**:
- Compliance and accountability
- Debugging data issues
- Financial reconciliation
- User activity monitoring

---

## Technical Implementation

### API Architecture

**RESTful API Design**:

```
/api/auth          - Authentication endpoints
/api/projects      - Project CRUD operations
/api/safe          - Safe transactions and balance
/api/employees     - Employee management
/api/contractors   - Contractor management
/api/category-invoices - Invoice management
/api/general-expenses  - Expense management
/api/notifications    - Notification system
```

**Request/Response Format**:
```typescript
// Success Response
{
  success: true,
  data: { ... },
  message?: "Operation completed"
}

// Error Response
{
  success: false,
  message: "Error description",
  error?: "Technical error details"
}
```

### Database Schema Highlights

**Core Tables**:
- `projects` - Project master data
- `project_category_assignments` - Category-to-contractor assignments
- `category_invoices` - Invoices linked to categories
- `safe_transactions` - All cash flow transactions
- `safe_state` - Current safe balance (single row)
- `employees` - Employee records
- `contractors` - Contractor/supplier database
- `general_expenses` - Expense records
- `users` - User accounts and authentication
- `audit_logs` - Audit trail records

**Key Relationships**:
- Projects → Category Assignments → Invoices
- Safe Transactions → Projects/Employees/Expenses
- Employees → Projects (assignment)
- Invoices → Projects → Categories → Contractors

### State Management

**Frontend State Architecture**:

```
AuthContext          - User authentication state
SafeContext          - Safe balance and transactions
EmployeeContext      - Employee data and operations
ContractorContext    - Contractor data
SidebarContext       - UI state (sidebar collapse)
```

**State Flow**:
1. User action triggers API call
2. Context updates local state optimistically
3. API response confirms or corrects state
4. UI re-renders with updated data

### Offline Storage Strategy

**IndexedDB Structure**:
- `projects` - Cached project data
- `employees` - Cached employee data
- `transactions` - Transaction history
- `pending_operations` - Queued operations for sync

**Sync Process**:
1. Offline operations stored in `pending_operations`
2. When online, sync manager processes queue
3. Each operation sent to API
4. Success removes from queue, failure retries
5. Conflict resolution for concurrent edits

---

## Business Logic & Workflows

### Project Financial Calculations

**Profitability Metrics**:

```typescript
// Revenue Calculation
constructionCost = area × pricePerMeter

// Cost Calculation  
realConstructionCost = area × realCostPerMeter

// Profit Calculation
grossProfit = constructionCost - realConstructionCost
profitMargin = ((pricePerMeter - realCostPerMeter) / pricePerMeter) × 100
```

**Budget Tracking**:
- `allocatedBudget`: Sum of all category assignment estimated amounts
- `spentBudget`: Sum of approved invoices + project expenses
- `availableBudget`: `budgetEstimate - allocatedBudget`

### Safe Transaction Flow

**Funding Transaction**:
```
1. User selects funding source (rental, factory, contracts, etc.)
2. Enters amount and description
3. System creates transaction:
   - Type: 'funding'
   - Amount: positive value
   - Previous Balance: current safe balance
   - New Balance: previous + amount
4. Safe state updated
5. Transaction recorded with audit trail
```

**Payment Transaction**:
```
1. User initiates payment (invoice/salary/expense)
2. System validates safe has sufficient balance
3. System creates transaction:
   - Type: 'invoice_payment' | 'salary_payment' | 'general_expense'
   - Amount: negative value (outflow)
   - Previous Balance: current safe balance
   - New Balance: previous - amount
   - Reference: linked to invoice/employee/expense
4. Safe state updated
5. Reference record updated (invoice marked as paid, etc.)
```

### Invoice Approval Workflow

```
1. Invoice Created
   └─ Status: pending_approval
   └─ Visible to: Admin, Data Entry (creator)

2. Admin Reviews
   └─ Views invoice details, attachments
   └─ Checks against project budget
   └─ Verifies contractor assignment

3. Approval Decision
   ├─ Approved
   │  └─ Status: approved
   │  └─ Can be paid from safe
   │  └─ Budget updated
   │
   └─ Rejected
      └─ Status: rejected
      └─ Reason recorded
      └─ Cannot be paid
```

### Salary Payment Workflow

```
1. Monthly Salary Calculation
   └─ Base Salary + Bonuses - Deductions
   └─ Stored per employee per month

2. Payment Initiation
   └─ Admin selects employee and month
   └─ System shows calculated salary
   └─ Admin confirms payment

3. Safe Deduction
   └─ Validates safe balance
   └─ Creates transaction
   └─ Updates employee payment status

4. Record Keeping
   └─ Transaction linked to employee
   └─ Payment date recorded
   └─ Payroll report updated
```

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL 12+
- Git

### Installation

**1. Clone the repository**
```bash
git clone <repository-url>
cd qs-pc
```

**2. Install dependencies**
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd sham
npm install

# Install backend dependencies
cd ../backend
npm install
```

**3. Database Setup**

Create a PostgreSQL database and configure connection:

```bash
# Create database
createdb financial_system

# Update backend/.env with database credentials
DB_HOST=localhost
DB_PORT=5432
DB_NAME=financial_system
DB_USER=your_username
DB_PASSWORD=your_password
```

**4. Environment Variables**

**Backend (.env)**:
```
PORT=8000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=financial_system
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret_key
CORS_ORIGIN=http://localhost:3000
```

**Frontend (.env.local)**:
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

**5. Initialize Database**

The database schema is automatically created on first server start. The backend will:
- Create all required tables
- Set up indexes and constraints
- Initialize safe state with zero balance

**6. Run Development Servers**

**Terminal 1 - Backend**:
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend**:
```bash
cd sham
npm run dev
```

**7. Access the Application**

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- Health Check: http://localhost:8000/health

### Default Admin Account

After first database initialization, create an admin user via database:

```sql
INSERT INTO users (username, password_hash, role, full_name, is_active)
VALUES (
  'admin',
  '$2a$10$...', -- bcrypt hash of your password
  'admin',
  'System Administrator',
  true
);
```

Or use the registration endpoint (if available) to create the first admin account.

### Building for Production

**Frontend**:
```bash
cd sham
npm run build
npm start
```

**Backend**:
```bash
cd backend
npm run build
npm start
```

---

## Development Notes

### Code Organization Principles

1. **Separation of Concerns**: Business logic in services, UI in components
2. **Type Safety**: TypeScript interfaces for all data structures
3. **Error Handling**: Consistent error responses and user feedback
4. **Performance**: Lazy loading, code splitting, optimized queries
5. **Accessibility**: RTL support for Arabic, keyboard navigation

### Key Design Decisions

**Why PostgreSQL?**
- ACID compliance for financial data
- Complex queries for reporting
- Relational integrity for linked records
- Audit trail capabilities

**Why Next.js?**
- Server-side rendering for performance
- API routes capability (though we use separate backend)
- Excellent TypeScript support
- Built-in optimization features

**Why Separate Backend?**
- API can be consumed by mobile apps
- Independent scaling
- Clear separation of concerns
- Easier to maintain and test

**Why PWA?**
- Construction sites often have poor connectivity
- Field workers need offline access
- Better mobile experience
- Reduced server load

---

## Support & Contribution

### Reporting Issues

When reporting bugs or requesting features, please include:
- User role affected
- Steps to reproduce
- Expected vs. actual behavior
- Browser/device information

### Contributing

1. Follow existing code style and patterns
2. Write TypeScript types for all new features
3. Update this README for significant changes
4. Test offline functionality for PWA features
5. Ensure role-based permissions are respected

---

## License

[Specify your license here]

---

## Acknowledgments

Built with modern web technologies to serve the construction industry's unique financial management needs.

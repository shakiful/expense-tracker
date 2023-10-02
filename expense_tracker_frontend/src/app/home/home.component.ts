import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  datas = [
    {
      title: 'Expense Logging',
      description:
        'Users can easily log their daily expenses, categorizing each expense by type (e.g., groceries, rent, transportation, entertainment).',
    },
    {
      title: 'Income Tracking',
      description:
        'In addition to expenses, users can input their sources of income, allowing them to understand their net financial position.',
    },
    {
      title: 'Budget Management',
      description:
        'Expense Tracker enables users to set monthly or yearly budgets for different expense categories. It provides alerts or notifications when users approach or exceed their budget limits.',
    },
    {
      title: 'Expense Categories',
      description:
        'The app offers a predefined list of common expense categories, but users can also create custom categories to match their specific needs.',
    },
    {
      title: 'Data Visualization',
      description:
        'Users can view their financial data through interactive charts and graphs, making it easier to identify spending patterns and trends.',
    },
    {
      title: 'User-Friendly Interface',
      description:
        'The application features an intuitive and user-friendly interface, making it easy for users of all technical levels to navigate and input financial data.',
    },
    {
      title: 'Data Export',
      description:
        'Users can export their financial data to common formats like PDF for tax purposes or for use in other financial applications.',
    },
    {
      title: 'Reminders and Alerts',
      description:
        'Expense Tracker can send reminders for upcoming bills or recurring expenses, helping users avoid late payments.',
    },
  ];

  benefits = [
    {
      image:
        'https://img.freepik.com/free-vector/money-income-attraction_74855-6573.jpg?w=740&t=st=1696226864~exp=1696227464~hmac=d854589b664c0be9f1363c2e8516399216a3e4460357e5d1aa488bd5d24ee2aa',
      title: 'Track Your Spending',
      description:
        'Keep a close eye on your financial habits by recording and categorizing your daily expenses. The Expense Tracker empowers you to see exactly where your money is going, helping you make informed decisions to save and budget effectively.',
    },
    {
      image:
        'https://img.freepik.com/free-vector/budgeting-concept-idea-financial-planning-wellbeing-currency-balance-income-money-allocation-isolated-flat-illustration-vector_613284-1084.jpg?w=740&t=st=1696226520~exp=1696227120~hmac=90d061590710924a532d5f3882f47eb5d3d6d967499f3a05d711f58fcc8e7ade',
      title: 'Stay Within Budget',
      description:
        'Set monthly or yearly budgets for different spending categories, and receive timely alerts when you approach your limits. This feature encourages responsible spending, reduces overspending, and promotes a healthier financial lifestyle.',
    },
    {
      image:
        'https://img.freepik.com/free-vector/successful-business-deal-celebrating-contract-profitable-agreement-project-closure-project-closing-process-acceptance-deliverables-concept_335657-697.jpg?w=740&t=st=1696226487~exp=1696227087~hmac=05ca3e8a5dd8806a22e01d9a4acffddb72838b30b71997e7884dc1c10810b7f0',
      title: 'Achieve Your Financial Goals',
      description:
        "Whether it's saving for a vacation, paying off debts, or planning for a major life event, the Expense Tracker helps you reach your financial goals. It provides insights, reports, and analytics to track your progress, so you can take the steps needed to secure your financial future.",
    },
  ];
}

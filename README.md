# XLR8 - Workflow Automation Platform

XLR8 is a powerful, visual workflow automation platform built with Next.js, designed to help you connect apps, automate tasks, and streamline your business processes. Think of it as your personal automation assistant that can handle complex workflows with ease.

## 🚀 Features

- **Visual Workflow Builder**: Drag-and-drop interface for creating complex automation workflows
- **Extensive Integrations**: Connect with hundreds of popular apps and services
- **Real-time Execution**: Monitor and debug your workflows in real-time
- **Custom Nodes**: Create your own custom automation nodes
- **Team Collaboration**: Share workflows with your team and manage permissions
- **Scheduled Triggers**: Set up time-based and event-driven automations
- **Error Handling**: Robust error handling and retry mechanisms
- **Webhook Support**: Trigger workflows via HTTP requests

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **UI Components**: Radix UI, Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Built-in user management
- **Monitoring**: Sentry integration
- **Code Quality**: Biome for linting and formatting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+ or Bun
- PostgreSQL database
- Git

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd xlr8
```

### 2. Install Dependencies

```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/xlr8"

# Next.js
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Sentry (optional)
SENTRY_DSN="your-sentry-dsn"
```

### 4. Database Setup

```bash
# Generate Prisma client
bun prisma generate

# Run database migrations
bun prisma db push

# (Optional) Seed the database
bun prisma db seed
```

### 5. Start Development Server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
xlr8/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   └── ui/               # Radix UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── prisma/               # Database schema and migrations
└── public/               # Static assets
```

## 🔧 Available Scripts

```bash
# Development
bun dev              # Start development server
bun build            # Build for production
bun start            # Start production server

# Database
bun prisma studio    # Open Prisma Studio
bun prisma generate  # Generate Prisma client
bun prisma db push   # Push schema changes to database

# Code Quality
bun lint             # Run Biome linter
bun format           # Format code with Biome
```

## 🎯 Core Concepts

### Workflows
Workflows are the heart of XLR8. They consist of:
- **Triggers**: Events that start a workflow (webhook, schedule, manual)
- **Nodes**: Processing units that perform specific actions
- **Connections**: Links between nodes that define the flow

### Nodes
Nodes are the building blocks of workflows:
- **Trigger Nodes**: Start workflows based on events
- **Action Nodes**: Perform specific operations
- **Condition Nodes**: Control workflow branching
- **Transform Nodes**: Modify data between steps

## 🔌 Creating Custom Nodes

To create a custom node:

1. Create a new file in `app/api/nodes/`
2. Implement the node interface
3. Register the node in the system
4. Test your node in the workflow builder

Example custom node structure:

```typescript
interface CustomNode {
  name: string;
  description: string;
  inputs: NodeInput[];
  outputs: NodeOutput[];
  execute: (data: any) => Promise<any>;
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Docker

```bash
# Build the Docker image
docker build -t xlr8 .

# Run the container
docker run -p 3000:3000 xlr8
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📖 [Documentation](https://docs.xlr8.com)
- 💬 [Discord Community](https://discord.gg/xlr8)
- 🐛 [Report Issues](https://github.com/your-org/xlr8/issues)
- 💡 [Feature Requests](https://github.com/your-org/xlr8/discussions)

## 🙏 Acknowledgments

- Inspired by [n8n](https://n8n.io) and other workflow automation platforms
- Built with [Next.js](https://nextjs.org) and [Radix UI](https://www.radix-ui.com)
- Icons by [Lucide](https://lucide.dev)

---

**Made with ❤️ by the XLR8 Team**

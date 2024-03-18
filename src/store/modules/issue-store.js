import { defineStore } from "pinia";

export const useIssueStore = defineStore(
    "issueStore",
    {
        state: () => ({
            issues: [],
        }),
        getters: {
            issuesCount: (state) => state.issues.length,
            issueById: (state) =>
                (id) => state.issues.find((issue) => issue.id === id),
            getIssues: (state) => state.issues,
        },
        actions: {
            async fetchIssues() {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        this.issues = [
                            {
                                id: 3,
                                title: "Database Connectivity Issue",
                                description: "Troubleshooting database connectivity problem.",
                                status: "In Progress",
                                priority: "High",
                                created_at: "2024-03-16T08:30:00Z",
                                updated_at: "2024-03-16T10:45:00Z",
                                creator_id: 2,
                                service_id: 3,
                                service: {
                                  id: 3,
                                  name: "Yubi Support"
                                },
                                assignees: [
                                  {
                                    id: 4,
                                    name: "Alice Smith",
                                    email: "alice.smith@example.com"
                                  },
                                  {
                                    id: 5,
                                    name: "Bob Johnson",
                                    email: "bob.johnson@example.com"
                                  }
                                ]
                              },
                              {
                                id: 4,
                                title: "UI Enhancement",
                                description: "Implementing new UI features.",
                                status: "New",
                                priority: "Medium",
                                created_at: "2024-03-16T09:15:00Z",
                                updated_at: "2024-03-16T09:30:00Z",
                                creator_id: 3,
                                service_id: 1,
                                service: {
                                  id: 1,
                                  name: "Yubi Pos"
                                },
                                assignees: [
                                  {
                                    id: 6,
                                    name: "Charlie Brown",
                                    email: "charlie.brown@example.com"
                                  }
                                ]
                              },
                              {
                                id: 5,
                                title: "Server Configuration Issue",
                                description: "Resolving server configuration errors.",
                                status: "Queued",
                                priority: "Low",
                                created_at: "2024-03-16T10:00:00Z",
                                updated_at: "2024-03-16T10:10:00Z",
                                creator_id: 1,
                                service_id: 2,
                                service: {
                                  id: 2,
                                  name: "Yubi Pay"
                                },
                                assignees: [
                                  {
                                    id: 4,
                                    name: "Alice Smith",
                                    email: "alice.smith@example.com"
                                  }
                                ]
                              },
                              {
                                id: 6,
                                title: "Feature Request",
                                description: "Adding new features to the system.",
                                status: "New",
                                priority: "High",
                                created_at: "2024-03-16T10:30:00Z",
                                updated_at: "2024-03-16T10:35:00Z",
                                creator_id: 2,
                                service_id: 3,
                                service: {
                                  id: 3,
                                  name: "Yubi Support"
                                },
                                assignees: [
                                  {
                                    id: 5,
                                    name: "Bob Johnson",
                                    email: "bob.johnson@example.com"
                                  }
                                ]
                              },
                              {
                                id: 7,
                                title: "Payment Gateway Integration",
                                description: "Integrating payment gateway services.",
                                status: "In Progress",
                                priority: "High",
                                created_at: "2024-03-16T11:00:00Z",
                                updated_at: "2024-03-16T11:30:00Z",
                                creator_id: 3,
                                service_id: 2,
                                service: {
                                  id: 2,
                                  name: "Yubi Pay"
                                },
                                assignees: [
                                  {
                                    id: 6,
                                    name: "Charlie Brown",
                                    email: "charlie.brown@example.com"
                                  },
                                  {
                                    id: 7,
                                    name: "David Lee",
                                    email: "david.lee@example.com"
                                  }
                                ]
                              },
                              {
                                id: 8,
                                title: "API Documentation Update",
                                description: "Updating API documentation for developers.",
                                status: "Queued",
                                priority: "Medium",
                                created_at: "2024-03-16T12:00:00Z",
                                updated_at: "2024-03-16T12:10:00Z",
                                creator_id: 1,
                                service_id: 1,
                                service: {
                                  id: 1,
                                  name: "Yubi Pos"
                                },
                                assignees: [
                                  {
                                    id: 5,
                                    name: "Bob Johnson",
                                    email: "bob.johnson@example.com"
                                  }
                                ]
                              },
                              {
                                id: 9,
                                title: "User Account Management",
                                description: "Implementing user account management features.",
                                status: "New",
                                priority: "High",
                                created_at: "2024-03-16T12:30:00Z",
                                updated_at: "2024-03-16T12:35:00Z",
                                creator_id: 2,
                                service_id: 3,
                                service: {
                                  id: 3,
                                  name: "Yubi Support"
                                },
                                assignees: [
                                  {
                                    id: 7,
                                    name: "David Lee",
                                    email: "david.lee@example.com"
                                  }
                                ]
                              },
                              {
                                id: 10,
                                title: "Data Migration Task",
                                description: "Migrating data to a new database.",
                                status: "In Progress",
                                priority: "High",
                                created_at: "2024-03-16T13:00:00Z",
                                updated_at: "2024-03-16T13:30:00Z",
                                creator_id: 3,
                                service_id: 2,
                                service: {
                                  id: 2,
                                  name: "Yubi Pay"
                                },
                                assignees: [
                                  {
                                    id: 6,
                                    name: "Charlie Brown",
                                    email: "charlie.brown@example.com"
                                  },
                                  {
                                    id: 7,
                                    name: "David Lee",
                                    email: "david.lee@example.com"
                                  }
                                ]
                              }
                              
                        ];
                        resolve(this.issues);
                    }, 1000);
                });
            },
        },
    }
)
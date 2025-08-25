import { type User, type InsertUser, type Contact, type InsertContact, type Portfolio } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
  getPortfolio(): Promise<Portfolio | null>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private portfolio: Portfolio | null;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.portfolio = this.initializePortfolio();
  }

  private initializePortfolio(): Portfolio {
    return {
      id: "portfolio-1",
      personalInfo: {
        name: "Amit Yadav",
        title: "Full Stack Developer & Problem Solver",
        email: "amit09yadav12@gmail.com",
        phone: "+91 8306334469",
        location: "Bengaluru, Karnataka",
        bio: "Passionate about creating innovative web solutions with modern technologies. Currently working at Accenture, building scalable applications and solving complex problems.",
        social: {
          github: "https://github.com/amityadav0912",
          leetcode: "https://leetcode.com/amit09yadav12",
          linkedin: "https://linkedin.com/in/amityadav",
          email: "mailto:amit09yadav12@gmail.com"
        }
      },
      skills: {
        frontend: [
          { name: "JavaScript", level: 90 },
          { name: "TypeScript", level: 85 },
          { name: "React/NextJS", level: 80 },
          { name: "HTML/CSS", level: 95 }
        ],
        backend: [
          { name: "Java", level: 90 },
          { name: "Node.js", level: 85 },
          { name: "Express.js", level: 80 },
          { name: "SpringBoot", level: 75 }
        ],
        database: [
          { name: "MongoDB", level: 85 },
          { name: "SQL/MySQL", level: 80 },
          { name: "Git/GitHub", level: 90 },
          { name: "VS Code", level: 95 }
        ]
      },
      experience: [
        {
          title: "Packaged App Development Associate",
          company: "Accenture Solutions Pvt. Ltd.",
          location: "Bengaluru, Karnataka",
          period: "July 2023 - Present",
          achievements: [
            "Developed SPA using Angular for event management with complex form flows and extensive validations",
            "Redesigned multi-section forms, reducing completion time by 60%",
            "Engineered RESTful APIs with Node.js, driving 30% increase in backend efficiency",
            "Developed TypeScript framework for high-throughput data processing, accelerating testing 15x"
          ]
        },
        {
          title: "Full Stack Java Developer",
          company: "Code Planet Pvt. Ltd.",
          location: "Jaipur, Rajasthan",
          period: "October 2021 - April 2022",
          achievements: [
            "Constructed dynamic websites with Java, SpringBoot, JDBC, and MySQL",
            "Implemented secure authorization systems for web applications",
            "Designed RESTful APIs for seamless front-end and back-end communication",
            "Managed database schemas and performed data migrations"
          ]
        }
      ],
      projects: [
        {
          title: "Dopamine - Fitness Center Booking",
          description: "Innovative gym booking application enabling seamless workout scheduling with Google OAuth, Maps integration, and secure payment processing.",
          technologies: ["Next.JS", "MongoDB", "Express.JS", "Node.JS"],
          category: "Full Stack",
          date: "Jan 2023",
          demoUrl: "#",
          githubUrl: "#"
        },
        {
          title: "HappyPaws - Pet Adoption Platform",
          description: "Comprehensive platform for pet adoption, donations, and volunteering with PayPal integration and responsive design.",
          technologies: ["React", "Node.js", "MongoDB", "PayPal API"],
          category: "MERN Stack", 
          date: "May 2023",
          demoUrl: "#",
          githubUrl: "#"
        },
        {
          title: "Bankist - Complete Banking App",
          description: "Comprehensive banking platform with secure account access, transaction history, fund transfers, and loan management.",
          technologies: ["JavaScript", "HTML5", "CSS3", "DOM API"],
          category: "Vanilla JS",
          date: "Oct 2022",
          demoUrl: "#",
          githubUrl: "#"
        }
      ],
      achievements: [
        {
          title: "200+ Problems Solved",
          description: "Active in 50+ Contests on LeetCode, Codechef, HackerRank",
          type: "competitive_programming"
        },
        {
          title: "HackerRank 5⭐ Java Badge",
          description: "Certified for Java Programming",
          type: "certification"
        },
        {
          title: "TFWS Scholarship",
          description: "Secured TFWS (Tuition Fee Waiver Scheme) Seat and Scholarship in Bachelor's",
          type: "academic"
        },
        {
          title: "IEEE Hack OverFlow Runner-up",
          description: "Runner up in hackathon at Manipal University",
          type: "competition"
        }
      ],
      education: {
        degree: "Bachelor of Technology",
        field: "Information Technology",
        institution: "Jaipur Engineering College and Research Center",
        period: "Aug 2019 - June 2023",
        cgpa: "8.75"
      }
    };
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date().toISOString()
    };
    this.contacts.set(id, contact);
    
    // Log contact for development
    console.log("New contact received:", contact);
    
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getPortfolio(): Promise<Portfolio | null> {
    return this.portfolio;
  }
}

export const storage = new MemStorage();

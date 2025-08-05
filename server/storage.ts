import { type Contact, type InsertContact, type NewsArticle, type InsertNewsArticle } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<any | undefined>;
  getUserByUsername(username: string): Promise<any | undefined>;
  createUser(user: any): Promise<any>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // News methods
  getNewsArticles(): Promise<NewsArticle[]>;
  createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle>;
}

export class MemStorage implements IStorage {
  private users: Map<string, any>;
  private contacts: Map<string, Contact>;
  private newsArticles: Map<string, NewsArticle>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.newsArticles = new Map();
    
    // Initialize with some sample news articles
    this.initializeNewsArticles();
  }

  private initializeNewsArticles() {
    const articles: NewsArticle[] = [
      {
        id: randomUUID(),
        title: "New Skills Center Opens in Delhi",
        excerpt: "Our newest skills development center is now operational, offering courses in digital marketing, web development, and entrepreneurship to 500+ youth.",
        content: "We are excited to announce the opening of our state-of-the-art skills development center in Delhi...",
        imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        publishedAt: new Date("2024-03-15")
      },
      {
        id: randomUUID(),
        title: "200 Youth Graduate from Tech Program",
        excerpt: "Celebrating the success of our latest batch of technology program graduates, with 95% placement rate in leading companies.",
        content: "We are proud to celebrate the graduation of 200 young people from our comprehensive technology training program...",
        imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        publishedAt: new Date("2024-03-10")
      },
      {
        id: randomUUID(),
        title: "Emergency Food Drive Reaches 5,000 Families",
        excerpt: "Our rapid response team successfully distributed emergency food supplies to families affected by recent floods in West Bengal.",
        content: "In response to the recent flooding in West Bengal, our emergency response team mobilized quickly to provide essential food supplies...",
        imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        publishedAt: new Date("2024-03-05")
      }
    ];

    articles.forEach(article => {
      this.newsArticles.set(article.id, article);
    });
  }

  async getUser(id: string): Promise<any | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<any | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: any): Promise<any> {
    const id = randomUUID();
    const user: any = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getNewsArticles(): Promise<NewsArticle[]> {
    return Array.from(this.newsArticles.values()).sort(
      (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }

  async createNewsArticle(insertArticle: InsertNewsArticle): Promise<NewsArticle> {
    const id = randomUUID();
    const article: NewsArticle = {
      ...insertArticle,
      id,
      publishedAt: new Date()
    };
    this.newsArticles.set(id, article);
    return article;
  }
}

export const storage = new MemStorage();

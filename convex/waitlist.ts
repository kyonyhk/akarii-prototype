import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Add an email to the waitlist
export const addEmail = mutation({
  args: {
    email: v.string(),
    source: v.optional(v.string()),
    referrer: v.optional(v.string()),
    userAgent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(args.email)) {
      throw new Error("Invalid email format");
    }

    // Check if email already exists
    const existingEmail = await ctx.db
      .query("waitlistEmails")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existingEmail) {
      throw new Error("Email already registered");
    }

    // Add the email to the waitlist
    const emailId = await ctx.db.insert("waitlistEmails", {
      email: args.email,
      timestamp: Date.now(),
      source: args.source || "unknown",
      referrer: args.referrer,
      userAgent: args.userAgent,
      metadata: {},
    });

    return emailId;
  },
});

// Get total waitlist count
export const getWaitlistCount = query({
  args: {},
  handler: async (ctx) => {
    const emails = await ctx.db.query("waitlistEmails").collect();
    return emails.length;
  },
});

// Get all waitlist emails (for admin use)
export const getAllWaitlistEmails = query({
  args: {},
  handler: async (ctx) => {
    const emails = await ctx.db
      .query("waitlistEmails")
      .withIndex("by_timestamp")
      .order("desc")
      .collect();
    
    return emails.map((email) => ({
      id: email._id,
      email: email.email,
      timestamp: email.timestamp,
      source: email.source,
      referrer: email.referrer,
      createdAt: new Date(email.timestamp).toISOString(),
    }));
  },
});
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  waitlistEmails: defineTable({
    email: v.string(),
    timestamp: v.number(),
    source: v.optional(v.string()),
    referrer: v.optional(v.string()),
    userAgent: v.optional(v.string()),
    metadata: v.optional(v.object({})),
  })
    .index("by_email", ["email"])
    .index("by_timestamp", ["timestamp"]),
});
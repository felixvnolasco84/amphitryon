import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  WhatsAppContact: defineTable({
    receivedBy: v.string(),
  }),
  CallContact: defineTable({
    receivedBy: v.string(),
  }),
});

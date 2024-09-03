import { defineSchema, defineTable } from "convex/server";
import { v, Infer } from "convex/values";

export default defineSchema({
  WhatsAppContact: defineTable({
    receivedBy: v.string(),
  }),
});

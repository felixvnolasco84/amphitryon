import { v } from "convex/values";

import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

export const create = mutation({
  args: {},
  handler: async (ctx, args) => {
    const lastContact = await ctx.db
      .query("WhatsAppContact")
      .order("desc")
      .first();
    const message = "Hola, me gustaría recibir más informes.";
    if (lastContact?.receivedBy === "Cesar") {
      await ctx.db.insert("WhatsAppContact", { receivedBy: "Anton" });
      return `https://wa.me/5620244047?text=${encodeURIComponent(message)}`;
    } else {
      await ctx.db.insert("WhatsAppContact", { receivedBy: "Cesar" });
      return `https://wa.me/5513842959?text=${encodeURIComponent(message)}`;
    }
  },
});

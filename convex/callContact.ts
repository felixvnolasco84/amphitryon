import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: {},
  handler: async (ctx) => {
    const lastContact = await ctx.db.query("CallContact").order("desc").first();
    if (lastContact?.receivedBy === "Anton") {
      await ctx.db.insert("CallContact", { receivedBy: "Inés Torres" });
      return `tel:5523053711`;
    } else if (lastContact?.receivedBy === "Inés Torres") {
      await ctx.db.insert("CallContact", { receivedBy: "Salvador" });
      return `tel:5542957398`;
    } else if (lastContact?.receivedBy === "Salvador") {
      await ctx.db.insert("CallContact", { receivedBy: "Anton" });
      return `tel:5620244047`;
    }
  },
});

export const getLastContact = query({
  args: {},
  handler: async (ctx) => {
    const lastContact = await ctx.db.query("CallContact").order("desc").first();
    if (!lastContact) {
      return null;
    }
    if (lastContact?.receivedBy === "Inés Torres") {
      return `tel:5523053711`;
    } else if (lastContact?.receivedBy === "Anton") {
      return `tel:5620244047`;
    } else if (lastContact?.receivedBy === "Salvador") {
      return `tel:5542957398`;
    }
  },
});

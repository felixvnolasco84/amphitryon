import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: {},
  handler: async (ctx) => {
    const lastContact = await ctx.db.query("CallContact").order("desc").first();

    if (lastContact?.receivedBy === "Rafael González") {
      await ctx.db.insert("CallContact", { receivedBy: "Salvador Mier" });
      return `tel:5538931801`;
    } else if (lastContact?.receivedBy === "Salvador Mier") {
      await ctx.db.insert("CallContact", { receivedBy: "Antón Arias" });
      return `tel:5538931801`;
    } else if (lastContact?.receivedBy === "Antón Arias") {
      await ctx.db.insert("CallContact", { receivedBy: "Luisa Gomez" });
      return `tel:5538931801`;
    } else if (lastContact?.receivedBy === "Luisa Gomez") {
      await ctx.db.insert("CallContact", { receivedBy: "Rafael González" });
      return `tel:5538931801`;
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

    if (lastContact?.receivedBy === "Rafael González") {
      return `tel:5538931801`;
    } else if (lastContact?.receivedBy === "Salvador Mier") {
      return `tel:5538931801`;
    } else if (lastContact?.receivedBy === "Antón Arias") {
      return `tel:5538931801`;
    } else if (lastContact?.receivedBy === "Luisa Gomez") {
      return `tel:5538931801`;
    }
  },
});

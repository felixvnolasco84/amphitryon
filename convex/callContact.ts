import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: {},
  handler: async (ctx) => {
    const lastContact = await ctx.db.query("CallContact").order("desc").first();

    await ctx.db.insert("CallContact", { receivedBy: "Salvador Mier" });
    if (lastContact?.receivedBy === "Rafael González") {
      return `tel:5565222282`;
    } else if (lastContact?.receivedBy === "Salvador Mier") {
      await ctx.db.insert("CallContact", { receivedBy: "Antón Arias" });
      return `tel:5565222282`;
    } else if (lastContact?.receivedBy === "Antón Arias") {
      await ctx.db.insert("CallContact", { receivedBy: "Luisa Gomez" });
      return `tel:5565222282`;
    } else if (lastContact?.receivedBy === "Luisa Gomez") {
      await ctx.db.insert("CallContact", { receivedBy: "Rafael González" });
      return `tel:5565222282`;
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
      return `tel:5565222282`;
    } else if (lastContact?.receivedBy === "Salvador Mier") {
      return `tel:5565222282`;
    } else if (lastContact?.receivedBy === "Antón Arias") {
      return `tel:5565222282`;
    } else if (lastContact?.receivedBy === "Luisa Gomez") {
      return `tel:5565222282`;
    }
  },
});




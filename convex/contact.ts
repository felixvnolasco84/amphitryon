import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: {},
  handler: async (ctx) => {
    const lastContact = await ctx.db
      .query("WhatsAppContact")
      .order("desc")
      .first();
    const message = "Hola, me gustaría recibir más informes.";
    if (lastContact?.receivedBy === "Anton") {
      await ctx.db.insert("WhatsAppContact", { receivedBy: "Inés Torres" });
      return `https://wa.me/5523053711?text=${encodeURIComponent(message)}`;
    } else if (lastContact?.receivedBy === "Inés Torres") {
      await ctx.db.insert("WhatsAppContact", { receivedBy: "Salvador Mier" });
      return `https://wa.me/5542957398?text=${encodeURIComponent(message)}`;
    } else if (lastContact?.receivedBy === "Salvador Mier") {
      await ctx.db.insert("WhatsAppContact", { receivedBy: "Rafael González" });
      return `https://wa.me/5620244047?text=${encodeURIComponent(message)}`;
    } else if (lastContact?.receivedBy === "Rafael González") {
      await ctx.db.insert("WhatsAppContact", { receivedBy: "Anton" });
      return `https://wa.me/5544502253?text=${encodeURIComponent(message)}`;
    }
  },
});

export const getLastContact = query({
  args: {},
  handler: async (ctx) => {
    const lastContact = await ctx.db
      .query("WhatsAppContact")
      .order("desc")
      .first();

    const message = "Hola, me gustaría recibir más informes.";
    if (!lastContact) {
      return null;
    }

    if (lastContact?.receivedBy === "Anton") {
      return `https://wa.me/5523053711?text=${encodeURIComponent(message)}`;
    } else if (lastContact?.receivedBy === "Inés Torres") {
      return `https://wa.me/5542957398?text=${encodeURIComponent(message)}`;
    } else if (lastContact?.receivedBy === "Salvador Mier") {
      return `https://wa.me/5620244047?text=${encodeURIComponent(message)}`;
    } else if (lastContact?.receivedBy === "Rafael González") {
      return `https://wa.me/5544502253?text=${encodeURIComponent(message)}`;
    }
  },
});

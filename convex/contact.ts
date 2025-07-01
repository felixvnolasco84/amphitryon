import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: {},
  handler: async (ctx) => {
    const lastContact = await ctx.db
      .query("WhatsAppContact")
      .order("desc")
      .first();
    const message = "Hola, me gustaría recibir más informes.";
    if (lastContact?.receivedBy === "Rafael González") {
      await ctx.db.insert("WhatsAppContact", { receivedBy: "Salvador Mier" });
      return `https://wa.me/5542957398?text=${encodeURIComponent(message)}`;
    } else if (lastContact?.receivedBy === "Salvador Mier") {
      await ctx.db.insert("WhatsAppContact", { receivedBy: "Antón Arias" });
      return `https://wa.me/5542957398?text=${encodeURIComponent(message)}`;
    } else if (lastContact?.receivedBy === "Antón Arias") {
      await ctx.db.insert("WhatsAppContact", { receivedBy: "Luisa Gomez" });
      return `https://wa.me/5542957398?text=${encodeURIComponent(message)}`;
    } else if (lastContact?.receivedBy === "Luisa Gomez") {
      await ctx.db.insert("WhatsAppContact", { receivedBy: "Rafael González" });
      return `https://wa.me/5542957398?text=${encodeURIComponent(message)}`;
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

    if (lastContact?.receivedBy === "Rafael González") {
      return `https://wa.me/5542957398?text=${encodeURIComponent(message)}`;
    } else if (lastContact?.receivedBy === "Salvador Mier") {
      return `https://wa.me/5542957398?text=${encodeURIComponent(message)}`;
    } else if (lastContact?.receivedBy === "Antón Arias") {
      return `https://wa.me/5542957398?text=${encodeURIComponent(message)}`;
    } else if (lastContact?.receivedBy === "Luisa Gomez") {
      return `https://wa.me/5542957398?text=${encodeURIComponent(message)}`;
    }
  },
});

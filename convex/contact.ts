import { mutation } from "./_generated/server";

export const create = mutation({
  args: {},
  handler: async (ctx) => {
    const lastContact = await ctx.db
      .query("WhatsAppContact")
      .order("desc")
      .first();
    const message = "Hola, me gustaría recibir más informes.";
    if (lastContact?.receivedBy === "Cesar") {
      await ctx.db.insert("WhatsAppContact", { receivedBy: "Anton" });
      return `https://wa.me/5620244047?text=${encodeURIComponent(message)}`;
    }
    // else if (lastContact?.receivedBy === "Anton") {
    //   await ctx.db.insert("WhatsAppContact", { receivedBy: "Inés Torres" });
    //   return `https://wa.me/5523053711?text=${encodeURIComponent(message)}`;
    // }
    else {
      await ctx.db.insert("WhatsAppContact", { receivedBy: "Cesar" });
      return `https://wa.me/5513842959?text=${encodeURIComponent(message)}`;
    }
  },
});

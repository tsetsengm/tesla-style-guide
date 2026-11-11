import type { Model } from "@/data/models";
import { siteUrl } from "@/lib/site";

/**
 * Sample for the ModelCard demo. On the main site this row comes from the Supabase `models`
 * table; the styleguide keeps a static copy so it needs no database.
 */
export const featuredModel: Model = {
  slug: "model-3",
  name: "Model 3",
  detailHref: `${siteUrl}/models/model-3`,
  card: {
    image: "/assets/images/model-3.jpg",
    alt: "Tesla Model 3",
    description: "Model 3 нь спорт седан маягийн цахилгаан машин. Жилийн 1.99% хүүтэй зээлээр авах боломжтой",
  },
  showcase: {
    media: { type: "image", src: "/assets/images/feature-model-3.jpg", alt: "Tesla Model 3" },
    paragraphs: [],
    primaryAction: "Одоо захиалах",
  },
};

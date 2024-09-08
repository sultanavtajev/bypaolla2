import { defineType, defineArrayMember } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      // Tekstblokker med forskjellige stiler
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    // Bilder inne i teksten
    defineArrayMember({
      type: "image",
      icon: ImageIcon,
      options: { hotspot: true }, // Hotspot lar deg justere beskjæringen
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternativ tekst",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "caption",
          type: "string",
          title: "Bildebeskrivelse",
        },
      ],
    }),
  ],
});

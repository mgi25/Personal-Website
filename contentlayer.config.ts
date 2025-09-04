import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    excerpt: { type: 'string', required: true },
    date: { type: 'date', required: true },
    updated: { type: 'date', required: false },
    tags: { type: 'list', of: { type: 'string' } },
    coverImage: { type: 'string' },
    canonicalUrl: { type: 'string' },
    draft: { type: 'boolean', default: false },
    featured: { type: 'boolean', default: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/articles/${doc.slug}`,
    },
  },
}));

export const Note = defineDocumentType(() => ({
  name: 'Note',
  filePathPattern: `notes/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    date: { type: 'date', required: true },
    topic: { type: 'string', required: true },
    cta: { type: 'string', required: false },
  },
  computedFields: {
    url: { type: 'string', resolve: (doc) => `/newsletter/${doc.slug}` },
  },
}));

export const Episode = defineDocumentType(() => ({
  name: 'Episode',
  filePathPattern: `episodes/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    date: { type: 'date', required: true },
    audioUrl: { type: 'string', required: true },
    duration: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    url: { type: 'string', resolve: (doc) => `/podcast/${doc.slug}` },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Note, Episode],
});

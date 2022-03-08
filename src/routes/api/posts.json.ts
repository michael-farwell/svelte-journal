// posts.json.ts
export const get = async () => {
  const allPostFiles = await import.meta.glob("../blog/*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(2, -3);

      return {
        meta: metadata,
        path: postPath,
      };
    }),
  );

  const sortedPosts = allPosts.sort((a: any, b: any) => {
    return new Date(b.meta.date as string).getTime() - new Date(a.meta.date as string).getTime();
  });

  return {
    body: sortedPosts,
  };
};

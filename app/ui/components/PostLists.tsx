// app/ui/components/PostsList.tsx

type Post = {
  id: number;
  title: string;
};

export default function PostsList({
  posts,
  deletePost,
}: {
  posts: Post[];
  deletePost: (id: number) => Promise<void>;
}) {
  if (!posts.length) return <p>No posts available</p>;

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex justify-between items-center bg-[#292929] p-4 rounded-md border border-gray-700 text-white"
        >
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <form
            action={async () => {
              "use server";
              await deletePost(post.id);
            }}
          >
            <button
              type="submit"
              className="px-3 py-1 rounded bg-red-600 hover:bg-red-700"
            >
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}

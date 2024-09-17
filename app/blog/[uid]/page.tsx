import { createClient } from "@/prismicio";
import Image from "next/image";

export default async function Page({ params }: { params: { uid: string } }) {
  const client = createClient();

  const postData = await client.getByUID("post", params.uid);

  if (!postData) {
    return <p>404 NOT FOUND</p>;
  }

  const data = postData.data.slices[0].primary;

  console.log(postData.data.slices[0].primary);

  //   const latestBlogPosts = await client.getAllByType("post", {
  //     fetchOptions: {
  //       cache: "no-store",
  //       next: { tags: ["prismic", "posts"] },
  //     },
  //     limit: 3,
  //     orderings: [
  //       {
  //         field: "my.post.published_on",
  //         direction: "desc",
  //       },
  //     ],
  //   });

  return (
    <div className="container grid grid-cols-2 items-center justify-center gap-4 py-12">
      <div className="relative aspect-video">
        <Image src={data.postimage.url} alt={data.postimage.alt} fill />
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-xl lg:text-3xl">{data.posttitle}</h1>
        <p className="text-lg leading-tight text-muted-foreground lg:text-xl">{data.autor}</p>
      </div>
    </div>
  );
}

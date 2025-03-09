import type { Post } from '#/content';

export type PostBodyProps = Pick<Post, 'body'>;

export function PostBody({ body }: PostBodyProps) {
  return (
    <div
      className="prose prose-tufted xl:prose-sidenotes dark:prose-invert max-w-none"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}

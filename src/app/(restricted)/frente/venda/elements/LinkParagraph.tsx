import Link from "next/link";

interface LinkParagraphProps{
  name: string
  href: string
  icon?: any
  className?: string
}

export default function LinkParagraph(props: LinkParagraphProps) {
  return (
    <Link href={props.href}>
      <p className="flex flex-row items-center"><span className="mx-2">{props.icon}</span>{props.name}</p>
    </Link>
  );
}
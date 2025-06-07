import Image from "next/image";

interface FeedbackCardProps {
  comment: string;
  userName: string;
  avatar: string;
}

export default function FeedbackCard({
  userName,
  avatar,
  comment,
}: FeedbackCardProps) {
  return (
    <div className="w-full lg:max-w-[600px] h-full flex flex-col justify-start items-center lg:flex-row lg:items-start gap-4 rounded-2xl">
      <Image
        src={avatar}
        alt="profile"
        width={60}
        height={60}
        className="rounded-full shrink-0 size-[60px] border-2 border-green-600"
      />
      <div className="w-full flex flex-col justify-start items-center lg:items-start gap-4 lg:gap-2">
        <p className="font-lalezar text-yellow-950 text-2xl">{userName}</p>
        <p className="font-lalezar text-yellow-700 text-center lg:text-right">
          {comment}
        </p>
      </div>
    </div>
  );
}

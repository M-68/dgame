"use client";

import { AvatarGenerator } from "@/components/Account/Avatar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CommentCardProps {
  author: string;
  content: string;
  createdAt: string;
  replyCount: number;
  parentCommentId?: number | null;
  children?: React.ReactNode;
  isSurveyor?: boolean;
  configuration?: {
    planetType?: string;
    preferred?: boolean;
  };
}
  
export function CommentCard({ author, content, createdAt, replyCount, parentCommentId, isSurveyor, configuration }: CommentCardProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto my-4 squiggly-connector bg-card text-card-foreground border-primary">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <AvatarGenerator author={author} />
          <div>
            <CardTitle>{author}</CardTitle>
            {isSurveyor && (
              <p className="text-red-800">{isSurveyor}</p>
            )}
            {configuration?.planetType && (
              <p className="text-green-200">{configuration.planetType}</p>
            )}
            {/* <p className="text-sm text-muted-foreground">Posted at {new Date(createdAt).toLocaleString()}</p> */}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      {/* <Button variant="ghost" size="sm" className="flex items-center">
        <MessageSquare className="mr-2 h-4 w-4" />
        {replyCount} Replies
      </Button> */}
    </Card>
  );
};
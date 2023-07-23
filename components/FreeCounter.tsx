"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/lib/constants";
import { Progress } from "./ui/progress";
import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { onOpen } from "@/redux/modal/modalSlice";
import { cn } from "@/lib/utils";

const FreeCounter = ({
  apiLimitCount,
  isPro = false,
  className,
}: {
  apiLimitCount: number;
  isPro: boolean;
  className?: string;
}) => {
  const dispatch = useDispatch();
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) return null;

  if (isPro) return null;

  return (
    <div className="px-3 lg:px-0">
      <Card className={cn("bg-white/10 border-0", className)}>
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
              className="h-3"
            />
          </div>
          <Button
            variant={"premium"}
            className="w-full"
            onClick={() => dispatch(onOpen())}
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;

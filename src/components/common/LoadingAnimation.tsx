import { mdiLoading } from "@mdi/js";
import Icon from "@mdi/react";
import { cn } from "@/utils/cn";

export const LoadingAnimation = () => {
  return (
    <div className={"m-auto flex justify-center items-center py-4"}>
      <Icon
        path={mdiLoading}
        className={cn(
          "transition-all text-primary h-12 w-12 animate-spin scale-1 mr-2"
        )}
      />
    </div>
  );
};

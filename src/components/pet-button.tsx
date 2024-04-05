import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

type PetButtonProps = {
  action: "add" | "edit" | "end";
};

export default function PetButton({ action }: PetButtonProps) {
  if (action === "add")
    return (
      <Button size={"icon"} className="absolute bottom-5 right-5 rounded-full">
        <PlusIcon className="h-6 w-6" />
      </Button>
    );

  if (action === "edit")
    return (
      <Button variant={"secondary"} size={"lg"}>
        Edit
      </Button>
    );

  if (action === "end")
    return (
      <Button variant={"secondary"} size={"lg"}>
        End Stay
      </Button>
    );
}

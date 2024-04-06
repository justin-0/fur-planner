import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import PetForm from "./pet-form";

type PetButtonProps = {
  action: "add" | "edit" | "end";
  onClick?: () => void;
};

export default function PetButton({ action, onClick }: PetButtonProps) {
  if (action === "add" || action === "edit")
    return (
      <Dialog>
        <DialogTrigger asChild>
          {action === "add" ? (
            <Button
              size={"icon"}
              className="absolute bottom-5 right-5 rounded-full"
            >
              <PlusIcon className="h-6 w-6" />
            </Button>
          ) : (
            <Button variant={"secondary"} size={"lg"}>
              Edit
            </Button>
          )}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {action === "add" ? `Add new pet` : `Update pet details`}
            </DialogTitle>
            <PetForm />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );

  if (action === "end")
    return (
      <Button variant={"secondary"} size={"lg"} onClick={onClick}>
        End Stay
      </Button>
    );
}

"use client";

import { usePetContext } from "@/contexts/PetContextProvider";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { PetData } from "@/types/types";
import { addPet } from "@/app/actions/actions";

type PetFormProps = {
  action: "add" | "edit";
  onClick: () => void;
};

export default function PetForm({ action, onClick }: PetFormProps) {
  const { petDetails } = usePetContext();

  return (
    <form action={addPet} className="space-y-4 text-left">
      <div className="space-y-2 ">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          defaultValue={action === "edit" ? petDetails?.name : ""}
        />
      </div>
      <div>
        <Label htmlFor="ownerName">Owners Name</Label>
        <Input
          id="ownerName"
          name="ownerName"
          type="text"
          required
          defaultValue={action === "edit" ? petDetails?.ownerName : ""}
        />
      </div>
      <div>
        <Label htmlFor="ownerName">Image Url</Label>
        <Input
          id="imageUrl"
          name="imageUrl"
          type="text"
          defaultValue={action === "edit" ? petDetails?.imageUrl : ""}
        />
      </div>
      <div>
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          name="age"
          type="number"
          required
          defaultValue={action === "edit" ? petDetails?.age : ""}
        />
      </div>
      <div>
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          defaultValue={action === "edit" ? petDetails?.notes : ""}
        />
      </div>
      <Button type="submit" className="mr-auto" onClick={onClick}>
        {action === "add" ? `Add new pet` : `Update pet`}
      </Button>
    </form>
  );
}

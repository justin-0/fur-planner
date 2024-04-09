"use client";

import { usePetContext } from "@/contexts/PetContextProvider";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { addPet } from "@/app/actions/actions";
import PetFormBtn from "./pet-form-btn";
import { toast } from "sonner";

type PetFormProps = {
  action: "add" | "edit";
  closeModal: () => void;
};

export default function PetForm({ action, closeModal }: PetFormProps) {
  const { petDetails } = usePetContext();

  return (
    <form
      action={async (formData) => {
        const error = await addPet(formData);
        if (error) {
          toast.error(error.message);
          return;
        }
        closeModal();
      }}
      className="space-y-4 text-left"
    >
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
      <PetFormBtn action={action} />
    </form>
  );
}

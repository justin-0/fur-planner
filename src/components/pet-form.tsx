"use client";

import { usePetContext } from "@/contexts/PetContextProvider";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { addPet, editPet } from "@/app/actions/actions";
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
        if (action === "add") {
          const add = await addPet(formData);
          if (add.message === "success") {
            toast.success("Pet Created.");
          } else {
            toast.error("Error: Pet Not Created.");
          }
        } else {
          const edit = await editPet(petDetails!?.id, formData);
          if (edit.message === "success") {
            toast.success("Pet Details Updated.");
          } else {
            toast.error("Error: Details Not Updated.");
          }
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

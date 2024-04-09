import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

type PetFormBtnProps = {
  action: "add" | "edit";
};
export default function PetFormBtn({ action }: PetFormBtnProps) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="mr-auto" disabled={pending}>
      {action === "add" ? `Add new pet` : `Update pet`}
    </Button>
  );
}

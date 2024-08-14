import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";

interface Props {
  open: boolean;
  isLoading: boolean;
  onOpenChange: (bool: boolean) => void;
  title: string;
  description: string;
  onConfirmClick: (bool: boolean) => void;
}

const ConfirmDialog = (props: Props) => {
  return (
    <AlertDialog open={props.open} onOpenChange={props.onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{props.title}</AlertDialogTitle>
          <AlertDialogDescription>{props.description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={props.isLoading}>
            Cancel
          </AlertDialogCancel>
          <Button
            disabled={props.isLoading}
            onClick={() => props.onConfirmClick(true)}
          >
            Ok
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmDialog;

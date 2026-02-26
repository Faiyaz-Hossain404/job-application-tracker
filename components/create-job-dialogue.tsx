"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger } from "./ui/dialog";

interface CreateJobApplicationDialogueProps {
  columnId: string;
  boardId: string;
}

export default function CreateJobApplicationDialogue({
  columnId,
  boardId,
}: CreateJobApplicationDialogueProps) {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button>
            <Plus />
            Add Job
          </Button>
        </DialogTrigger>
      </Dialog>
    </>
  );
}

"use client";

import { format } from "date-fns";
import { Eye } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

import { useUpdateUser } from "@/hooks/useUpdateUser";
import { IUser, UserStatus } from "@/types/user";

type Props = {
  user: IUser;
};

export default function UserDetailsDialog({ user }: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<UserStatus>(user.status);

  const { updateUserAsync, isPending } = useUpdateUser();

  async function handleSave() {
    const result = await updateUserAsync({
      userId: user.id,
      status,
    });

    if (result.success) {
      setOpen(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={(props) => (
          <Button {...props} variant="outline" size="icon">
            <Eye className="h-4 w-4" />
          </Button>
        )}
      />

      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>

          <DialogDescription>User #{user.id.slice(0, 8)}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Basic Information
            </h3>

            <div className="space-y-3 rounded-xl border p-4">
              <div>
                <p className="text-xs text-muted-foreground">Name</p>
                <p className="font-medium">{user.name}</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p>{user.email}</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p>{user.phone || "N/A"}</p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Account
            </h3>

            <div className="grid grid-cols-2 gap-5 rounded-xl border p-4">
              <div>
                <p className="mb-2 text-xs text-muted-foreground">Role</p>
                <p className="font-medium">{user.role}</p>
              </div>

              <div>
                <p className="mb-2 text-xs text-muted-foreground">Status</p>

                <Select
                  value={status}
                  onValueChange={(value) => setStatus(value as UserStatus)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="ACTIVE">Active</SelectItem>

                    <SelectItem value="INACTIVE">Inactive</SelectItem>

                    <SelectItem value="SUSPENDED">Suspended</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="col-span-2">
                <p className="text-xs text-muted-foreground">Joined</p>

                <p className="font-medium">
                  {format(new Date(user.createdAt), "dd MMM yyyy")}
                </p>
              </div>
            </div>
          </section>
        </div>

        <DialogFooter showCloseButton={false}>
          <Button
            disabled={isPending || status === user.status}
            onClick={handleSave}
          >
            {isPending ? "Saving..." : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

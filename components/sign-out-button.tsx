"use client";

export default function SignOutButton() {
  return (
    <DropdownMenuItem onClick={async () => await signOut()}>
      Log Out
    </DropdownMenuItem>
  );
}

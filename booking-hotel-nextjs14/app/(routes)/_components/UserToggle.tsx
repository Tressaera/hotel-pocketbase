import { UserIcon } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const UserToggle = () => {
  return (
    <Link href="/auth/login">
      <UserIcon className="text-white dark:text-white" />
    </Link>
  );
};

export default UserToggle;

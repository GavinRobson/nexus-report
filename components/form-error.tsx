import { TriangleAlertIcon } from 'lucide-react';

type Props = {
  message?: string;
};

export const FormError = ({ message }: Props) => {
  if (!message) return null;

  return (
    <div className="bg-[#FF003D]/15 p-3 rounded-md flex space-x-2 items-center text-sm text-red-800">
      <TriangleAlertIcon className="h-6 w-4" />
      <p>{message}</p>
    </div>
  );
};

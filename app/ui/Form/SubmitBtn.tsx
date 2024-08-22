import { Button } from "./Button";

type SubmitBtnProps = {
  isSubmitting: boolean;
  children: React.ReactNode;
};
export const SubmitBtn = ({ isSubmitting, children }: SubmitBtnProps) => {
  return (
    <Button type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Submitting..." : children}
    </Button>
  );
};

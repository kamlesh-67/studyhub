import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../components/ui/alert";
import { CheckCircle, XCircle } from "lucide-react";

export default function PaymentStatus({ status }) {
  if (status === "success") {
    return (
      <Alert className="mt-8 bg-green-100 dark:bg-green-900">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Payment Successful</AlertTitle>
        <AlertDescription>
          Your payment has been processed successfully. Thank you for your
          purchase!
        </AlertDescription>
      </Alert>
    );
  } else if (status === "failure") {
    return (
      <Alert className="mt-8 bg-red-100 dark:bg-red-900">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Payment Failed</AlertTitle>
        <AlertDescription>
          There was an issue processing your payment. Please try again or
          contact support.
        </AlertDescription>
      </Alert>
    );
  }

  return null;
}

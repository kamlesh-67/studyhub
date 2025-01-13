import { Button } from "../../../components/ui/button";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";
import { Label } from "../../../components/ui/label";
import {
  CreditCard,
  Smartphone,
  ShoppingCartIcon as Paypal,
} from "lucide-react";

export default function PaymentOptions({ onPayment }) {
  return (
    <div className="space-y-6">
      <RadioGroup defaultValue="card">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="upi" id="upi" />
          <Label htmlFor="upi" className="flex items-center">
            <Smartphone className="w-6 h-6 mr-2" />
            UPI
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="card" id="card" />
          <Label htmlFor="card" className="flex items-center">
            <CreditCard className="w-6 h-6 mr-2" />
            Credit/Debit Card
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="paypal" id="paypal" />
          <Label htmlFor="paypal" className="flex items-center">
            <Paypal className="w-6 h-6 mr-2" />
            PayPal
          </Label>
        </div>
      </RadioGroup>
      <Button
        className="w-full text-lg py-6 transition-all duration-300 hover:bg-primary-dark"
        onClick={onPayment}
      >
        Pay Now
      </Button>
    </div>
  );
}

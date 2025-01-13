"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import BillingForm from "./components/BillingForm";
import OrderSummary from "./components/OrderSummary";
import PaymentOptions from "./components/PaymentOptions";
import PaymentStatus from "./components/PaymentStatus";

export default function PaymentPage() {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus(Math.random() > 0.5 ? "success" : "failure");
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Complete Your Payment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Billing Details</CardTitle>
          </CardHeader>
          <CardContent>
            <BillingForm />
          </CardContent>
        </Card>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <OrderSummary />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Payment Options</CardTitle>
            </CardHeader>
            <CardContent>
              <PaymentOptions onPayment={handlePayment} />
            </CardContent>
          </Card>
        </div>
      </div>
      {paymentStatus && <PaymentStatus status={paymentStatus} />}
    </div>
  );
}

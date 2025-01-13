import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

export default function BillingForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>
      <div>
        <Label htmlFor="address">Address</Label>
        <Input id="address" placeholder="123 Main St, City, Country" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john@example.com" />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" placeholder="+1 234 567 8900" />
      </div>
    </form>
  );
}

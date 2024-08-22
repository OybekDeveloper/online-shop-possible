import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const OrderPage = () => {
  return (
    <main className="min-h-screen max-w-7xl w-11/12 mx-auto xl:px-0 mt-[100px]">
      <Card>
        <CardHeader>
          <CardTitle>Sell your product with ease</CardTitle>
          <CardDescription>
            Please describle your here in detail so that it can be solid
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-2">
          <form className="space-y-3">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Phone</Label>
              <Input type="text" id="phone" placeholder="Phone" />
            </div>
            {/* <div className="flex flex-col gap-y-2">
            <Label>Category</Label>
            <SelectCategory />
          </div> */}
            <div>
              <Label>Price</Label>
              <Input type="number" placeholder="$29" />
            </div>
            <div>
              <Label>Small Summary</Label>
              <Textarea placeholder="Please discribe your project shortly right..." />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end w-full">
          <Button>Submit form</Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default OrderPage;

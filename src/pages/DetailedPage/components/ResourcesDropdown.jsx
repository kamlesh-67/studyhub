"use client";

import { Button } from "../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function ResourcesDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Additional Resources
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <a href="#" className="w-full">
            React Documentation
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="#" className="w-full">
            Community Forums
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="#" className="w-full">
            Video Tutorials
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, BookOpen } from "lucide-react";
import { Button } from "../../../components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../components/ui/collapsible";

export default function VerticalNav() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="w-64">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between">
            <span className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4" />
              React Fundamentals
            </span>
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul className="pl-4 py-2">
            <li>
              <a href="#" className="block py-2 hover:text-blue-600">
                Introduction to React
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-blue-600">
                Components and Props
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-blue-600">
                State and Lifecycle
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-blue-600">
                Hooks
              </a>
            </li>
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </nav>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const links = [
  { title: "Submit Time Off Request", href: "#" },
  { title: "Access Learning Portal", href: "#" },
  { title: "View Pay Stub", href: "#" },
  { title: "Update Personal Info", href: "#" },
  { title: "Book a Meeting Room", href: "#" },
];

export const QuickLinks = () => {
  return (
    <Card className="backdrop-blur-sm bg-card/90 border border-border/50">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Quick Links</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        {links.map((link) => (
          <Button
            key={link.title}
            variant="ghost"
            className="w-full justify-start hover:bg-primary/10 hover:text-primary transition-colors duration-300"
            asChild
          >
            <a href={link.href}>{link.title}</a>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};